var barWidth = 20;
var lastBar = -1;

function setup() {
  createCanvas(1200, 400);
  colorMode(HSB, height, height, height);  
  noStroke();
  background(0);
}

function draw() {
  var whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
