document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a pop-up message element
    const message = document.createElement('div');
    message.textContent = 'Thank you for your feedback. Form successfully sent.';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'rgba(0, 128, 0, 0.9)';
    message.style.color = 'white';
    message.style.padding = '20px';
    message.style.borderRadius = '5px';
    message.style.zIndex = '1000';

    // Append the message to the body
    document.body.appendChild(message);

    // Remove the message and clear the form after 5 seconds
    setTimeout(function() {
        document.body.removeChild(message);
        document.getElementById('survey-form').reset(); // Reset the form after the message is removed
    }, 5000);
});
