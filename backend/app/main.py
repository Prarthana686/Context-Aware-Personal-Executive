from fastapi import FastAPI, UploadFile, File, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from .agent import Agent
from .file_processor import process_file
from .vector_store import VectorStore
from .gmail_service import GmailService
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

agent = Agent()
vector_store = VectorStore()
gmail_service = GmailService()

@app.post("/api/query")
def query(request: Request):
    data = request.json()
    user_query = data.get("message")
    result = agent.run(user_query)
    return JSONResponse(content=result)

@app.post("/api/upload")
def upload(file: UploadFile = File(...)):
    ext = os.path.splitext(file.filename)[1].lower()
    path = f"backend/uploads/{ext[1:]}/{file.filename}"
    with open(path, "wb") as f:
        f.write(file.file.read())
    process_file(path)
    return {"status": "uploaded", "filename": file.filename}

@app.get("/api/dashboard")
def dashboard():
    # Placeholder analytics
    return {"documents_indexed": vector_store.count_documents(), "queries_processed": agent.query_count}

@app.get("/api/knowledge-graph")
def knowledge_graph():
    # Placeholder graph data
    return {"nodes": [], "edges": []}

@app.get("/api/memory")
def memory():
    # Placeholder timeline
    return {"timeline": agent.get_timeline()}
