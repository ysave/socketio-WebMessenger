const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('chat-message', data => {
    console.log(data)
})

//Sends a Message to the Server
messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-message', message)
    messageInput.value = ''
})