var btn_red;
var btn_green;

var r =255;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  //btn_red = createButton("RED");
  //btn_red.position(100,50);
  btn_red= createSprite(200,200,20,20)
  
  
 
}

function draw() {
  background(r,g,b);

  if (keyIsDown(RIGHT_ARROW)){

      r = 0;
      g = 255;
      b =0;
      }
   if (keyIsDown(LEFT_ARROW)){
 
      r =255;
      g = 255;
      b =0;
      }
   drawSprites();
}


function red_bg()
{
  console.log("red");
  r = 255;
  g = 0;
  b =0;
}

function green_bg()
{
 console.log("green");
  r = 0;
  g = 255;
  b =0;
}






