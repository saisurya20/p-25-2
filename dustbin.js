class Dustbin
{
constructor(x,y)
{
    this.x=x
    this.y=y
    this.dustbinWidth=200
    this.dustbinHeight=100
    this.wallThickness=200
    this.angle=0

    this.bottomBody=Bodies.rectangle(this.x,this.y,this,this.dustbinWidth,this.wallThickness,{isStatic:true})
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    Matter.Body.setAngle(this.leftWallBody,this.angle)

    this.rightWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    Matter.Body.setAngle(this.rightWallBody,this.angle)
this.image=loadImage("sprites/dustbingreen.png")
    World.add(world,this.bottomBody)
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody)

}
display(){
    var posBottom=this.bottomBody.position
    var posLeft=this.leftWallBody.position
    var posRight=this.rightWallBody.position
    
    
    push()
    translate(posRight.x,posRight.y)
    rectMode(CENTER)
angleMode(RADIANS)
fill(225)
stroke(225)
rotate(-1*this.angle)
imageMode(CENTER)
image(this.image,0,0,this.wallThickness,this.dustbinHeight)
pop()
}

}