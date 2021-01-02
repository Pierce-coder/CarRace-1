var  database;
var playerCount, gameState = 0, player, form, game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  console.log(game.getState());
  game.start();
}

function draw(){
  background("white");
    
}
