function orderWhatsApp(offerName) {
    const phoneNumber = "212674690829"; // Whatsapp
    const message = `Bonjour, je souhaite réserver l'offre : ${offerName}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}