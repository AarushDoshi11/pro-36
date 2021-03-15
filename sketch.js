var dog,sadDog,happyDog;
var milk1, milk2 , milk3 , milk4 , milk5 , milk6 ;
var milkImg1 , milkImg2 , milkImg3 , milkImg4 , milkImg5 , milkImg6 ;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  milk1 = new milk(800,100,70,70);
  milk2 = new milk(800,100,70,70);
  milk3 = new milk(800,100,70,70);
  milk4 = new milk(800,100,70,70);
  milk5 = new milk(800,100,70,70);
  milk6 = new milk(800,100,70,70);


  milkImg1 = new milk(800,100,70,70);
  milkImg2 = new milk(800,100,70,70);
  milkImg3 = new milk(800,100,70,70);
  milkImg4 = new milk(800,100,70,70);
  milkImg5 = new milk(800,100,70,70);
  milkImg6 = new milk(800,100,70,70);
}

function draw() {
  background(46,139,87);
  drawSprites();

  milk1.display();
  milk2.display();
  milk3.display();
  milk4.display();
  milk5.display();
  milk6.display();


  milkImg1.display();
  milkImg2.display();
  milkImg3.display();
  milkImg4.display();
  milkImg5.display();
  milkImg6.display();
  
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
