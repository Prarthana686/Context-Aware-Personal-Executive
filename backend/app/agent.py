from .tools import search_gmail, search_pdf, search_csv, search_notes, search_chat_logs

class Agent:
    def __init__(self):
        self.query_count = 0
        self.timeline = []

    def run(self, query):
        self.query_count += 1
        reasoning = []
        sources = []
        answer = ""
        # Simple tool selection logic (demo)
        if "email" in query or "gmail" in query:
            reasoning.append("Step 1: Searching Gmail")
            gmail_results = search_gmail(query)
            sources.extend(gmail_results["sources"])
            answer += gmail_results["answer"] + "\n"
        if "pdf" in query:
            reasoning.append("Step 2: Searching PDFs")
            pdf_results = search_pdf(query)
            sources.extend(pdf_results["sources"])
            answer += pdf_results["answer"] + "\n"
        if "csv" in query or "spreadsheet" in query:
            reasoning.append("Step 3: Searching CSVs")
            csv_results = search_csv(query)
            sources.extend(csv_results["sources"])
            answer += csv_results["answer"] + "\n"
        if "note" in query:
            reasoning.append("Step 4: Searching Notes")
            notes_results = search_notes(query)
            sources.extend(notes_results["sources"])
            answer += notes_results["answer"] + "\n"
        if "chat" in query:
            reasoning.append("Step 5: Searching Chat Logs")
            chat_results = search_chat_logs(query)
            sources.extend(chat_results["sources"])
            answer += chat_results["answer"] + "\n"
        if not answer:
            answer = "No relevant data found."
        self.timeline.append({"query": query, "reasoning": reasoning, "sources": sources})
        return {"answer": answer.strip(), "sources": sources, "reasoning": reasoning}

    def get_timeline(self):
        return self.timeline
