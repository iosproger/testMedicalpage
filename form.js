function submitData() {
    const formData = {
        servise: document.getElementById('servise').value
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
        number: document.getElementById('number').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
    };

    const jsonData = JSON.stringify(formData);

    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(jsonData);
        alert("Data sent to Telegram bot successfully!");
    } else {
        console.error("Telegram WebApp is not available");
    }
}
