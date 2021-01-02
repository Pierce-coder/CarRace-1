class Game{

    // .ref() === where to read and write from
    //.on() ==== read from the db
    //.set(), .upate() === write to db

    constructor(){}


    getState(){

        var gameStateRef = database.ref('gameState');
       // console.log(gameStateRef)
        gameStateRef.on("value", function(data){
            gameState = data.val();
            console.log(gameState)
        })

    }


    update(state){
        database.ref("/").update({
            gameState :state
        });
    }



    start(){

        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }



}