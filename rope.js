class Rope{
    constructor(body1,body2,offsetX,offsetXY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var option={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=constraint.create(option)
        World.add(world,this.rope)
    }
    
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointBA= this.rope.body1B.position;
    
        strokeWeigth(4);
    
        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.x+this.offsetY

        line(Anchor1X,Ancjor1Y,Anchor2X,Anchor2Y);
    }
    