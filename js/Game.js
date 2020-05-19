class Game{
    constructor(){

    }
//read the gameState from database

getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
}
    //write the gamestate in database
    update(state)
    {
        database.ref('/').update({
            gameState:state
        })
    }
    //start the game
    start(){
        if(gameState === 0)
        {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}