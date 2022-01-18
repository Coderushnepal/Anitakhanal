
// Create heading
var heading = document.createElement("h1");
heading.innerHTML = "Lets learn javascript";
heading.classList.add("center");
heading.classList.add("gray");
// attach heading to body
document.body.appendChild(heading);

// create span
var learnMoreLink = document.createElement("a");
learnMoreLink.innerHTML = "Learn More";
learnMoreLink.setAttribute("href", "www.w3shools.org");
learnMoreLink.setAttribute("id", "blue");

// create p
var para = document.createElement("p");
para.innerHTML = "If you wish to learn javascript, ";

para.appendChild(learnMoreLink);

// create div wrapper
var divForPara = document.createElement("div");
divForPara.appendChild(para);
divForPara.classList.add("center");

// attach div to body
document.body.appendChild(divForPara);

// create ol
var listWrapper = document.createElement("ol");
listWrapper.classList.add("center");

document.body.appendChild(listWrapper);

var learningLinks = [
  {
    url: "https://w3schools.com/",
    name: "W3Schools",
  },
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    name: "Mozilla",
  },
];

learningLinks.forEach((element) => {
  var learningLinkItem = document.createElement("li");
  var learningLink = document.createElement("a");

  learningLink.innerHTML = element.name;
  learningLink.setAttribute("href", element.url);
  learningLinkItem.appendChild(learningLink);

  listWrapper.appendChild(learningLinkItem);
});


var userNameInput = document.createElement("input");
userNameInput.type = "text";
userNameInput.id = "userNameInput";

userNameInput.addEventListener("mouseover", function (event) {
  event.target.style.borderColor = "green";
});

userNameInput.addEventListener("mouseout", function (event) {
  console.log(
    event,
    " type of event containing all informations regarding where is came from, its position, type, and all other properties"
  );
  console.log(event.target, " the element that had triggered the event");
  event.target.style.borderColor = "white";
  /**
   * css                          | js
   * border-color (kabab-case)     borderColor (camelCase)
   * background-image (kabab-case) backgroundImage (camelCase)
   * box-shadow (kabab-case)       boxShadow (camelCase)
   */
});

document.body.appendChild(userNameInput);

var btnSubmit = document.createElement("button");
btnSubmit.innerHTML = "Console Input Value";
document.body.appendChild(btnSubmit);

btnSubmit.addEventListener("click", function (event) {
  var userNameIn = document.getElementById("userNameInput");
  console.log(userNameIn.value);
});
