let d;
function setup() {
    createCanvas(100,100);
    background(255,0,0);
    loadPixels();
    //print(pixels);
    // for me this is a 15 size array
    // Each pixel has RGBA ie 4 values 
    // NPixels = 4 * (density * width) * (density * height)
    // = 4 x (2 x 1) X (2 X 1)
    // = 16 [ 4* D^2 *aera]
    d = pixelDensity();
    let x = 50;
    let y = 50;
    // locate x,y on pixel array
    // index = y * Width + x 
    let index = (4 * d * y) * d* width + (4 * d * x) ;
    let inc = 20*2*4; // update each pixel twice and move 4 steps for RGBA
    // 20 (steps) * 2 (density) * 4 (RGBA)
    while(inc > 0)
    {
    pixels [index + 0+inc] = 0;
    pixels [index + 1+inc] = 255;
    pixels [index + 2+inc] = 0;
    pixels [index + 3+inc] = 255;
    pixels [index+3 + 0+inc] = 0;
    pixels [index+3 + 1+inc] = 0;
    pixels [index+3 + 2+inc] = 255;
    pixels [index+3 + 3+inc] = 255;
    inc-=8;
    }
    updatePixels();
    stroke('black');
    line(50,60,70,60)

}
function draw()
{

}