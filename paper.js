class paper {
constructor(x,y,radius){
    var options = {      
        restitution: 0.3,
        density: 0.3,
        friction: 1,
        isStatic: false
    }
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
}
display(){
var pos = this.body.position

push();
translate(pos.x,pos.y)
fill("white")
imageMode(CENTER)
image(this.image,0,0,130,130)
pop();
}
}