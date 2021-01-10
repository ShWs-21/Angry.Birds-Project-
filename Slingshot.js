class Slingshot{

constructor (bodyA,pointB) {
    
var options = {
    bodyA:bird.body,
    pointB:pointB,
    length:10,
    stiffness:0.4
}
   //this.bodyA=bird.body;
    this.pointB=pointB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
}

fly()
{
    this.sling.bodyA=null;
}


display()
{ 
    if(this.sling.bodyA){
    push();
     strokeWeight(10);
     line(bird.body.position.x,bird.body.position.y,this.pointB.x,this.pointB.y);
pop();
    }
}

}
