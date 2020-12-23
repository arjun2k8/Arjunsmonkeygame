
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground;
var FoodGroup, obstacleGroup;
var score=0; ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  createCanvas(600,600);
  //monkey animation
 monkey=createSprite(80,450,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.25;

//creating ground and moving it
ground=createSprite(80,530,1050,20);
ground.velocityX=-5;
 ground.x = ground.width /2;

//creating groups
obstacleGroup = createGroup();
  FoodGroup = createGroup();

}


function draw() {
background("white");
  text("Score: "+ score, 500,50);
drawSprites();
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  monkey.setCollider("circle",1,15,);
  monkey.debug = true

  

  //setting score
  score = score + Math.round(getFrameRate()/60);
  

  
 
  
  
  //calling functions
  spawnbanana();
  spawnObstacles();
  

}

 
 function spawnbanana() {
    
  //write code here to spawn the bnanas
  if (frameCount % 60 === 0) {
     banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.25;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  
  }
 }
function spawnObstacles() {
  if(frameCount % 200 === 0)
  { obstacle = createSprite(600,425,10,20); 
   obstacle.velocityX = -6;
   //adding image to the obstacle
   obstacle.addImage(obstacleImage); 
   obstacle.scale=0.15;
   //giving lifetime to the obstacle 
   obstacle.lifetime = 300;
   //add each obstacle to the group 
   obstacleGroup.add(obstacle);
  obstacle.scale= 0.5;
  } }
