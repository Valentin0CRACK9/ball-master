class Box{
constructor(x,y,width,height){
var options={
    restitution:0.5
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body);
this.width=width;
this.height=height

}


display(){
var pos=this.body.position;
fill("white")
push();
angleMode(RADIANS)
translate(pos.x,pos.y);
rotate(this.body.angle);
rectMode(CENTER)
rect(0,0,this.width,this.height);
pop();
}




}