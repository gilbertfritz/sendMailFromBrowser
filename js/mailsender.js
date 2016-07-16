var success = function() {
    console.log("SUCCESS!");
    document.getElementById('clickMe').style.color = "green";
};

var error = function(message, response) {
    console.log("ERROR!");
    console.log("message: " + message);
    console.log("response: " + response);
    document.getElementById('clickMe').style.color = "red";
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function sendMail() {

    apostle.domainKey = "your_apostle.io_key";

    var email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        error("no valid email", "");
        return;
    }

    apostle.deliver('test', {
        email: email
    }).then(success, error);

    console.log("mail has been send to " + email);
}