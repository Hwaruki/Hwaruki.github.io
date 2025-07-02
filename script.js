document.addEventListener('DOMContentLoaded', function() {
    loadChat();
});

document.getElementById('heartBtn').addEventListener('click', function() {
    var message = document.getElementById('message');
    message.classList.remove('hidden');
    setTimeout(function() {
        message.classList.add('hidden');
    }, 2000);
});

document.getElementById('send-btn').addEventListener('click', function() {
    var chatInput = document.getElementById('chat-input');
    var message = chatInput.value;

    if (message.trim() !== '') {
        addMessageToChat(message);
        saveChat(message);
        chatInput.value = '';
    }
});

function addMessageToChat(message) {
    var chatBox = document.getElementById('chat-box');
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveChat(message) {
    var chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push(message);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadChat() {
    var chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    var chatBox = document.getElementById('chat-box');
    chatHistory.forEach(function(message) {
        addMessageToChat(message);
    });
}
