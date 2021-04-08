const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var b1, b2;
var b3, b4;
var net1 , net2;

function preload() {

}

var engine, world;

function setup() {
    createCanvas(1000, 700)
    engine = Engine.create();
    world = engine.world;

    b1 = new Box(130, 150, 20, 170, PI)
    c2 = new Circle(150, 280, 10)

    b2 = new Box(130, 500, 20, 170, PI)
    c3 = new Circle(150, 530, 10)


    wall1 = new Boundary(500, 370, 1000, 10)
        //inv wall
    wall2 = new Boundary(100, 150, 20, 170)

    //stand for the ball
    wall3 = new Boundary(150, 360, 3, 20)


    wall4 = new Boundary(500, 620, 1000, 10)
    //inv wall
wall5 = new Boundary(100, 400, 20, 170)

//stand for the ball
wall6 = new Boundary(150, 610, 3, 20)

net1 = new Boundary(800 , 200 , 100 , 70);

net2 = new Boundary(800 , 550 , 100, 70)
}

function draw() {
    background("lavender")
    Engine.update(engine)


    b1.show()
    c2.show()

    b2.show()
    c3.show()

    wall1.show()
    wall3.show()

    wall4.show()
    wall6.show()
    net1.show()
    net2.show()
}


function keyPressed() {
    if(keyCode === 32 ){
Matter.Body.setAngle(b1.body, 25)
    Matter.Body.applyForce(c2.body, c2.body.position, { x: 0.03, y: -0.009 })
}
}

function keyPressed() {
    if(keyCode === UP_ARROW){
Matter.Body.setAngle(b2.body, 25)
    Matter.Body.applyForce(c3.body, c3.body.position, { x: 0.03, y: -0.009 })
}
}