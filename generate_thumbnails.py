from pdf2image import convert_from_path
import os

pdfs = [
    "artifact-01-problem-statement-v1.0.pdf",
    "artifact-02-persona-visionary-staller-v1.0.pdf",
    "artifact-03-persona-hiring-evaluator-v1.0.pdf",
    "artifact-11-roadmap-v1.0.pdf",
    "artifact-12-prd-v1.2.pdf",
]

output_names = [
    "thumb-01-problem-statement.png",
    "thumb-02-persona-visionary-staller.png",
    "thumb-03-persona-hiring-evaluator.png",
    "thumb-11-roadmap.png",
    "thumb-12-prd.png",
]

# assets folder already exists — no need to create it
# here is the code that would be needed, along with the for loop code, if it did not exist
# os.makedirs("assets", exist_ok=True)
"""
for pdf_file, output_name in zip(pdfs, output_names):
#    pages = convert_from_path(pdf_file, dpi=150, first_page=1, last_page=1)
    # Get the directory where the script is located
    # base_dir = os.path.dirname(os.path.abspath(__file__))
#    current_dir = os.getcwd() 
    pages = convert_from_path(os.path.join("assets", pdf_file), dpi=150, first_page=1, last_page=1)
    print(pages)
#    thumb = pages[0]
#    thumb.save(os.path.join("assets", output_name), "PNG")
    print(f"Saved: {output_name}")

"""

for pdf_file, output_name in zip(pdfs, output_names):
    pages = convert_from_path(pdf_file, dpi=150, first_page=1, last_page=1)
    print(pages)
#    thumb = pages[0]
#    thumb.save(os.path.join("assets", output_name), "PNG")
    print(f"Saved: {output_name}")


print("All thumbnails complete.")