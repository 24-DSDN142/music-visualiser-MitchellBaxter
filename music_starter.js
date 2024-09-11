let last_words = "";
let last_words_opacity = 0;


let palmtree;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (counter==0){
palmtree = loadImage("Palmtree.png")
  }


  if (counter==0){
Grass = loadImage("Grass.png")
  }
  background(235, 155, 52); // cream
  fill(235, 140, 52); // purple

  let stripeWidth = map(other, 5, 100, 5, 20, true);

  let numStripes = height / stripeWidth;
  for (let i = 0; i < numStripes; i = i + 2) {
    let cury = map(i, 0, numStripes - 1, 0, height);
    rect(0, cury, width, stripeWidth);

}

  let ovalPlace = map(vocal, 20, 100, height - 400, 100, true);
  let ovalSize = map(vocal, 80, 100, 150, 120, true);
  
  // Outer glow effect
  for (let i = 0; i < 10; i++) {
    let glowSize = ovalSize + i * 10; // Increase the size for each glow layer
    let glowAlpha = 255 - i * 25; // Decrease the opacity for each glow layer
    fill(235, 120, 52, glowAlpha); // Yellow with varying opacity
    ellipse(width / 2, ovalPlace, glowSize);
  }
  
  // Main oval
  fill(235, 155, 52); // Yellow
  ellipse(width / 2, ovalPlace, ovalSize);

  if (words == "") {
    last_words_opacity = last_words_opacity * 0.95;
    words = last_words;
  } else {
    last_words_opacity = (1 + last_words_opacity) * 1.1;
    if (last_words_opacity > 255) {
      last_words_opacity = 255;
    }
  }
  last_words = words;

  
//Water with bass effect
fill(66, 100, 230);
let waveHeight = map(bass, -100, 150, 10, 40); // Adjust the range and intensity as needed
for (let i = 0; i < width; i += 10) {
  let waveOffset = map(sin(frameCount * 1.2 + i * 0.1), -1, 1, -waveHeight, waveHeight); 
  rect(i, height - 400 + waveOffset, 10, 300 - waveOffset);
}


//Hill
beginShape();
fill(235, 140, 52)
vertex(-51, 532);
bezierVertex(201, 668, 500, 300, 916, 601);
bezierVertex(916, 642, 912, 676, 909, 711);
bezierVertex(845, 714, 809, 705, 718, 707);
bezierVertex(597, 709, 470, 707, 321, 712);
bezierVertex(182, 708, 86, 708, 4, 708);
bezierVertex(0, 640, 0, 640, 0, 640);
endShape();


// Adjust image size based on drum value
let imageSize = map(drum, -150, 40, 100, 800); // Adjust the range as needed
let imageX = 625; // Initial X position
let imageY = 100; // Initial Y position


image(palmtree, imageX, imageY, imageSize, imageSize);
push();
scale(-1, 1);
image(palmtree, -275, 100, imageSize, imageSize);
pop();


  textFont('Pacifico');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(50);
  noStroke();
  fill(0, 0, 0, int(last_words_opacity));
  text(words, width / 2, height / 1.85);

//grass image
image(Grass, -200,550,800,150)
image(Grass,200, 550,800,150)



}

