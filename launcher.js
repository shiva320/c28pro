class Launcher {
    constructor(bodyA, pointB ){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length: 5
            
        }
        this.launcher = loadImage('sprites/boy.png');
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }


    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        image(this.boy,200,50);
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB; 
        }
    }
}