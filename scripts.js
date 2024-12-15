// Array to store selected services
let selectedServices = [];

// Function to handle service selection
function selectService(service) {
    // Check if service is already selected
    const index = selectedServices.indexOf(service);
    if (index === -1) {
        // Add service if not selected
        selectedServices.push(service);
        alert(service + " selected");
    } else {
        // Remove service if already selected
        selectedServices.splice(index, 1);
        alert(service + " unselected");
    }
}

// Function to submit form data
function submitData() {
    // Collect form data
    const formData = {
        servise: selectedServices,  // Add the selected services to form data
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
        number: document.getElementById('number').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
    };

    // Convert form data to JSON format
    const jsonData = JSON.stringify(formData);

    // Check if Telegram WebApp is available and send data
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(jsonData);
        alert("Data sent to Telegram bot successfully!");
    } else {
        console.error("Telegram WebApp is not available");
    }
}
