import json
import random

vendors = ["TechPro", "Apex", "Marketify"]

sample_emails = [
    {
        "sender": "finance@company.com",
        "subject": f"Vendor Payment Approval",
        "body": f"{vendor} invoice for ${random.randint(5000,15000)} has been approved.",
        "date": "2025-02-10"
    } for vendor in vendors
]

sample_chats = [
    {
        "user": "manager",
        "message": f"Approved {vendor} payment.",
        "date": "2025-02-10"
    } for vendor in vendors
]

sample_notes = [
    f"{vendor} vendor agreement: Payment approved for ${random.randint(5000,15000)}. See finance department for details."
    for vendor in vendors
]

def generate():
    with open('backend/data/emails.json', 'w') as f:
        json.dump(sample_emails, f, indent=2)
    with open('backend/data/chats.json', 'w') as f:
        json.dump(sample_chats, f, indent=2)
    with open('backend/data/notes.txt', 'w') as f:
        f.write('\n'.join(sample_notes))

if __name__ == '__main__':
    generate()
