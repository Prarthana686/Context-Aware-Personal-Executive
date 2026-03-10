# Context-Aware Personal Executive

An AI-powered executive assistant that can retrieve and reason across multiple personal data sources such as emails, documents, spreadsheets, notes, and chat logs.

This system acts as a **context-aware memory layer** that helps users quickly find important information without manually searching across multiple platforms.

---

## Problem

Modern professionals store information across multiple platforms:

• Emails
• Documents (PDF, DOCX)
• Spreadsheets (CSV)
• Notes
• Chat conversations

Finding specific information across these sources is **time-consuming and inefficient**.

Users often waste time searching for:

* vendor payments
* meeting decisions
* budget approvals
* project timelines

---

## Solution

The **Context-Aware Personal Executive** uses AI agents to search across all connected data sources simultaneously and return a unified answer.

Example query:

```
Find TechPro vendor payment details
```

The system retrieves information from:

• Emails mentioning the payment
• Vendor spreadsheets
• Chat discussions approving the payment
• Notes describing the agreement

Then returns a structured response with sources used.

---

## Features

• Natural language query interface
• Multi-source data retrieval
• AI agent reasoning panel
• Semantic vector search using FAISS
• Interactive knowledge graph
• Analytics dashboard
• Memory timeline of AI queries
• File upload support (PDF, CSV, DOCX, TXT)

---

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* Framer Motion
* React Flow
* Recharts

### Backend

* FastAPI
* Uvicorn
* LangChain

### AI & Search

* LLM (Claude / OpenAI / Groq)
* FAISS vector database
* Semantic embeddings

### Integrations

* Gmail API
* Google OAuth

---

## System Architecture

User Query
↓
AI Agent
↓
Parallel Search Across Sources

• Emails
• PDFs
• CSV Files
• Notes
• Chat Logs

↓

Vector Similarity Search (FAISS)

↓

LLM Reasoning

↓

Unified Answer with Sources

---

## Example Output

User Query

```
Find TechPro vendor payment details
```

AI Response

```
Vendor: TechPro
Amount: $12,000
Status: Approved
Department: Finance

Sources:
- Gmail Email
- Vendor Spreadsheet
- Finance Chat Log
```

---

## Project Structure

```
backend/
 ├ app/
 │   ├ main.py
 │   ├ agent.py
 │   ├ vector_store.py
 │   ├ tools.py
 │   ├ gmail_service.py
 │   ├ file_processor.py
 │
 ├ data/
 │   ├ emails.json
 │   ├ chats.json
 │   ├ notes.txt
 │
 ├ uploads/
 │   ├ pdf
 │   ├ csv
 │   ├ docs
 │
 ├ generate_data.py

frontend/
 ├ app/
 ├ components/
 ├ analytics/
 ├ dashboard/
 ├ knowledge-graph/
 ├ memory/
```

---

## How to Run

### Backend

```
cd backend
pip install -r requirements.txt
python generate_data.py
python -m uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### Frontend

```
cd frontend-ui
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## Future Improvements

• Real Gmail integration
• Slack / Teams integration
• Better knowledge graph relationships
• Voice assistant interface
• Enterprise security controls

---

## Team

Built for Hackathon 🚀

Team Members:

* Prarthana B
* Akshaya P
* Bharathinesan N
* Mohankumar S
  



