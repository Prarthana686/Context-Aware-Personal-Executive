import os

def process_file(path):
    ext = os.path.splitext(path)[1].lower()
    if ext == '.pdf':
        # TODO: Use PyPDF to extract text
        pass
    elif ext == '.csv':
        # TODO: Use pandas to extract text
        pass
    elif ext == '.txt':
        # TODO: Read text file
        pass
    elif ext == '.docx':
        # TODO: Use python-docx to extract text
        pass
    else:
        pass
