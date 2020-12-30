class wall{
constructor(x,y,width,height){
var opt={isStatic:true}

  this.wall=Bodies.rectangle(x,y,width,height,opt);
  this.width=width;
  this.height=height;
  World.add(world,this.wall);
}
display(){
  var pos=this.wall.position;  
  rectMode(CENTER);
  fill(255,0,0);
  rect(this.wall.position.x,this.wall.position.y,this.width,this.height);
  }
}