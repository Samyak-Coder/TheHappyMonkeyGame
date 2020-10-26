
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleground
var foodGroup, obstaclesGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacesImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -8;
  ground.x = ground.width/2
  console.log(ground.x)
  
  invisibleground = createSprite(400,350,900,5);
  invisibleground.visible = false;
  
  foodGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
  
  background(225);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
    text("Survival Time: " + survivalTime, 100, 50);
  
  if(ground.x < 0){
    
    ground.x = ground.width/2;
    
  }
  
  if(keyDown("space")&& monkey.y >= 100) {

    monkey.velocityY = -12;
    
  }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  drawSprites();
  food();
  obstacles();
  
}

function food(){
  
  if (frameCount % 100 === 0){
  
  var banana = createSprite(600,120,40,10)
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -2;
  banana.lifetime = 300
  foodGroup.add(banana);
    
  }  
  
}

function obstacles(){
  
  if (frameCount % 300 === 0){
  
  var obstacles = createSprite(600,330,900,10)
  ground.collide(obstacles);
 obstacles.addImage(obstacesImage);
  obstacles.scale = 0.1;
  obstacles.velocityX = -2;
 obstacles.lifetime = 300
  obstaclesGroup.add(obstacles);
    
  }  
  
}





