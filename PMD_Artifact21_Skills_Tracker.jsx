import { useState } from "react";

// ── PMD ROADMAP DATA ──────────────────────────────────────────────────────────
const PHASES = [
    {
        id: "I", label: "Phase I", title: "Foundation",
        subtitle: "Static Web, Git & Product Communication",
        range: "P1 – P7", color: "#1B3A5C",
        projects: [
            { id: "P1", title: "Personal Link-in-Bio Page", skills: ["HTML5 Semantic Structure", "CSS Flexbox", "CSS Custom Properties", "Git Init & Commit", "Netlify CI/CD"], tools: ["HTML5", "CSS3", "Git", "GitHub", "Netlify"], status: "not-started" },
            { id: "P2", title: "Multi-Page Product Marketing Site", skills: ["CSS Grid", "Multi-page Structure", "Tailwind CSS", "Vanilla JS Modals", "Information Architecture"], tools: ["HTML5", "CSS3", "Tailwind CSS", "Vanilla JS", "Figma"], status: "not-started" },
            { id: "P3", title: "Interactive Product Calculator", skills: ["DOM Manipulation", "Form Validation", "Conditional Logic", "Error Handling", "Business Logic Documentation"], tools: ["Vanilla JS", "HTML5", "CSS3", "GitHub"], status: "not-started" },
            { id: "P4", title: "Responsive Case Study Template", skills: ["Responsive Layout", "Print CSS", "Semantic Sectioning", "Typography System", "Five-Part Case Study Structure"], tools: ["HTML5", "CSS3", "Figma", "GitHub", "Netlify"], status: "not-started" },
            { id: "P5", title: "Product Teardown & Redesign", skills: ["Heuristic Evaluation", "UX Critique", "Competitive Analysis", "OKR Definition", "Figma Wireframes"], tools: ["Figma", "HTML5", "CSS3", "axe-core", "GitHub"], status: "not-started", portfolio: true, portfolioLabel: "Portfolio Candidate" },
            { id: "P6", title: "Public API Data Dashboard", skills: ["Fetch API", "Async/Await", "REST API Consumption", "JSON Parsing", "Chart.js", "Error & Loading States"], tools: ["Vanilla JS", "Chart.js", "OpenWeatherMap API", "GitHub"], status: "not-started" },
            { id: "P7", title: "Multi-Page Portfolio Site", skills: ["History API Routing", "JS Module Pattern", "CSS Transitions", "Open Graph Meta Tags", "GA4 Integration"], tools: ["Vanilla JS", "History API", "Google Analytics 4", "GitHub", "Netlify"], status: "not-started" },
        ]
    },
    {
        id: "II", label: "Phase II", title: "Front-End Framework",
        subtitle: "React, Component Architecture & Managed Auth",
        range: "P8 – P16", color: "#1A5276",
        projects: [
            { id: "P8", title: "React Component Library", skills: ["React Functional Components", "Props & PropTypes", "CSS Modules", "TypeScript Intro", "Vite Setup"], tools: ["React", "Vite", "CSS Modules", "TypeScript", "axe-core"], status: "not-started" },
            { id: "P9", title: "React Task Board (Kanban)", skills: ["useState", "useReducer", "useEffect", "Drag & Drop API", "Component Composition"], tools: ["React", "Vite", "TypeScript", "Tailwind CSS", "LocalStorage"], status: "not-started" },
            { id: "P10", title: "Product Requirements Manager App", skills: ["React Controlled Forms", "Markdown Editor", "Template Patterns", "TypeScript Interfaces"], tools: ["React", "TypeScript", "Tailwind CSS", "Marked.js", "LocalStorage"], status: "not-started" },
            { id: "P11", title: "Now / Next / Later Roadmap Builder", skills: ["React Router v6", "Dynamic Route Params", "RICE Framework", "MoSCoW Framework", "Client-side Export"], tools: ["React", "React Router", "Recharts", "TypeScript", "Tailwind CSS"], status: "not-started" },
            { id: "P12", title: "Product Metrics Dashboard", skills: ["KPI Definition", "AARRR Funnel", "Dashboard Layout Hierarchy", "Memoization", "Skeleton Loading"], tools: ["React", "Recharts", "TypeScript", "Tailwind CSS"], status: "not-started" },
            { id: "P13", title: "Global State — Shopping Cart", skills: ["Zustand", "Redux Toolkit", "Selector Patterns", "Optimistic UI", "Cart UX Patterns"], tools: ["React", "Zustand", "TypeScript", "Tailwind CSS"], status: "not-started" },
            { id: "P14", title: "Next.js SSG/SSR Content Site", skills: ["Next.js", "Static Site Generation", "Server-Side Rendering", "Content Modeling", "SEO Strategy"], tools: ["Next.js", "Contentful or Sanity", "TypeScript", "Tailwind CSS", "Vercel"], status: "not-started" },
            { id: "P15", title: "User Accounts & Auth — Managed", skills: ["Supabase Auth", "Protected Routes", "Row-Level Security Intro", "Email Verification", "Account Lifecycle"], tools: ["Supabase or Firebase", "Next.js", "TypeScript", "Tailwind CSS"], status: "not-started", authMilestone: true },
            { id: "P16", title: "Component Testing", skills: ["Jest", "React Testing Library", "Test Coverage", "Mocking", "GitHub Actions CI Intro"], tools: ["Jest", "React Testing Library", "GitHub Actions", "TypeScript"], status: "not-started" },
        ]
    },
    {
        id: "III", label: "Phase III", title: "Backend & Database",
        subtitle: "Custom APIs, Persistence & Full-Ownership Auth",
        range: "P17 – P24", color: "#117A65",
        projects: [
            { id: "P17", title: "Custom REST API — Node/Express", skills: ["Node.js", "Express.js", "RESTful Routing", "Middleware Chain", "Postman Documentation", "Rate Limiting"], tools: ["Node.js", "Express.js", "Postman", "dotenv", "express-validator"], status: "not-started" },
            { id: "P18", title: "PostgreSQL + Prisma ORM", skills: ["PostgreSQL", "Prisma ORM", "Database Migrations", "Schema Design", "SQL Fundamentals", "ERD Documentation"], tools: ["PostgreSQL", "Prisma", "Node.js", "Express.js", "pgAdmin"], status: "not-started" },
            { id: "P19", title: "Custom JWT Auth from Scratch", skills: ["JWT", "bcrypt", "Refresh Token Rotation", "HTTP-only Cookies", "Password Reset Flow"], tools: ["JWT", "bcrypt", "Node.js", "Express.js", "PostgreSQL", "SendGrid"], status: "not-started", authMilestone: true },
            { id: "P20", title: "Full-Stack Integrated App", skills: ["Full-Stack Integration", "CORS Configuration", "Environment Variables", "System Architecture Diagramming", "Deployment Runbook"], tools: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Render"], status: "not-started" },
            { id: "P21", title: "RBAC + Admin Dashboard", skills: ["RBAC Middleware", "Permission-Gated Rendering", "Audit Logging", "Admin UI Patterns", "Soft Delete"], tools: ["Node.js", "PostgreSQL", "React", "JWT with Roles", "Prisma"], status: "not-started" },
            { id: "P22", title: "File Uploads & Cloud Storage", skills: ["AWS S3 or Supabase Storage", "Multer", "Presigned URLs", "File Validation", "Storage Cost Modeling"], tools: ["AWS S3 or Supabase", "Multer", "Node.js", "React"], status: "not-started" },
            { id: "P23", title: "Transactional Email System", skills: ["SendGrid API", "HTML Email Templating", "Webhook Handling", "Deliverability Requirements", "Unsubscribe Management"], tools: ["SendGrid", "Node.js", "HTML Email Templates", "Prisma"], status: "not-started" },
            { id: "P24", title: "MongoDB Activity Feed", skills: ["MongoDB", "Mongoose", "Document Schema Design", "Aggregation Pipeline", "SQL vs NoSQL Decision Framework"], tools: ["MongoDB", "Mongoose", "Node.js", "Express.js"], status: "not-started" },
        ]
    },
    {
        id: "IV", label: "Phase IV", title: "Product Collaboration",
        subtitle: "Team Features, Real-Time & Customer Discovery",
        range: "P25 – P30", color: "#4A235A",
        projects: [
            { id: "P25", title: "Team Workspaces & Org Auth", skills: ["Organization Schema", "Email Invitations", "Org-Level RBAC", "Workspace Context Middleware", "Team Onboarding Flow"], tools: ["Node.js", "PostgreSQL", "Prisma", "React", "SendGrid", "JWT"], status: "not-started", authMilestone: true },
            { id: "P26", title: "Comments, @Mentions & Threads", skills: ["Nested Comment Schema", "@Mention Parsing", "Notification Triggers", "Soft Delete with Audit", "Collaborative UX Design"], tools: ["Node.js", "PostgreSQL", "Prisma", "React"], status: "not-started" },
            { id: "P27", title: "Real-Time Collaboration", skills: ["WebSockets", "Socket.io", "Room Broadcasting", "Presence Tracking", "Optimistic UI", "Latency Tolerance Rules"], tools: ["Socket.io", "Node.js", "PostgreSQL", "React", "Redis"], status: "not-started" },
            { id: "P28", title: "In-App Notification Center", skills: ["Notification Schema", "Unread Count Aggregation", "WebSocket Badge Updates", "Notification Fatigue Strategy", "Multi-channel Preferences"], tools: ["Node.js", "PostgreSQL", "Socket.io", "React", "SendGrid"], status: "not-started" },
            { id: "P29", title: "Customer Feedback Portal", skills: ["Voting & Ranking System", "Status Workflow", "Voice-of-Customer Synthesis", "Roadmap Transparency", "Feedback Taxonomy"], tools: ["Next.js", "PostgreSQL", "Prisma", "React", "SendGrid"], status: "not-started" },
            { id: "P30", title: "Full-Text Search", skills: ["Algolia or PostgreSQL FTS", "Index Schema Design", "Relevance Tuning", "Faceted Filtering", "Search Analytics"], tools: ["Algolia or PostgreSQL FTS", "Node.js", "React", "TypeScript"], status: "not-started" },
        ]
    },
    {
        id: "V", label: "Phase V", title: "Payments, Monetization & Analytics",
        subtitle: "Stripe, Feature Flags, A/B Testing & CDP",
        range: "P31 – P40", color: "#7D6608",
        projects: [
            { id: "P31", title: "Stripe One-Time Payment", skills: ["Stripe API", "Stripe Webhooks", "Idempotency Keys", "Payment Intent Lifecycle", "PCI Compliance Awareness"], tools: ["Stripe", "Node.js", "Express.js", "React", "SendGrid"], status: "not-started" },
            { id: "P32", title: "Subscription Billing — SaaS Tiers", skills: ["Stripe Subscriptions", "Stripe Customer Portal", "Plan Entitlement Middleware", "Subscription Lifecycle Mapping", "LTV/CAC Fundamentals"], tools: ["Stripe", "Node.js", "PostgreSQL", "Prisma", "React"], status: "not-started" },
            { id: "P33", title: "Pricing Page & Upgrade Prompts", skills: ["Pricing Psychology", "Packaging Strategy", "Feature-Gated UI", "Contextual Upgrade Modals", "Conversion Optimization"], tools: ["React", "Stripe", "Tailwind CSS", "TypeScript"], status: "not-started", portfolio: true, portfolioLabel: "Portfolio Candidate — GTM: Pricing" },
            { id: "P34", title: "Feature Flags — LaunchDarkly", skills: ["LaunchDarkly SDK", "Flag Targeting Rules", "Rollout Strategy Design", "Kill Switch", "Beta Group Management"], tools: ["LaunchDarkly", "React", "Node.js", "TypeScript"], status: "not-started" },
            { id: "P35", title: "Product Analytics — Event Taxonomy", skills: ["Mixpanel or Amplitude SDK", "Event Taxonomy Design", "Funnel Visualization", "Cohort Analysis", "AARRR Framework"], tools: ["Mixpanel or Amplitude", "Segment.io", "React", "Node.js"], status: "not-started" },
            { id: "P36", title: "Onboarding Activation Optimization", skills: ["Onboarding Funnel Analysis", "Activation Metric Definition", "Drop-off Hypothesis", "Before/After Comparison", "Iteration Decision Documentation"], tools: ["React", "Node.js", "Mixpanel", "LaunchDarkly", "PostgreSQL"], status: "not-started", portfolio: true, portfolioLabel: "Portfolio Candidate — Metric Optimization" },
            { id: "P37", title: "A/B Testing — Full Experiment", skills: ["A/B Test Design", "Statistical Significance", "MDE Calculation", "Null Hypothesis Framing", "Rollout Decision Memo"], tools: ["LaunchDarkly", "Mixpanel or Amplitude", "React"], status: "not-started" },
            { id: "P38", title: "Lifecycle Email & Retention System", skills: ["Behavioral Email Sequences", "User Segmentation", "BullMQ Job Queue", "Churn Prevention Framework", "Lifecycle Messaging Strategy"], tools: ["SendGrid", "BullMQ", "Redis", "Node.js", "PostgreSQL"], status: "not-started" },
            { id: "P39", title: "SQL Analytics for PMs", skills: ["Advanced SQL", "Window Functions", "CTEs", "Aggregation Queries", "Metabase Dashboard", "Self-Service Analytics"], tools: ["PostgreSQL", "Metabase or Redash", "SQL", "pgAdmin"], status: "not-started" },
            { id: "P40", title: "Customer Data Platform — Segment", skills: ["Segment.io CDP", "Identity Resolution", "Event Routing Rules", "Data Governance", "CSV/PDF Export"], tools: ["Segment.io", "Node.js", "React", "Mixpanel", "SendGrid"], status: "not-started" },
        ]
    },
    {
        id: "VI", label: "Phase VI", title: "Real-Time, Scale & Infrastructure",
        subtitle: "BullMQ, Caching, OAuth2, Accessibility & PWA",
        range: "P41 – P47", color: "#922B21",
        projects: [
            { id: "P41", title: "Background Job Queue — BullMQ", skills: ["BullMQ", "Redis Worker Processes", "Retry/Backoff Patterns", "Dead Letter Queue", "Job Status Dashboard"], tools: ["BullMQ", "Redis", "Node.js", "PostgreSQL", "React"], status: "not-started" },
            { id: "P42", title: "Redis Caching & Performance", skills: ["Redis Caching", "TTL Strategy", "Cache Invalidation", "Google Lighthouse", "Web Vitals Baseline", "Performance Budget"], tools: ["Redis", "Node.js", "Google Lighthouse", "Postman", "pgAdmin"], status: "not-started" },
            { id: "P43", title: "Integrations Marketplace — OAuth2", skills: ["OAuth2 Authorization Flow", "Token Storage & Refresh", "Webhook Reliability", "Integration State Management", "Platform Strategy"], tools: ["OAuth2", "Node.js", "PostgreSQL", "React", "Slack API"], status: "not-started", portfolio: true, portfolioLabel: "Portfolio Candidate — GTM: Integrations" },
            { id: "P44", title: "Internal Sales Enablement Portal", skills: ["GTM Launch Kit", "Sales Enablement Documentation", "Stakeholder Alignment Artifacts", "Launch Readiness Checklist", "Influence Without Authority"], tools: ["Next.js", "PostgreSQL", "Prisma", "Auth", "Markdown", "Search"], status: "not-started" },
            { id: "P45", title: "WCAG 2.2 AA Audit & Remediation", skills: ["axe-core Automated Audit", "ARIA Roles & Labels", "Keyboard Navigation", "Focus Management", "Screen Reader Testing", "Color Contrast"], tools: ["axe-core", "NVDA or VoiceOver", "Colour Contrast Analyser", "React"], status: "not-started" },
            { id: "P46", title: "Internationalization — i18n/l10n", skills: ["i18next", "React-i18next", "RTL CSS Layouts", "Locale-aware Formatting", "Pluralization Rules", "Translation Workflow"], tools: ["i18next", "React", "Node.js", "Crowdin", "Tailwind RTL"], status: "not-started" },
            { id: "P47", title: "Progressive Web App (PWA)", skills: ["Service Worker", "Cache API", "Web Push API", "Manifest.json", "Workbox", "Lighthouse PWA Audit"], tools: ["Service Worker API", "Web Push API", "Workbox", "React", "Lighthouse"], status: "not-started" },
        ]
    },
    {
        id: "VII", label: "Phase VII", title: "AI & Machine Learning",
        subtitle: "LLMs, RAG Pipelines, ML Models & Agents",
        range: "P48 – P56", color: "#1F618D",
        projects: [
            { id: "P48", title: "OpenAI API Text Generation", skills: ["OpenAI API", "Streaming Responses", "Token Budgeting", "Rate Limiting", "AI Failure Mode Documentation", "Cost Monitoring"], tools: ["OpenAI API", "Node.js", "React", "TypeScript"], status: "not-started" },
            { id: "P49", title: "Anthropic Claude Structured Output", skills: ["Anthropic SDK", "System Prompts", "Multi-turn Conversation", "JSON Schema", "Zod Validation", "Output Evaluation"], tools: ["Anthropic SDK", "Node.js", "React", "TypeScript", "Zod"], status: "not-started" },
            { id: "P50", title: "AI PRD Assistant — Greenfield", skills: ["0-to-1 Product Launch", "AI UX Design", "Prompt Engineering as Requirement", "Version History in PostgreSQL", "Full PM Lifecycle Ownership"], tools: ["Anthropic or OpenAI API", "Next.js", "PostgreSQL", "Prisma", "Stripe", "TypeScript"], status: "not-started", portfolio: true, portfolioLabel: "Portfolio Candidate — 0-to-1 Greenfield" },
            { id: "P51", title: "Vector DB & Semantic Search", skills: ["Pinecone or pgvector", "OpenAI Embeddings", "Cosine Similarity", "Hybrid Search", "Chunking Strategy"], tools: ["Pinecone or pgvector", "OpenAI Embeddings", "Node.js", "TypeScript"], status: "not-started" },
            { id: "P52", title: "RAG Pipeline", skills: ["LangChain", "Vector Retrieval", "Context Window Management", "Source Citation Injection", "Hallucination Mitigation"], tools: ["LangChain", "Pinecone or pgvector", "OpenAI or Anthropic", "Node.js", "TypeScript"], status: "not-started" },
            { id: "P53", title: "AI Document Analysis Tool", skills: ["PDF Text Extraction", "Multimodal Inputs", "Structured Extraction Prompts", "Confidence Scoring", "Edge Case Documentation"], tools: ["Anthropic or OpenAI API", "pypdf", "Node.js", "React", "TypeScript"], status: "not-started" },
            { id: "P54", title: "AI Chatbot with Memory & Guardrails", skills: ["Conversation Memory", "Tool Use / Function Calling", "Content Filtering", "Persona Specification", "Content Policy Documentation"], tools: ["Anthropic or OpenAI API", "LangChain", "PostgreSQL", "React", "TypeScript"], status: "not-started" },
            { id: "P55", title: "ML Predictive Feature", skills: ["Python", "scikit-learn", "Feature Engineering", "Model Evaluation Metrics", "FastAPI Model Serving", "Model Card Documentation"], tools: ["Python", "scikit-learn", "pandas", "FastAPI", "PostgreSQL"], status: "not-started" },
            { id: "P56", title: "AI Agent with Tool Orchestration", skills: ["LangChain Agents", "Tool Definitions", "Reasoning Loop Patterns", "LangSmith Tracing", "Agentic UX Design", "Failure Recovery"], tools: ["Anthropic or OpenAI API", "LangChain", "Python or Node.js", "LangSmith"], status: "not-started" },
        ]
    },
    {
        id: "VIII", label: "Phase VIII", title: "Platform, Mobile & Production Scale",
        subtitle: "GraphQL, React Native, Docker, CI/CD & SaaS Capstone",
        range: "P57 – P66+", color: "#1E4620",
        projects: [
            { id: "P57", title: "GraphQL API — Apollo Server", skills: ["GraphQL", "Apollo Server", "Resolvers & Mutations", "DataLoader", "Schema-First Design", "Apollo Client"], tools: ["GraphQL", "Apollo Server", "Apollo Client", "Node.js", "TypeScript"], status: "not-started" },
            { id: "P58", title: "React Native Mobile App", skills: ["React Native", "Expo", "React Navigation", "Device APIs", "APNs/FCM Push Notifications", "Offline Storage", "App Store Submission"], tools: ["React Native", "Expo", "TypeScript", "React Navigation", "Firebase Cloud Messaging"], status: "not-started" },
            { id: "P59", title: "Docker Containerization", skills: ["Docker", "Docker Compose", "Multi-stage Builds", "Health Checks", "Volume Management", "Environment Parity"], tools: ["Docker", "Docker Compose", "Node.js", "PostgreSQL", "Redis"], status: "not-started" },
            { id: "P60", title: "CI/CD Pipeline — GitHub Actions", skills: ["GitHub Actions Workflow YAML", "Test Automation in CI", "Branch Protection Rules", "Blue-Green Deployment", "DORA Metrics Awareness"], tools: ["GitHub Actions", "Docker", "Render or Railway or AWS"], status: "not-started" },
            { id: "P61", title: "Multi-Tenant SaaS Architecture", skills: ["PostgreSQL Row-Level Security", "Tenant Context Middleware", "Shared Schema with tenant_id", "Per-Tenant Billing", "Enterprise Sales Readiness"], tools: ["PostgreSQL", "Node.js", "Prisma", "Stripe", "React"], status: "not-started" },
            { id: "P62", title: "Micro-Frontend Architecture", skills: ["Webpack Module Federation", "Shell Application Pattern", "Independent Deployment Pipelines", "Feature Ownership Models", "Cross-team Dependency Charting"], tools: ["Webpack Module Federation", "React", "TypeScript", "GitHub Actions"], status: "not-started" },
            { id: "P63", title: "Observability Stack", skills: ["Structured Logging", "Sentry Error Tracking", "Uptime Monitoring", "Alert Threshold Design", "SLA/SLO Definition", "Post-mortem Process"], tools: ["Sentry", "Datadog or Grafana", "PagerDuty", "Node.js", "GitHub Actions"], status: "not-started" },
            { id: "P64", title: "Executive Reporting Dashboard", skills: ["Business Intelligence Fundamentals", "Cohort Analysis", "Leading vs Lagging Indicators", "Report Builder UI", "Metrics Hierarchy"], tools: ["PostgreSQL", "Metabase or Redash", "Recharts", "Node.js", "React", "SQL"], status: "not-started", portfolio: true, portfolioLabel: "Portfolio Candidate — Analytics PM" },
            { id: "P65", title: "Enterprise Pricing Migration", skills: ["Stripe Usage-Based Billing", "Real-time Consumption Telemetry", "GTM Launch Kit Construction", "Backward Compatibility Strategy", "Pricing Migration Risk Log"], tools: ["Stripe Usage-Based", "PostgreSQL", "Node.js", "React", "Segment.io"], status: "not-started", portfolio: true, portfolioLabel: "Portfolio Candidate — GTM: Pricing Migration" },
            { id: "P66", title: "Full SaaS Capstone — Flagship", skills: ["End-to-End Product Lifecycle", "Full Case Study Suite", "Launch Narrative", "Business Model Documentation", "Production SaaS Deployment"], tools: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "OpenAI/Anthropic", "Mixpanel", "Vercel", "Docker", "Figma"], status: "not-started", portfolio: true, portfolioLabel: "FLAGSHIP — Full SaaS Capstone" },
        ]
    },
];

const STATUS_CONFIG = {
    "not-started": { color: "#333344", border: "#444466", label: "Not Started", dot: "#555577" },
    "in-progress": { color: "#3D2B00", border: "#CC8800", label: "In Progress", dot: "#FFB300" },
    "complete": { color: "#0A2E1A", border: "#22C55E", label: "Complete", dot: "#22C55E" },
};

const PHASE_COLORS = {
    "I": "#1B3A5C", "II": "#1A5276", "III": "#117A65", "IV": "#4A235A",
    "V": "#7D6608", "VI": "#922B21", "VII": "#1F618D", "VIII": "#1E4620",
};

export default function SkillsTracker() {
    const [expandedPhases, setExpandedPhases] = useState({ "I": true });
    const [expandedProjects, setExpandedProjects] = useState({});
    const [activeTab, setActiveTab] = useState("tracker"); // tracker | legend
    const [filterStatus, setFilterStatus] = useState("all");

    // Compute stats
    const allProjects = PHASES.flatMap(p => p.projects);
    const totalProjects = allProjects.length;
    const complete = allProjects.filter(p => p.status === "complete").length;
    const inProgress = allProjects.filter(p => p.status === "in-progress").length;
    const notStarted = allProjects.filter(p => p.status === "not-started").length;
    const portfolioCandidates = allProjects.filter(p => p.portfolio).length;

    const togglePhase = (id) => setExpandedPhases(p => ({ ...p, [id]: !p[id] }));
    const toggleProject = (id) => setExpandedProjects(p => ({ ...p, [id]: !p[id] }));

    const getPhaseStats = (phase) => {
        const total = phase.projects.length;
        const done = phase.projects.filter(p => p.status === "complete").length;
        const wip = phase.projects.filter(p => p.status === "in-progress").length;
        const pct = Math.round((done / total) * 100);
        return { total, done, wip, pct };
    };

    const StatusDot = ({ status, size = 10 }) => (
        <span style={{
            display: "inline-block", width: size, height: size, borderRadius: "50%",
            background: STATUS_CONFIG[status].dot,
            boxShadow: status !== "not-started" ? `0 0 6px ${STATUS_CONFIG[status].dot}` : "none",
            flexShrink: 0,
        }} />
    );

    const Tag = ({ label, color, bg }) => (
        <span style={{
            display: "inline-block", padding: "2px 7px", borderRadius: 3,
            fontSize: 10, fontWeight: 700, letterSpacing: "0.04em",
            color, background: bg, border: `1px solid ${color}40`,
        }}>{label}</span>
    );

    return (
        <div style={{
            minHeight: "100vh", background: "#0C0C12", color: "#E8E8F0",
            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
            padding: "0 0 60px 0",
        }}>
            {/* ── HEADER ── */}
            <div style={{
                background: "linear-gradient(180deg, #111122 0%, #0C0C12 100%)",
                borderBottom: "1px solid #222236", padding: "28px 24px 20px",
            }}>
                <div style={{ maxWidth: 960, margin: "0 auto" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                        <div>
                            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#CC785C", marginBottom: 6, textTransform: "uppercase" }}>
                                PMD · Artifact #21
                            </div>
                            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                                Skills & Tools Tracker
                            </h1>
                            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#8888AA" }}>
                                8 phases · {totalProjects} projects · {portfolioCandidates} portfolio candidates · May 2026
                            </p>
                        </div>

                        {/* Stats */}
                        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                            {[
                                { label: "Complete", value: complete, color: "#22C55E", bg: "#0A2E1A" },
                                { label: "In Progress", value: inProgress, color: "#FFB300", bg: "#3D2B00" },
                                { label: "Not Started", value: notStarted, color: "#555577", bg: "#1A1A2E" },
                            ].map(s => (
                                <div key={s.label} style={{
                                    background: s.bg, border: `1px solid ${s.color}40`,
                                    borderRadius: 8, padding: "10px 16px", textAlign: "center", minWidth: 80,
                                }}>
                                    <div style={{ fontSize: 22, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                                    <div style={{ fontSize: 10, color: s.color + "99", marginTop: 3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Overall progress bar */}
                    <div style={{ marginTop: 18 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                            <span style={{ fontSize: 11, color: "#666688", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Overall Journey Progress</span>
                            <span style={{ fontSize: 11, color: "#CC785C", fontWeight: 700 }}>{complete}/{totalProjects} projects</span>
                        </div>
                        <div style={{ height: 6, background: "#1A1A2E", borderRadius: 3, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${(complete / totalProjects) * 100}%`, background: "linear-gradient(90deg, #22C55E, #16A34A)", borderRadius: 3, transition: "width 0.5s ease" }} />
                        </div>
                    </div>

                    {/* Legend row */}
                    <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
                        {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                            <div key={k} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <StatusDot status={k} size={9} />
                                <span style={{ fontSize: 11, color: "#8888AA", fontWeight: 600 }}>{v.label}</span>
                            </div>
                        ))}
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 12 }}>★</span>
                            <span style={{ fontSize: 11, color: "#CC785C", fontWeight: 600 }}>Portfolio Candidate</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 12 }}>🔐</span>
                            <span style={{ fontSize: 11, color: "#5B9BD5", fontWeight: 600 }}>Auth Milestone</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── PHASE LIST ── */}
            <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 24px 0" }}>
                {PHASES.map((phase) => {
                    const stats = getPhaseStats(phase);
                    const isOpen = expandedPhases[phase.id];
                    const phaseColor = PHASE_COLORS[phase.id];

                    return (
                        <div key={phase.id} style={{ marginBottom: 10 }}>
                            {/* Phase header */}
                            <button
                                onClick={() => togglePhase(phase.id)}
                                style={{
                                    width: "100%", background: isOpen ? `${phaseColor}22` : "#13131F",
                                    border: `1px solid ${isOpen ? phaseColor + "88" : "#222236"}`,
                                    borderRadius: isOpen ? "8px 8px 0 0" : 8,
                                    padding: "14px 18px", cursor: "pointer", display: "flex",
                                    alignItems: "center", gap: 14, textAlign: "left",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {/* Phase badge */}
                                <div style={{
                                    background: phaseColor, borderRadius: 6, padding: "4px 10px",
                                    fontSize: 11, fontWeight: 800, color: "#FFFFFF",
                                    letterSpacing: "0.06em", textTransform: "uppercase", flexShrink: 0,
                                }}>
                                    {phase.label}
                                </div>

                                {/* Phase info */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: "#E8E8F0" }}>{phase.title}</div>
                                    <div style={{ fontSize: 11, color: "#666688", marginTop: 1 }}>{phase.subtitle} · {phase.range}</div>
                                </div>

                                {/* Phase progress */}
                                <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                                    <div style={{ textAlign: "right" }}>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: stats.done > 0 ? "#22C55E" : "#444466" }}>
                                            {stats.done}/{stats.total}
                                        </div>
                                        {stats.wip > 0 && (
                                            <div style={{ fontSize: 10, color: "#FFB300" }}>{stats.wip} in progress</div>
                                        )}
                                    </div>
                                    {/* Mini progress bar */}
                                    <div style={{ width: 60, height: 4, background: "#1A1A2E", borderRadius: 2, overflow: "hidden" }}>
                                        <div style={{
                                            height: "100%",
                                            width: `${stats.pct}%`,
                                            background: stats.done === stats.total && stats.total > 0
                                                ? "#22C55E" : stats.wip > 0 ? "#FFB300" : "#333344",
                                            borderRadius: 2,
                                        }} />
                                    </div>
                                    <span style={{ color: isOpen ? "#CC785C" : "#444466", fontSize: 16, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none", display: "inline-block" }}>▾</span>
                                </div>
                            </button>

                            {/* Projects */}
                            {isOpen && (
                                <div style={{
                                    border: `1px solid ${phaseColor}44`,
                                    borderTop: "none", borderRadius: "0 0 8px 8px",
                                    background: "#0E0E1A", overflow: "hidden",
                                }}>
                                    {phase.projects.map((proj, idx) => {
                                        const cfg = STATUS_CONFIG[proj.status];
                                        const isProjOpen = expandedProjects[proj.id];
                                        const isLast = idx === phase.projects.length - 1;

                                        return (
                                            <div key={proj.id} style={{
                                                borderBottom: isLast ? "none" : `1px solid #1A1A2E`,
                                            }}>
                                                {/* Project row */}
                                                <button
                                                    onClick={() => toggleProject(proj.id)}
                                                    style={{
                                                        width: "100%", background: isProjOpen ? "#13131F" : "transparent",
                                                        border: "none", padding: "11px 18px 11px 28px",
                                                        cursor: "pointer", display: "flex", alignItems: "center",
                                                        gap: 10, textAlign: "left",
                                                        transition: "background 0.15s ease",
                                                    }}
                                                >
                                                    {/* Connector line */}
                                                    <div style={{
                                                        width: 1, height: 20, background: `${phaseColor}44`,
                                                        marginRight: 4, flexShrink: 0,
                                                    }} />

                                                    <StatusDot status={proj.status} />

                                                    {/* Project number */}
                                                    <span style={{
                                                        fontSize: 10, fontWeight: 800, color: "#CC785C",
                                                        letterSpacing: "0.06em", minWidth: 28, flexShrink: 0,
                                                    }}>{proj.id}</span>

                                                    {/* Title */}
                                                    <span style={{
                                                        fontSize: 13, fontWeight: 600,
                                                        color: proj.status === "complete" ? "#22C55E"
                                                            : proj.status === "in-progress" ? "#FFB300"
                                                                : "#C8C8DC",
                                                        flex: 1, minWidth: 0,
                                                    }}>{proj.title}</span>

                                                    {/* Badges */}
                                                    <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
                                                        {proj.portfolio && (
                                                            <span style={{ fontSize: 14, title: proj.portfolioLabel }}>★</span>
                                                        )}
                                                        {proj.authMilestone && (
                                                            <span style={{ fontSize: 12 }}>🔐</span>
                                                        )}
                                                        <span style={{ fontSize: 10, color: cfg.dot, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                                                            {cfg.label}
                                                        </span>
                                                        <span style={{ color: isProjOpen ? "#CC785C" : "#333355", fontSize: 12, transition: "transform 0.2s", transform: isProjOpen ? "rotate(180deg)" : "none", display: "inline-block", marginLeft: 4 }}>▾</span>
                                                    </div>
                                                </button>

                                                {/* Project detail */}
                                                {isProjOpen && (
                                                    <div style={{
                                                        padding: "12px 18px 16px 52px",
                                                        background: "#0B0B16",
                                                        borderTop: "1px solid #1A1A2E",
                                                    }}>
                                                        {proj.portfolio && (
                                                            <div style={{
                                                                display: "inline-flex", alignItems: "center", gap: 6,
                                                                background: "#2A1500", border: "1px solid #CC785C55",
                                                                borderRadius: 5, padding: "4px 10px", marginBottom: 12,
                                                                fontSize: 11, fontWeight: 700, color: "#CC785C",
                                                            }}>
                                                                ★ {proj.portfolioLabel}
                                                            </div>
                                                        )}
                                                        {proj.authMilestone && (
                                                            <div style={{
                                                                display: "inline-flex", alignItems: "center", gap: 6,
                                                                background: "#0A1929", border: "1px solid #1A5276",
                                                                borderRadius: 5, padding: "4px 10px", marginBottom: 12, marginLeft: proj.portfolio ? 8 : 0,
                                                                fontSize: 11, fontWeight: 700, color: "#5B9BD5",
                                                            }}>
                                                                🔐 Authentication Milestone
                                                            </div>
                                                        )}

                                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                                            {/* Skills */}
                                                            <div>
                                                                <div style={{ fontSize: 10, fontWeight: 700, color: "#666688", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                                                                    PM & Technical Skills
                                                                </div>
                                                                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                                                                    {proj.skills.map(skill => (
                                                                        <span key={skill} style={{
                                                                            padding: "3px 8px", borderRadius: 4, fontSize: 11,
                                                                            background: proj.status === "complete" ? "#0A2E1A" : proj.status === "in-progress" ? "#3D2B00" : "#13131F",
                                                                            color: proj.status === "complete" ? "#22C55E" : proj.status === "in-progress" ? "#FFB300" : "#8888AA",
                                                                            border: `1px solid ${proj.status === "complete" ? "#22C55E33" : proj.status === "in-progress" ? "#CC880033" : "#333344"}`,
                                                                            fontWeight: 500,
                                                                        }}>{skill}</span>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Tools */}
                                                            <div>
                                                                <div style={{ fontSize: 10, fontWeight: 700, color: "#666688", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                                                                    Tools & Frameworks
                                                                </div>
                                                                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                                                                    {proj.tools.map(tool => (
                                                                        <span key={tool} style={{
                                                                            padding: "3px 8px", borderRadius: 4, fontSize: 11,
                                                                            background: "#1A1A2E",
                                                                            color: "#CC785C",
                                                                            border: "1px solid #CC785C33",
                                                                            fontWeight: 600,
                                                                        }}>{tool}</span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* ── FOOTER ── */}
            <div style={{
                maxWidth: 960, margin: "32px auto 0", padding: "0 24px",
                borderTop: "1px solid #1A1A2E", paddingTop: 20,
                display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8,
            }}>
                <span style={{ fontSize: 11, color: "#444466" }}>
                    PMD · Artifact #21 · Skills & Tools Tracker · v1.0 · May 2026
                </span>
                <span style={{ fontSize: 11, color: "#CC785C", fontStyle: "italic" }}>
                    Where brilliant ideas become shipped products.
                </span>
            </div>
        </div>
    );
}
