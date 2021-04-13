class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
play()
{
  form.hidden();
  text("Game Start",120,100);
  Player.getPlayerInfo();
  if(allPlayers!==undefined)

  {
    var index=0;
    var x=170,y;

    //var ypos=130;
      //for(var plr=0;plr<applaplayers;plr++)
      for(var plr in allPlayers)
      {
        index=index+1;
        x+=200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        if(index===player.index){
          cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
        }
         // if(plr==="player"+player.index)
           // fill("red");
         // else
           // fill("black");
           // ypos+=20;
          //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,ypos);

      }
  }
  if(keyIsDown(UP_ARROW)&&player.index!==null)
  {
player.distance+=50;
player.update();
  }

  drawSprites();
}
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerref=await database.ref('playerCount').once("value");
      if(playerref.exists())
      {
        playerCount=playerref.val();
        player.getCount();
      }

      
      form = new Form()
      form.display();


    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4]
  }
}
