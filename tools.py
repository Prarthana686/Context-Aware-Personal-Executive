from langchain_core.tools import Tool
import pandas as pd


def search_emails(query: str):
    with open("data/emails.txt", "r", encoding="utf-8") as f:
        return f.read()


def search_notes(query: str):
    with open("data/notes.txt", "r", encoding="utf-8") as f:
        return f.read()


def search_expenses(query: str):
    df = pd.read_csv("data/expenses.csv")
    return df.to_string()


email_tool = Tool(
    name="Search Emails",
    func=search_emails,
    description="Search emails for logistics decisions, event discussions, and planning."
)

notes_tool = Tool(
    name="Search Notes",
    func=search_notes,
    description="Search meeting notes for suggestions, discussions, and decisions."
)

expense_tool = Tool(
    name="Search Expenses",
    func=search_expenses,
    description="Search event expense records from CSV."
)

tools = [email_tool, notes_tool, expense_tool]