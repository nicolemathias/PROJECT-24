class paper{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution : 0.3,
            friction: 0.5,
            density:1.2

        }
        this.body = Bodies.circle(x,y,width,height,options)
        this.width = width;
        this.height = height
        World.add(world,this.body)
        console.log(this.body.position)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("purple")
        
        rect(0,0,this.width,this.height)
        pop();

    }
}