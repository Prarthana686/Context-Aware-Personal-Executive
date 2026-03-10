from dotenv import load_dotenv
import os

load_dotenv()

from langchain_groq import ChatGroq
from langchain_core.tools import Tool
from tools import tools

# Initialize LLM
llm = ChatGroq(
    model="llama-3.1-8b-instant",
    temperature=0
)

def run_agent(query: str):
    try:
        # Ask LLM which tool to use
        tool_names = [tool.name for tool in tools]

        prompt = f"""
You are an AI assistant with access to these tools:

{tool_names}

User question: {query}

Decide which tool should be used to answer the question.
Return only the tool name.
"""

        tool_choice = llm.invoke(prompt).content.strip()

        # Find the selected tool
        selected_tool = None
        for tool in tools:
            if tool.name.lower() in tool_choice.lower():
                selected_tool = tool
                break

        if selected_tool is None:
            return {
                "agent_thought": "No suitable tool selected.",
                "tool_used": "None",
                "answer": "Could not determine the correct data source."
            }

        # Execute the tool
        result = selected_tool.run(query)

        return {
            "agent_thought": f"Agent decided to use tool: {selected_tool.name}",
            "tool_used": selected_tool.name,
            "answer": result
        }

    except Exception as e:
        return {
            "agent_thought": "Agent encountered an error",
            "tool_used": "None",
            "answer": str(e)
        }