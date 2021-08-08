class PlayerBase {

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("base1.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        //var angle = this.angle;

        push ()

        imageMode (CENTER);
        image (this.image, pos.x, pos.y, this.width, this.height);

        pop ()


    }

}