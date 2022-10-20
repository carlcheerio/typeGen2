let bullets = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(51);
  //draw the player
    circle(mouseX,height-50,25);
  for (let bullet of bullets){
    circle(bullet.x, bullet.y, 10)
    bullet.y -= 2
  }
}

function mousePressed() {
let bullet = {
  x: mouseX, 
  y: height-50
  }
bullets.push(bullet)
}
//bullets spawn on click
//enemies
//collisions
//score
//lose game
