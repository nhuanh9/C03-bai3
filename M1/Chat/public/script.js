const socket = io();

const messages = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('chat message', message);
    messageInput.value = '';
});

socket.on('chat message', (message) => {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = message;
    messages.appendChild(newMessage);
    messages.scrollTop = messages.scrollHeight;
});
