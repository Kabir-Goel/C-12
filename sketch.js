var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage


function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudImage = loadImage("cloud.png");
}

function setup() {
    createCanvas(600, 200);

//create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

//create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

//create invisibleGround
    invisibleGround = createSprite(200,190, 400, 20);
    invisibleGround.visible = false;
}

function draw() {
    background(222);

//jump when the space button is pressed
    if (keyDown("space") && trex.y > 140) {
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    
    trex.collide(invisibleGround);
    spawnClouds();
    drawSprites();
}
function spawnClouds() {
    if(frameCount %60 == 0){
        var r = Math.round(random(10,80));
        cloud = createSprite(600, r, 40, 10);
        cloud.scale = 0.25
        cloud.addImage(cloudImage);
        cloud.velocityX = -4;
        trex.depth = cloud.depth + 1 
    }
}
