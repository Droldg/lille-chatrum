function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var chatBox = document.getElementById('chat-box');
    var message = messageInput.value;

    if (message.trim() !== "") {
        let username = document.querySelector(".username").value
        if (!username) {
            alert("Er ud komplet idiot? Du mangler et brugernavn, vis ansigt")
            return;
        }
        

        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = username+ ": " + message;
        chatBox.appendChild(messageElement);

        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input
        messageInput.value = '';
    }
}

