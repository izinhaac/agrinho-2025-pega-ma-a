var img;
var img2;
let x = 200
let y = 200;
let speed = 2;
let jogo = false; //Adicione esta linha aqui

function preload () {
  img = loadImage("maça.gif")
}
  
function setup(){ 
  createCanvas(800, 600);
}

function draw(){
  if(jogo==false){ //Adicione esta linha aqui
   background(img);
  circle(mouseX, mouseY, 10)
 text(mouseX+":"+mouseY,39,20)
  if(mouseX>=255 && mouseY>=332 && mouseX<=371 && mouseY<=332){
    noFill();
stroke("black");
    strokeWeight(6);
  rect(255,332,150,120)
    
  if(mouseIsPressed){   
    fill(0,0,180)
    rect(255,332,150,120)
    jogo = true;
  }
}
}
  
  else{ //Adicione esta linha aqui
    background(255) // adicione esta linha aqui
    if (keyIsDown(LEFT_ARROW) && keyIsDown(32) || keyIsDown(65) && keyIsDown(32)) {
      x-= apeed * 2;
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      X -= SPEED;
    }}
}