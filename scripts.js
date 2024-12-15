function sendData() {
    const form = document.getElementById("userForm");
    const formData = new FormData(form);

    // Convert form data to a JSON object
    const data = {
        Name: formData.get("name"),
        Surname: formData.get("surname"),
        Age: formData.get("age"),
        Number: formData.get("number"),
        Address: formData.get("address"),
        Date: formData.get("date"),
        Time: formData.get("time"),
        Services: ["service1", "service2"] // Example static services
    };

    console.log("Sending data to Telegram bot:", data);

    // Simulate sending data to a Telegram bot
    alert("Data sent: " + JSON.stringify(data));
}
