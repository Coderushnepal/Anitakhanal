var defaultBallSize = 50;
var containerSize = 500;


var container = new container(containerSize);
container.create(document.body);

function position(size) {
    return {
        top : parseInt(Math.random() * size),
        left : parseInt(Math.random() * size),

    };

}


for(i= 1; i<=10; i++){
    var ball = new Ball(defaultBallSize);
    ball.create(container.element, position(containerSize - defaultBallSize));

}




