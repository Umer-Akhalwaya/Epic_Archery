class Player {

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("player.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
       // var angle = this.angle;

        push ()

        //translate (pos.x, pos.y);
        //rotate (this.angle);
        imageMode (CENTER);
        image (this.image, pos.x, pos.y, this.width, this.height);

        pop ()


    }

}