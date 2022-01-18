// var inputPassword = document.createElement("input");
// inputPassword.type = "password";
// inputPassword.id = "writepassword";
// inputPassword.placeholder = "plz enter password";

// document.body.appendChild(inputPassword);

// var viewImage = document.createElement("img");
// viewImage.src = "images/view.png";
// document.body.appendChild(viewImage);

function toggle(){
    var password = document.getElementById("password");
    var eyeicon = document.getElementById("eyeicon");
    if(password.type === "password"){
        password.setAttribute("type", "text");
        eyeicon.className = "fas fa-eye-slash";
    }
    else if(password.type === "text") {
        password.setAttribute("type", "password");
        eyeicon.className = "far fa-eye";

    }
}