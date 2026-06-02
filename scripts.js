/*email*/

emailjs.init("c1RQoQIRZJT11eDc3");

document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Enquiry is being sent...");
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        company:document.getElementById("company").value,
        mode: document.getElementById("mode").value,
        message: document.getElementById("message").value

    };

    emailjs.send(
        "service_51n8vpa",
        "template_strt7or",
        templateParams
    )
    .then(function() {
        alert("Enquiry sent successfully!");
        document.getElementById("enquiryForm").reset();
    })
    .catch(function(error) {
        alert("Failed to send enquiry.");
        console.log(error);
    });

});