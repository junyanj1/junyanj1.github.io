let secAngle = 0
let currentSec = 0;
let minAngle = 0;
let currentMin = 0;
let graduation = [...Array(12).keys()];
let currentHour = 0;
let colorScheme = 255;

function setup() {
  currentSec = second();
  createCanvas(800, 600);
  // noStroke();
  fill(colorScheme);
  angleMode(RADIANS);
}

function draw() {
  translate(width/2,height/2);
  background(60);
  fill(226, 123, 88); // Mars Terra Cotta
  strokeWeight(5);
  stroke(colorScheme);
  ellipse(0,0,200,200);

  // put 12 tiny marks inside "Saturn"
  for (let g in graduation) {
    stroke(123,120,105);
    strokeWeight(5);
    // console.log(Math.PI);
    let innerRadius = 93;
    let outerRadius = 95;
    let innerX = innerRadius*Math.sin(g*Math.PI/6);
    let innerY = innerRadius*Math.cos(g*Math.PI/6);
    let outerX = outerRadius*Math.sin(g*Math.PI/6);
    let outerY = outerRadius*Math.cos(g*Math.PI/6);
    line(-innerX,-innerY,-outerX,-outerY);
  }

  fill(154,205,50); // Forest (yellow?) green
  stroke(154,205,50);
  currentHour = hour()%12;
  arc(0, 0, 190, 190, -PI/2+currentHour*PI/6, PI/6-PI/2+currentHour*PI/6);

  stroke(colorScheme);
  noFill();
  ellipse(0,0,287,287);

  rotate(-3*PI/4);
  if (currentMin != minute()) {
    currentMin = minute();
    console.log(`The current minute is: ${minute()}.`);
  }
  minAngle = map(currentMin,0,60,0,2*PI);
  // console.log(minAngle);
  rotate(minAngle);
  fill(100);
  stroke(colorScheme);
  strokeWeight(5);
  ellipse(100,100,24,24);
  rotate(-minAngle);

  stroke(colorScheme);
  noFill();
  ellipse(0,0,428,428);

  secAngle = map(currentSec*1000+millis(),0,60000,0,2*PI);
  rotate(secAngle);
  fill(100);
  stroke(colorScheme);
  strokeWeight(5);
  ellipse(150,150,24,24);
  rotate(-secAngle);
  rotate(3*PI/4);

  translate(-width/2,-height/2);
  // Courtesy of the provided sketch
  textSize(32);
	fill(0);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(180);
	text(second(), 10, 90);
}
