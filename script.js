function sendMail(){
    let parms={
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_3td261l","template_z5dby0g",parms).then(alert("Email sent!!"))
}