


function setup() {
  createCanvas(1000, 400);
  //Crea los sprites necesarios para formar tu nombre
linea1 = createSprite (150,180,20,300);
linea1.shapeColor="yellow"

linea2 = createSprite (260,40,200,20);
linea2.shapeColor="white"

linea3 = createSprite (260,150,200,20);
linea3.shapeColor="red"

linea4 = createSprite (460,180,20,300);
linea4.shapeColor="green"

linea5 = createSprite (570,40,200,20);
linea5.shapeColor="red"

linea6 = createSprite (570,150,200,20);
linea6.shapeColor="white"

linea7 = createSprite (570,320,200,20);
linea7.shapeColor="orange"

linea8 = createSprite (750,180,20,300);
linea8.shapeColor="yellow"

linea9 = createSprite (860,40,200,20);
linea9.shapeColor="white"

linea10 = createSprite (970,100,20,140);
linea10.shapeColor="red"

linea11 = createSprite (860,160,200,20);
linea11.shapeColor="green"

}

function draw() {
  background("black");

  drawSprites();
  
}