// var heading =  document.createElement("heading")
// heading.innerHtml = "password";
// document.body.appendChild(heading);
// var inputPassword = document.createElement("input");
// inputPassword.type = "password";
// inputPassword.id = "writepassword";
// inputPassword.placeholder = "plz enter password";

// document.body.appendChild(inputPassword);

// var icon = document.createElement('i');
// icon.className = "fas fa-eye-slash";
// document.body.appendChild(icon);

// icon.addEventListener("click", function (event){
//     if(password.type === "password"){
//         password.setAttribute("type", "text");
//         icon.className = "fas fa-eye-slash";
//     }
//     else if(password.type === "text") {
//         password.setAttribute("type", "password");
//         icon.className = "far fa-eye";

//     }

// });

// var viewImage = document.createElement("img");
// viewImage.src = "images/view.png";
// document.body.appendChild(viewImage);

// function toggle(){
//     var password = document.getElementById("password");
//     var eyeicon = document.getElementById("eyeicon");
//     if(password.type === "password"){
//         password.setAttribute("type", "text");
//         eyeicon.className = "fas fa-eye-slash";
//     }
//     else if(password.type === "text") {
//         password.setAttribute("type", "password");
//         eyeicon.className = "far fa-eye";

//     }
// }

var divPasswordWrapper = document.createElement("div");
divPasswordWrapper.style.backgroundColor = "grey";
divPasswordWrapper.style.width = "50%";
divPasswordWrapper.style.height = "50vh";
divPasswordWrapper.style.margin = "0 auto";

document.body.appendChild(divPasswordWrapper);

var inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.id = "password";
inputPassword.placeholder = "plz enter password";
inputPassword.style.width ="40%";
inputPassword.style.marginLeft = "150px";
inputPassword.style.marginTop = "80px";
divPasswordWrapper.appendChild(inputPassword);

var icon = document.createElement("i");
icon.className = "fas fa-eye-slash";
divPasswordWrapper.appendChild(icon);

icon.addEventListener("click", function(event){
    if(password.type === "password"){
        password.setAttribute("type", "text");
        icon.className = "far fa-eye";
    }
    else if(password.type === "text") {
        password.setAttribute("type", "password");
        icon.className = "fas fa-eye-slash";

    }

});

var forgetPassword = document.createElement("btn");
forgetPassword.innerHTML = "forget password";
forgetPassword.style.backgroundColor = "blue";
forgetPassword.style.padding = "10px";
forgetPassword.style.border = "1px solid blue";
forgetPassword.style.display = "block";
forgetPassword.style.width = "20%";
forgetPassword.style.margin = "50px 150px";

divPasswordWrapper.appendChild(forgetPassword);

forgetPassword.addEventListener("click", function(event){
    console.log("forget password");
})

var nextButton = document.createElement("button");
nextButton.innerHTML = "Next";
nextButton.style.backgroundColor = "blue";
nextButton.style.padding = "10px";
nextButton.style.border = "1px solid blue"
nextButton.style.float = "right";
nextButton.style.margin = "-85px 230px"
divPasswordWrapper.appendChild(nextButton);
 
nextButton.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "red";
})