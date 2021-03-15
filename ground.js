class Ground
{
constructor(x,y,w,h)
{
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.wallThickness=20
   

    this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
      World.add(world,this.body)
  

}
display(){
    var groundPos=this.body.position

    
    push()
    translate(groundPos.x,groundPos.y)
    rectMode(CENTER)
angleMode(RADIANS)
strokeWeight(4)
fill(225,225,0)
stroke(225)

rect(0,0,this.w,this.h)
pop()
}

}