var formWrapper = document.createElement("div");
formWrapper.style.margin = "0 auto";
formWrapper.style.boxShadow = "5px 5px 5px 5px #aaaaaa";
formWrapper.style.width = "35%";
formWrapper.style.padding = "30px";
// formWrapper.style.height = "90vh";
document.body.appendChild(formWrapper);

var heading = document.createElement("div");
heading.innerHTML = "Register With US";
// heading.style.margin = "0 50px";
heading.style.textAlign = "center";
heading.style.padding = "20px";
heading.style.fontSize = "30px";
heading.style.fontWeight = "bold";

formWrapper.appendChild(heading);

var form = document.createElement("form");
form.setAttribute("action", "/");
form.setAttribute("method", "GET");
form.setAttribute("id", "form");
formWrapper.appendChild(form);


var labelInputs = [
    {
        label :"UserName",
        id :"username",
        type :"text",
        placeholder :"Enter Username",
        
    },
    {
        label :"Email",
        id :"email",
        type :"email",
        placeholder :"Enter Password",
      

    },
    {
        label :"Password",
        id :"password",
        type :"password",
        placeholder :"Enter password",
       
    },
    {
        label :"Confirm Password",
        id : "confirmpassword",
        type :"password",
        placeholder :"Enter password again",
    
    },
];

labelInputs.forEach(function(value){
   var formcontrol = document.createElement("div");

   var label = document.createElement("label");
   label.innerHTML = value.label;

   var input = document.createElement("input");
   input.setAttribute("type",value.type);
   input.id = value.id;
   input.placeholder = value.placeholder;
   
   var small = document.createElement("small");
   small.id = "error"+ value.id;
   
   form.appendChild(formcontrol);
   formcontrol.appendChild(label);
   formcontrol.appendChild(input);
   formcontrol.appendChild(small);

   label.style = `
    font-size :30px;
    display : block;
    margin-left : 20px;
    margin-bottom :5px;

   `;

   input.style = `
    width : 85%;
    margin-left : 20px;
    margin-bottom :  10px;
    padding : 10px;
    border : 1px solid black;


   `;

   small.style = `
    color :red;
    margin-left : 20px;
    visibility :hidden;
   
   `;
});

var button = document.createElement("button");
button.innerHTML = "Submit";
button.type = "submit";
button.classList.add = "btn";
button.style.padding = "10px";
button.style.marginLeft = "20px";
button.style.cursor = "pointer";
button.style.width = "92%";
button.style.color = "white";
button.style.backgroundColor = "blue";
button.style.border = "1px solid blue";

form.appendChild(button);


button.addEventListener("click", function(event){
    event.preventDefault();

    formValidation();

});
   


function formValidation(){
console.log("hello");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirmpassword");
    var errorUsername = document.getElementById("errorusername");
    var errorEmail = document.getElementById("erroremail");
    var errorPassword = document.getElementById("errorpassword");
    var errorConfirmpassword = document.getElementById("errorconfirmpassword");
    if(requiredValidator(username, errorUsername) &&
     lengthValidator(username, errorUsername, 3)
    ) {
        username.style.borderColor = "green";
        errorUsername.style.visibility = "hidden";
    }

    if(
        requiredValidator(email, errorEmail) &&
        emailValidator(email, errorEmail)
    ){
        email.style.borderColor = "green";
        errorEmail.style.visibility ="hidden";
    }

    if(
        requiredValidator(password, errorPassword) &&
        lengthValidator(password, errorPassword, 6)

    ) {
      password.style.borderColor = "green";
      errorPassword.style.visibility = "hidden"
    }

    if(
        confirmpasswordValidator(password, confirmpassword, errorConfirmpassword) &&
        requiredValidator(password, confirmpassword)
    )
    {
        confirmpassword.style.borderColor = "green";
        errorConfirmpassword.style.visibility = "hidden";
    }   
}

function requiredValidator(input, errorHolder) {
    console.log(input, errorHolder);

    if(input.value === ""){
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = `${input.id} is required`;
        input.style.borderColor = "red";
        return false;
    }
    return true;
}
function lengthValidator(input, errorHolder, length){
    if(input.value.length < length) {
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = `${input.id} must be greater than ${length}`;
        input.style.borderColor = "red";
        return false;
    }
    return true;
}

function emailValidator(input, errorHolder){
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!mailFormat.test(input.value)) {
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = "email is invalid";
        input.style.borderColor = "red";
        return false;
    }
    return true;
}
function confirmpasswordValidator(password, confirmpassword, errorHolder) {
    if(confirmpassword !== password.value){
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = "password donot match";
        confirmpassword.style.borderColor = "red";
        errorHolder.style.color = "red";
        return false;
    }
    return true;
}




















