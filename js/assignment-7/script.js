var dollar = document.getElementById("dollarspan");
var moneyplus = document.getElementById("moneyplus");
var moneyminus = document.getElementById("moneyminus");
var list = document.getElementById("list");
var form = document.getElementById("form");
var text = document.getElementById("text");
var amount = document.getElementById("amount")



let transactions = [];

function addTrasaction(e){
    e.preventDefault();
  if(
      text.value.trim() === "" || 
      amount.value.trim() === ""

  ){
      alert("please Enter Text and Value");
  }else {
      var transaction = {
          id : generateId(),
          text : text.value,
          amount : +amount.value,
      };
      transactions.push(transaction);
      addTransactionDOM(transaction);
      updateValues();
      text.value = "";
      amount.value = "";
  };
}

function generateId(){
    return Math.floor(Math.random() * 100000000);
}
function addTransactionDOM(transaction){
    console.log(transaction);
    var sign = transcation.amount < 0 ? "-" : "+";
    var item = document.createElement("li");

    item.classList.add(
      transaction.amount < 0 ? "listMinus" : "listPlus")
    
    item.innerHTML = `
    ${transcation.text} <span>${sign}${Math.abs
        (transcation.amount)}
        </span><button class="deleteButton" onclick ="removeTransaction(${transaction.id})"> X </button>
    `;
    list.appendChild(item);
}
function removeTransaction(id) {
    transactions = transactions.filter(
        (transaction) => transaction.id !== id
        );
        Init();

}
// update value

function updateValues(){
    var amounts = transactions.map(transcation => transactions.amount);
    var total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    var income = amounts
    .filter(item => item > 0)
    .reduce((acc,item)=> (acc += item),0)
    .toFixed(2);
    var expense = (
        amounts
        .filter((item) => item<0)
        .reduce((acc, item)=> (acc += item),0) * -1)
        .toFixed(2);
   
        dollar.innerText =  `$${total}`;
        moneyplus.innerText = `$${income}`;
        moneyminus.innerText = `$${expense}`;


}
// init app
function Init(){
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
}
Init();
// addTransactionDOM(transactions);

form.addEventListener("submit", addTrasaction);