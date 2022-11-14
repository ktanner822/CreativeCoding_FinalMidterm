let cloudX = 0;
let cloudY = 150;
let cloudX2 = 700;
let cloudY2 = 300;
let color1;
let color2;
let sunY=700;
let scene = 1;
let diam = 4;
let brightIncrement = 3;
let bright = true;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //color gradient for background
  color1= color(5, 55, 135);
  color2= color(76, 108, 161);
  
  }
  
function draw() {
  
  if (frameCount > 600){
    scene1();
  }
  
  if (frameCount < 600){
    scene = 2;
    background(0);
    scene2();
    fill(252,186,3,4)
    circle(350,350,diam)
  
    //candlelight glow 
  if (diam > windowHeight) {
    bright = false
  }
  if (diam < 0) {
    bright = true
  }
  
  if (bright == true) {
    diam += brightIncrement
  } else {
    diam -= brightIncrement
  }
  
  }
  
}

// reference/inspiration for clouds Mena Landry https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V
function cloudRight(cloudX, cloudY){// function for clouds floating to 
  //the right
  fill(250)
  noStroke();
  ellipse(cloudX, cloudY-20, 100, 60);
  ellipse(cloudX + 10, cloudY + 10, 120, 60);
  ellipse(cloudX - 20, cloudY + 10, 120, 60);
  
  
}

function cloudLeft(cloudX2, cloudY2){//function for cloud floating to
  //the left
  fill(250)
  noStroke();
  ellipse(cloudX2, cloudY2, 70, 50);
  ellipse(cloudX2 - 10, cloudY2 + 10, 70, 50);
  ellipse(cloudX2 + 20, cloudY2 + 10, 70, 50);
  
  
}

function scene1(){// sunrise scene
   //sky gradient
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let sky = lerpColor(color1, color2, n); //lerpColor blends two colors to find a third color somewhere between them. I thought using a gradient for the sky would make it less flat 
    stroke(sky);
    line(0,y,width, y);
  }
  
  //sun
  noStroke(0);
  fill(252, 248, 3,6);
  for(glow = 0; glow < 150; glow++){
    ellipse(350,sunY, glow*8);
    
  }
  
  fill(252, 248, 3);
  ellipse(350,sunY,600,600);
  fill(252, 252, 0);
  ellipse(350,sunY,400,400)
  
  sunY-=0.5;
  
  //Clouds
  cloudRight(cloudX, cloudY);
  cloudLeft(cloudX2,cloudY2);
  cloudRight(cloudX+140, cloudY+40)
  cloudLeft(cloudX2-50,cloudY2-100)
  
  
  
  //cloud increment
  cloudX= cloudX+0.5;
  cloudX2 = cloudX2 - 0.5;
  
  //trees
  stroke(2, 82, 23)
  strokeWeight(5);
  fill(23, 110, 13)
  ellipse(50,600,300,300)
  ellipse(200,600,200,200)
  ellipse(400,600,320,320)
  ellipse(600,600,250,250)

}

function scene2(){//candle light scene
 
  
   fill(252, 186, 3)
  bezier(382,356,396,211,339,381,383,353);
  
//candle
  fill(255);
   rect(350, 350, 55, 105, 10); //draws a rectangle with rounded corners
  
  noStroke();
  fill(250, 198, 12,6)
  for (glow2 = 0; glow2<100; glow2++){
    ellipse(370,350,glow2*7)
  }
}

