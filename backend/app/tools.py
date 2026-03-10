def search_gmail(query):
    # Demo: load from emails.json
    return {"answer": "Found Gmail data.", "sources": ["emails.json"]}

def search_pdf(query):
    return {"answer": "Found PDF data.", "sources": ["pdf"]}

def search_csv(query):
    return {"answer": "Found CSV data.", "sources": ["csv"]}

def search_notes(query):
    return {"answer": "Found Notes data.", "sources": ["notes.txt"]}

def search_chat_logs(query):
    return {"answer": "Found Chat Log data.", "sources": ["chats.json"]}
