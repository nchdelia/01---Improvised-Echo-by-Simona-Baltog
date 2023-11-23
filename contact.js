function sendMail() {
    let params = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_q23e1rr";
    const templateID = "template_xnad2nc";

    emailjs.send(serviceID, templateID, params).then((res) => {
        // document.getElementById("firstName").value = "";
        // document.getElementById("lastName").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("message").value = "";
        // document.getElementById("phone").value = "";
        // console.log(res);
        alert("your message was sent successfully" + res.status);
    })
    .catch((err) => console.log(err));
}

