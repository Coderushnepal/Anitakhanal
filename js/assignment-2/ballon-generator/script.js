var button = document.createElement("button");
button.innerHTML = "Ballon Generator";
button.style.backgroundColor = "green";
button.style.padding = "10px";
button.style.margin = "0 auto";
document.body.appendChild(button);

var ballonWrapper = document.createElement("div");
ballonWrapper.setAttribute = ("id", "ballonWrapper")
ballonWrapper.style.height = "500px";
ballonWrapper.style.width = "500px";
ballonWrapper.style.marginTop = "30px";
ballonWrapper.style.border = "1px solid black";
ballonWrapper.style.position = "relative";
document.body.appendChild(ballonWrapper);

var height = ballonWrapper.clientHeight;
var width = ballonWrapper.clientWidth;

button.addEventListener("click", function(event){
      var circle = document.createElement("div");
      circle.style.borderRadius = "50%";
      circle.style.height = "20px";
      circle.style.width = "20px";
      circle.style.backgroundColor = "blue";
      circle.style.position ="absolute";
      circle.style.top = (height - 20) * Math.random() + "px";
      circle.style.left = (width - 20) * Math.random() + "px";
      ballonWrapper.appendChild(circle);
    //   circle.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);


});