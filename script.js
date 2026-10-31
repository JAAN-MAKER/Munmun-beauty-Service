
const bookingForm = document.getElementById("bookingForm");

// Replace this with your WhatsApp number.
// Include country code 91, without + or spaces.
const whatsappNumber = "91XXXXXXXXXX";

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const service = document.getElementById("service").value;

    const message =
        `Hello Jaan Beauty!%0A` +
        `My name is ${encodeURIComponent(name)}.%0A` +
        `My phone number is ${encodeURIComponent(phone)}.%0A` +
        `I want to book: ${encodeURIComponent(service)}.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
});

