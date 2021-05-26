// class slingshot{
//     constructor(pA, bB) {
//         var options = {
//             pointA: pA,
//             bodyB: bB,
//             length:3,
//             stiffness:0.04
//         }
//         this.point1 = pA;
//         this.sling = Constraint.create(options);
//         World.add(world, this.sling);

//     }

//     display() {
//         var p1 = this.point1;
//         var p2 = this.sling.bodyB.position;
//         push();
//         strokeWeight(3);
//         line(p1.x, p1.y, p2.x, p2.y);
//         pop();
//     }

//     fly() {

//     }
// }


class slingshot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:3,
            stiffness:0.04
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    display() {
        
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("white");
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
        
    }

    fly() {
        this.sling.bodyA = null;
    }
}