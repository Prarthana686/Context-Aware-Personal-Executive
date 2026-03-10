// ...existing code...
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const loading = document.getElementById('loading');

let chatHistory = [];

function renderChat() {
    chatWindow.innerHTML = '';
    chatHistory.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-message';
        if (msg.role === 'user') {
            msgDiv.innerHTML = `<div class="bubble-user">${escapeHTML(msg.content)}</div>`;
        } else if (msg.role === 'ai') {
            msgDiv.innerHTML = `
                <div class="bubble-ai">${escapeHTML(msg.answer)}</div>
                <div class="ai-meta">
                    <span class="badge">${escapeHTML(msg.tool_used)}</span>
                    <span>Agent reasoning: ${escapeHTML(msg.agent_thought)}</span>
                </div>
            `;
        }
        chatWindow.appendChild(msgDiv);
    });
    chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(tag) {
        const chars = {
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        };
        return chars[tag] || tag;
    });
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    chatHistory.push({ role: 'user', content: message });
    renderChat();
    userInput.value = '';
    loading.style.display = 'block';
    try {
        const response = await fetch('http://127.0.0.1:8000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        chatHistory.push({
            role: 'ai',
            answer: data.answer,
            tool_used: data.tool_used,
            agent_thought: data.agent_thought
        });
    } catch (e) {
        chatHistory.push({ role: 'ai', answer: 'Error: Unable to reach agent.', tool_used: 'N/A', agent_thought: 'Network error.' });
    }
    loading.style.display = 'none';
    renderChat();
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendMessage();
});

// Restore chat history if needed (session persistence)
window.addEventListener('load', () => {
    const saved = sessionStorage.getItem('cae_chat');
    if (saved) {
        chatHistory = JSON.parse(saved);
        renderChat();
    }
});

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('cae_chat', JSON.stringify(chatHistory));
});