var hypnoticBall, database;
var position;
var game,player,form,gameState,playerCount

function setup(){
  database = firebase.database();
 
  createCanvas(500,500);
game=new Game()
game.getState()
game.start()
}

function draw(){
    if(playerCount===4){
      gameState=1
    }
    if(gameState===1){
  game.play()
    }
}

