class Paper{
    constructor(x,y,radius){
        var options = {
             isStatic:false,
             restitution:0.3,
             friction:0.5,
             density:1.2
         }
        this.body = Bodies.rectangle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
    }
    display(){
         var pos = this.body.position;
         
        stroke("black") 
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
} 
