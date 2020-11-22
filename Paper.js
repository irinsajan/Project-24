class Paper{
    constructor(x,y,radius,height){
        this.body = Bodies.rectangle(x,y,radius,height);
        World.add(world,this.body);

        this.radius = radius;
        this.height = height;
    }
    display(){
         var pos = this.body.position;
         var options = {
             isStatic:false,
             restitution:0.3,
             friction:0.5,
             density:1.2
         }
        stroke("black") 
        fill("white");
        ellipse(pos.x,pos.y,this.radius,this.height);
    }
} 