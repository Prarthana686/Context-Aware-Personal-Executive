import json

class GmailService:
    def __init__(self):
        self.emails = self.load_emails()

    def load_emails(self):
        try:
            with open('backend/data/emails.json', 'r') as f:
                return json.load(f)
        except Exception:
            return []

    def get_emails(self):
        return self.emails
