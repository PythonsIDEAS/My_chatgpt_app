// Select necessary DOM elements
const sendButton = document.querySelector('.bg-indigo-500'); // Send button
const inputField = document.querySelector('input[type="text"]'); // Input field
const messageContainer = document.querySelector('.grid.grid-cols-12'); // Message container

// Event listener for the Send button
sendButton.addEventListener('click', () => {
    const message = inputField.value.trim(); // Get the message from the input field

    if (message) {
        // Clear the input field after sending the message
        inputField.value = '';

        // Create a new message bubble element
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('col-start-6', 'col-end-13', 'p-3', 'rounded-lg');
        messageBubble.innerHTML = `
            <div class="flex items-center justify-start flex-row-reverse">
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    Y
                </div>
                <div class="relative mr-3 text-sm bg-indigo-600 py-2 px-4 shadow rounded-xl">
                    <div class="text-white">${message}</div>
                    <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">Seen</div>
                </div>
            </div>
        `;

        // Append the new message to the message container
        messageContainer.appendChild(messageBubble);

        // Scroll to the bottom of the chat after sending the message
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});

// Optional: Allow pressing "Enter" to send the message
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
