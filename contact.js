// function sendMail() {
//     let params = {
//         firstName: document.getElementById("firstName").value,
//         lastName: document.getElementById("lastName").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         message: document.getElementById("message").value
//     };

//     const serviceID = "service_q23e1rr";
//     const templateID = "template_xnad2nc";

//     emailjs.send(serviceID, templateID, params).then((res) => {
//         // document.getElementById("firstName").value = "";
//         // document.getElementById("lastName").value = "";
//         // document.getElementById("email").value = "";
//         // document.getElementById("message").value = "";
//         // document.getElementById("phone").value = "";
//         // console.log(res);
//         alert("your message was sent successfully" + res.status);
//     })
//     .catch((err) => console.log(err));
// }

function emailSend() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nechita.delia9@gmail.com",
        Password : "226B9E155ED65B5C481FEAA8A977F7F8FF61",
        To : 'nechita.delia9@gmail.com',
        From : "nechita.delia9@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
