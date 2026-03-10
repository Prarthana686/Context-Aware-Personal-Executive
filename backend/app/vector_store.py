import faiss
import numpy as np

class VectorStore:
    def __init__(self):
        self.documents = []
        self.embeddings = np.empty((0, 384), dtype='float32')
        self.index = faiss.IndexFlatL2(384)

    def add_document(self, text, embedding):
        self.documents.append(text)
        self.embeddings = np.vstack([self.embeddings, embedding])
        self.index.add(np.array([embedding]))

    def search(self, query_embedding, top_k=5):
        D, I = self.index.search(np.array([query_embedding]), top_k)
        return [self.documents[i] for i in I[0]]

    def count_documents(self):
        return len(self.documents)
