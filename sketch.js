var player
var bg,backgroundImg
var bug,bugImg
var rocket,rocketimg
var coin,coinimg
var boy,boyimg
var obstacle,obstacleGroup,coinGroup;
var score=0;

function preload(){
backgroundImg=loadImage("background.jpg")
bugImg=loadAnimation("bug1.png","bug2.png","bug3.png","bug4.png","bug5.png","bug6.png")
rocketimg=loadImage("rocket.png")
coinimg=loadImage("coin.png")
boyimg=loadImage("boy.png")
}
function setup(){
createCanvas(1200,500);


bg=createSprite(600,250,1200,500)
bg.velocityX=-20
bg.scale=1.75
bg.x=width/2
bg.addImage(backgroundImg)

boy=createSprite(150,350,10,10)
boy.addImage(boyimg)
boy.setCollider("rectangle",0,0,30,110)

obstacleGroup = new Group()
coinGroup = new Group()

}


function draw(){
background(0)


if(bg.x<200){
    bg.x=width/2
}
 
spawnbugs()
spawnCoin()


if(boy.isTouching(coinGroup)){
    score++
    
    }

drawSprites();
fill(0)
text("Score :"+ score,width-(width/6),50)

}


function spawnbugs(){
if(frameCount%200 === 0){
    obstacle=createSprite(width,135,10,10);
    
    obstacle.scale=0.5
obstacle.velocityX=-2
obstacle.y=Math.round(random(135,450))

var rand= Math.round(random(1,2))
switch(rand){
case 1 :  obstacle.addAnimation("bug",bugImg)
break;

case 2 :  obstacle.addAnimation("rocket",rocketimg)
obstacle.scale= 0.25;
obstacle.velocityX=-6;
break;
}

obstacleGroup.add(obstacle)
}
}

function spawnCoin(){
    if(frameCount%50 === 0){

        coin= createSprite(width,250,10,10);
        coin.y=Math.round(random(10,400))
        coin.addImage(coinimg);
        coin.scale=0.1
        coin.velocityX=-5
        coinGroup.add(coin)
 

    }
}