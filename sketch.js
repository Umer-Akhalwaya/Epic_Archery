const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var playerBase;
var player;

var computerBase;
var computerPlayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBase = new PlayerBase(width/5, random(450,height - 300), 180, 150);
  player = new Player(width/5, playerBase.body.position.y - 153, 50, 180);
 
  computerBase = new ComputerBase(width - 300, random(450,height - 300), 180, 150);
  computerPlayer = new ComputerPlayer(width - 300, computerBase.body.position.y - 153, 50, 180);
  
  World.add(world, playerBase);
  World.add(world, player);

  World.add(world, computerBase);
  World.add(world, computerPlayer);

  Engine.run(engine);

 }

function draw() {

  background("skyblue");

  //Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   computerBase.display();


   //display Player and computerplayer
   player.display();
   computerPlayer.display();


}
