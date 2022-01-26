var ballWrapper = document.createElement("div");
ballWrapper.style = `
height :500px;
width : 600px;
border : 1px solid black;
margin: 0 auto;
position: relative;

`;
document.body.appendChild(ballWrapper);

var ball = document.createElement("div");

ball.style = `
height :20px ;
width : 20px;
background-color: green;
border-radius : 24px;
position :absolute;
top :0px;
left:20%;

`;
ballWrapper.appendChild(ball);
 var direction = 1;
ball.addEventListener("click", function(event){
    event.target.innerHTML = "clicked";
    var interval = setInterval(function(){
        var newTop = parseInt(event.target.style.top) + 2 * direction + "px";
        // console.log(newTop);
        event.target.style.top = newTop;
    
        
        if(parseInt(newTop) >= ballWrapper.clientHeight - ball.clientHeight){
            direction *= -1;

        } 
        if (parseInt(newTop) <= 0) {
            direction = 1;
        }
    }, 1000 / 60);


});

