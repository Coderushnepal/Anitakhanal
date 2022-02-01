function Ball(size, id) {
    this.width = size;
    this.height = size;
    this.id = id;

    this.create = function(container, position){

        this.element = document.createElement("div");
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.borderRadius = "50%";
        this.element.style.background = '#'+Math.floor(16777215*Math.random()).toString(16);

        this.element.style.position = "absolute";
        this.element.style.top = position.top + "px";
        this.element.style.left = position.left + "px";
    
    var direction = 5;
    var directionTop = parseInt(Math.random() * direction);
    var directionLeft = parseInt(Math.random() * direction);

    this.element.addEventListener("click", function(e){
        var interval = setInterval(function(){
            var newTop = parseInt(e.target.style.top) + (directionTop) + "px";
            e.target.style.top = newTop;

            if(parseInt(newTop) <= 0 || parseInt(newTop) >= (containerSize - defaultBallSize)){
                directionTop *= -1;
            }
            

            var newLeft = parseInt(e.target.style.left) + (directionLeft) +"px";
            e.target.style.left = newLeft;

            if(parseInt(newLeft) <= 0 || parseInt(newLeft) >= containerSize - defaultBallSize) {
                directionLeft *= -1;
            }

            
        }, 1000 / 60);
    });

        container.appendChild(this.element);
    };

}