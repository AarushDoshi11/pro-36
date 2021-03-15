class milkImg {
    constructor(x,y,width,height){
        var options = {
       'resitution':0.8,
       'friction':0.1,
       'density':0.04
    
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(World,this.body);

    }
    display(){
       var pos=this.body.position;
       var angle=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       stroke("blue")
       strokeWeight(4);
       fill("white");
       rectangle(0,0,this.width,this.height);
       pop();
    }
}