function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function showAlert() {
    document.getElementById("response").innerHTML =
        "Thank you for contacting me. I will get back to you soon!";
    return false;
}
