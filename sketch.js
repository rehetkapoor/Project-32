const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Stand, sling, circle

var block1, block2, block3, block4, block5
var block6, block7, block8
var block9

var score =0

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Stand = new Ground(590, 240, 350,20);
    block1 = new Box(530,235,30,40);
    block2 = new Box(560, 235, 30, 40);
    block3 = new Box(590,235,30,40);
    block4 = new Box(620,235,30,40);
    block5 = new Box(650, 235, 30, 40);

    block6 = new Box(560, 195, 30, 40);
    block7 = new Box(590, 195, 30, 40);
    block8 = new Box(620, 195, 30, 40);

    block9 = new Box(590, 155, 30, 40);

    circle = new Circle(115,180);

    slingshot = new Slingshot(circle.body,{x:115, y:180});


}

function draw(){
    background("grey");
    Engine.update(engine);
    Stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    circle.display();
    slingshot.display();
    text("Score: " + score, 750, 40);
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
}

function mouseDragged(){
    Matter.Body.setPosition(circle.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(circle.body);
    }
}