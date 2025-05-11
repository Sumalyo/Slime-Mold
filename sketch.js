let m;
let d;
let molds = [];
let num = 8000;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  //m = new Mold(height/2,width/2);
  let radius = 100;
  
  for (let i=0;i<num;i++)
  {
  let randNum = random(360);
  m = new Mold(width/2+random(1,radius)*cos(randNum),height/2+random(1,radius)*sin(randNum),random(360));
  molds.push(m);
  }
  d = pixelDensity();
  
  //console.log(pixelDensity());  
  // The pixels array conatins color of each pixel on the canvas
  // It is a 1D array 
  // The number of values depends on the canvas size and pixel density (macbook has 2)
  // updatePixels() must be called after making any changes
  // 
}

function draw() {
  //translate(height/2,width/2)
  background(0,10);
  loadPixels();
  for(let i =0 ; i<num; i++)
  {
  molds[i].display();
  molds[i].update();
  }
  
  //filter(BLUR,0.1);
  //console.log(frameRate());
  //drawingContext.filter = 'blur(8px)';
}
