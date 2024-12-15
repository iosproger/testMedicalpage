let selectedService = null;

function selectService(service) {
    selectedService = service;  // Store the selected service
    alert(`Service Selected: ${service}`);
}

// Pass selected service data to the form
function setServiceInForm() {
    const serviceInput = document.getElementById('selectedService');
    if (serviceInput) {
        serviceInput.value = selectedService; // Set the selected service into the hidden field
    }
}

function submitData() {
    const formData = {
        servise: selectedService,  // Include the selected service
        name: document.getElementById('name') ? document.getElementById('name').value : '',
        surname: document.getElementById('surname') ? document.getElementById('surname').value : '',
        age: document.getElementById('age').value,
        number: document.getElementById('number').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };

    const jsonData = JSON.stringify(formData);

    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(jsonData);
        alert("Data sent to Telegram bot successfully!");
    } else {
        console.error("Telegram WebApp is not available");
    }
}
