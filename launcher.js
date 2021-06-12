class Launcher{
    constructor(BA, PB,){
        var options = {
            bodyA: BA,
            pointB: PB,
            stiffness: 0.07,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){

        
        var PA = this.chain.bodyA.position;
        var PB = this.chain.pointB;
        strokeWeight(4);
        line(PA.x, PA.y, PB.x, PB.y);
        }
    }
    fly(){
        this.chain.bodyA=null
    }
    attach(BA){
        this.chain.bodyA=BA
    }
}