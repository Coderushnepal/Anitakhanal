var wrapper = document.createElement("div");
document.body.appendChild(wrapper);

wrapper.style = `
background-color : white;
width : 40%;
// height : 70vh;
margin:0 auto;
padding: 30px;
box-shadow: 3px 5px 8px 2px #888888;

`;
var heading = document.createElement("h1");
heading.innerHTML = "Expense Tracker";
// heading.style.padding = "5px";
heading.style.marginLeft = "30%";

wrapper.appendChild(heading);

var balance = document.createElement("h2");
balance.innerHTML = "Your Balance";
balance.style.marginLeft = "20px";
balance.style.marginBottom = "0";
balance.style.fontWeight = "400";
wrapper.appendChild(balance);

var dollarspan = document.createElement("span");
dollarspan.id = "dollarspan";
dollarspan.innerHTML = "$0.00";
dollarspan.style.fontWeight = "bold";
dollarspan.style.marginLeft = "20px";
dollarspan.style.fontSize = "30px";
wrapper.appendChild(dollarspan);



var incExpContainer = document.createElement("div");
incExpContainer.style.backgroundColor = "white";
incExpContainer.style.width = "50%";
incExpContainer.style.padding = "20px";
incExpContainer.style.margin = "0 auto";
incExpContainer.style.display = "flex";
incExpContainer.style.justifyContent = "space-between";
incExpContainer.style.boxShadow = "3px 3px 8px 2px #888888";
wrapper.appendChild(incExpContainer);

var incomeContainer = document.createElement("div");
incomeContainer.style.borderRight = "1px solid black";
incomeContainer.style.textAlign = "center";
incomeContainer.style.flex = "1";

incExpContainer.appendChild(incomeContainer);

var income = document.createElement("h2");
income.innerHTML = "INCOME";
income.style.margin = "0";  
incomeContainer.appendChild(income);

var moneyPlus = document.createElement("p");
moneyPlus.innerHTML = "$0.000";
moneyPlus.style.fontSize = "20px";
moneyPlus.style.color = "green";
moneyPlus.style.margin = "5px 0"
moneyPlus.id = "moneyplus";

incomeContainer.appendChild(moneyPlus);

var expenseContainer = document.createElement("div");
expenseContainer.style.textAlign = "center";
expenseContainer.style.flex = "1";

incExpContainer.appendChild(expenseContainer);

var expense = document.createElement("h2");
expense.innerHTML = "EXPENSE";
expense.style.margin = "0";  
expenseContainer.appendChild(expense);

var moneyMinus = document.createElement("p");
moneyMinus.innerHTML = "$0.000";
moneyMinus.style.fontSize = "20px";
moneyMinus.style.color = "red";
moneyMinus.style.margin = "5px 0"
moneyMinus.id = "moneyminus";

expenseContainer.appendChild(moneyMinus);


var historyHeading = document.createElement("h3");
historyHeading.innerHTML = "History";
historyHeading.style.marginLeft = "20px";
historyHeading.style.fontSize = "30px";
// historyHeading.style.borderBottom = "1px solid #bbb";
historyHeading.style.paddingBottom = "10px";
wrapper.appendChild(historyHeading);

var listWrapper = document.createElement("div");
wrapper.appendChild(listWrapper);

var unorder = document.createElement("ul");
unorder.id =" unorder";
unorder.style.listStyleType = "none";
unorder.style.display = "flex";
// unorder.style.padding = "20px";
// unorder.style.justifyContent = "space-between";
listWrapper.appendChild(unorder);

var list = document.createElement("li");
list.style.boxShadow = "3px 3px 8px 2px #888888";
// list.innerHTML = "shopping";
list.style.padding = "20px";
list.id = "list";
// list.style.margin = "10px 0";
// list.style.marginBottom = "10px";
list.style.position = "relative";
// list.style.padding = "10px 0";
list.style.width = "90%";

unorder.appendChild(list);

var listPlus = document.createElement("li");
listPlus.style.borderRight = "5px solid green";
listPlus.innerHTML = "+";
listPlus.style.position = "absolute";
listPlus.style.right = "33%";
listPlus.style.height = "20px";
listPlus.style.padding = "10px";
listPlus.style.display = "none";
unorder.appendChild(listPlus);

var listMinus = document.createElement("li");
listMinus.style.borderRight = "5px solid red";
listMinus.innerHTML = "-";
listMinus.style.position = "absolute";
listMinus.style.right = "33%";
listMinus.style.height = "20px";
listMinus.style.display = "none";
listMinus.style.padding = "10px";

unorder.appendChild(listMinus);

var deleteButton = document.createElement("button");
deleteButton.id = "deletebutton";
deleteButton.innerHTML = "x";
deleteButton.style.backgroundColor = "red";
deleteButton.style.position = "absolute";
deleteButton.style.left = "31%";
deleteButton.style.padding = "10px";
deleteButton.style.border = "0";
deleteButton.style.transition = "opacitiy 0.3s ease";
deleteButton.style.opacity = "0";
deleteButton.style.color = "white";
deleteButton.style.cursor = "pointer";
unorder.appendChild(deleteButton);





// var dollarHistory = document.createElement(span);


var transcation = document.createElement("h3");
transcation.innerHTML = "Add New Transcation";
transcation.style.marginLeft = "20px";
transcation.style.fontSize = "30px";
transcation.style.borderBottom = "1px solid #bbb";
transcation.style.paddingBottom = "10px";
wrapper.appendChild(transcation);

var formWrapper = document.createElement("div");
wrapper.appendChild(formWrapper);

var form = document.createElement("form");
form.id = "form";
formWrapper.appendChild(form);

var formControl = document.createElement("div");
form.appendChild(formControl);

var label = document.createElement("label");
label.innerHTML = "Text";
label.style.marginLeft = "20px";
label.style.marginBottom = "5px";
label.style.fontSize = "30px";
label.style.display = "inline-block";
formControl.appendChild(label);

var inputText = document.createElement("input");
inputText.id = "text";
inputText.type="text";
inputText.placeholder = "Enter text....";
inputText.style.padding = "10px";
inputText.style.display = "block";
inputText.style.marginLeft = "20px";
inputText.style.marginBottom = "10px";
inputText.style.width = "80%";
inputText.style.border = "1px solid #dedede";
inputText.style.borderRadius = "2px";
formControl.appendChild(inputText);

var formControl = document.createElement("div");
form.appendChild(formControl);

var label = document.createElement("label");
label.innerHTML = "Amount <br> (negative-expense, positive income)";
label.style.marginLeft = "20px";
label.style.fontSize = "30px";
label.style.marginBottom = "10px";
label.style.display = "inline-block";
formControl.appendChild(label);

var inputAmount = document.createElement("input");
inputAmount.id = "amount";
inputAmount.type = "number";
inputAmount.placeholder = "Enter amount....";
inputAmount.style.padding = "10px";
inputAmount.style.display = "block";
inputAmount.style.marginLeft = "20px";
inputAmount.style.width = "80%";
inputAmount.style.border = "1px solid #dedede";
inputAmount.style.borderRadius = "2px";
formControl.appendChild(inputAmount);

var button = document.createElement("button");
button.innerHTML = "Add Transcation";
button.id = "button";
button.type = "submit";
button.style.backgroundColor = "#9c88ff";
button.style.display = "block";
button.style.margin = "20px 20px 30px";
button.style.padding = "10px";
button.style.fontSize = "16px";
button.style.width = "80%";
button.style.border = "none";
button.style.cursor = "pointer";
formControl.appendChild(button);



















