var ast,astimg;
var bg,bgimg;
var sleep,sleepimg;
var brush,brushimg;
var gym,gymimg;
var eat,eatimg;
var drink,drinkimg;
var move,moveimg;
var bath,bathimg;

function preload(){

  bgimg = loadImage("iss.png");
  sleepimg = loadAnimation("sleep.png");
  eatimg = loadAnimation("eat2.png","eat2.png","eat2.png","eat1.png","eat1.png","eat1.png","eat1.png",);
  gymimg = loadAnimation("gym1.png","gym2.png");
  brushimg = loadImage("brush.png"); 
  bathimg = loadAnimation("bath1.png","bath2.png");
  moveimg = loadAnimation("move.png","move.png","move1.png","move1.png")
  

}

function setup(){
createCanvas(600,400);
 
  bg = createSprite(300,200);
  bg.addImage("image",bgimg);
  bg.scale = 0.12
  
  ast = createSprite(300,200);
  ast.addAnimation("sleep",sleepimg);
  ast.scale = 0.1;
  
}

function draw(){
background("black");

    createEdgesSprite();

  if (keyDown(LEFT_ARROW)){
    
    ast.addAnimation("eating",eatimg);
    ast.changeAnimation("eating");
    
  }
  
  if (keyDown(DOWN_ARROW)){
    
    ast.addAnimation("gyming",gymimg);
    ast.changeAnimation("gyming");
    
  }
  
  if (keyDown(UP_ARROW)){
    
    ast.addAnimation("brushing",brushimg);
    ast.changeAnimation("brushing");
    ast.x = 300;
    ast.y = 200;
    ast.velocityX = 0;
    ast.velocityY = 0;
  }

  if (keyDown(RIGHT_ARROW)){
    
    ast.addAnimation("bathing",bathimg);
    ast.changeAnimation("bathing");

  }
  
  if (keyDown("m")){
    
    ast.addAnimation("moving",moveimg);
    ast.changeAnimation("moving");
    ast.velocityX = -0.5;
    ast.velocityY = -0.5;
    
  }
   

  drawSprites();
}
 
