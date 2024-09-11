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
  background(235, 155, 52); // yellow background
  fill(235, 140, 52); // light orange

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
let Hillcolour = 100 + bass;
beginShape();
fill(235, Hillcolour, 52)
vertex(-51, 532);
bezierVertex(201, 668, 500, 300, 916, 601);
bezierVertex(916, 642, 912, 676, 909, 711);
bezierVertex(845, 714, 809, 705, 718, 707);
bezierVertex(597, 709, 470, 707, 321, 712);
bezierVertex(182, 708, 86, 708, 4, 708);
bezierVertex(0, 640, 0, 640, 0, 640);
endShape();


let yellowValue = 100 + bass;
//cloud1
beginShape();
fill(235, yellowValue, 52)
vertex(181, 73);
bezierVertex(212, 52, 237, 69, 236, 95);
bezierVertex(283, 87, 272, 131, 229, 124);
bezierVertex(238, 144, 182, 159, 185, 123);
bezierVertex(152, 157, 100, 118, 136, 102);
bezierVertex(105, 76, 149, 55, 183, 74);
endShape();
//cloud2
beginShape();
fill(235, yellowValue, 52)
vertex(690, 156);
bezierVertex(667, 126, 735, 125, 732, 162);
bezierVertex(735, 134, 787, 159, 742, 180);
bezierVertex(784, 179, 773, 224, 722, 194);
bezierVertex(717, 238, 658, 198, 675, 192);
bezierVertex(628, 191, 636, 123, 690, 158);
endShape();
//cloud3
beginShape();
fill(235, yellowValue, 52)
vertex(794, 82);
bezierVertex(789, 45, 842, 51, 848, 70);
bezierVertex(880, 62, 877, 123, 843, 92);
bezierVertex(873, 110, 845, 140, 817, 112);
bezierVertex(808, 133, 761, 137, 788, 102);
bezierVertex(745, 118, 767, 64, 791, 85);
endShape();
//cloud4
beginShape();
fill(235, yellowValue, 52)
vertex(31, 76);
bezierVertex(27, 47, 74, 40, 70, 77);
bezierVertex(90, 63, 100, 83, 80, 95);
bezierVertex(80, 103, 66, 115, 58, 99);
bezierVertex(37, 119, 14, 119, 26, 97);
bezierVertex(11, 92, 8, 71, 25, 79);
endShape();
//cloud5
beginShape();
fill(235, yellowValue, 52)
vertex(608, 71);
bezierVertex(601, 45, 656, 30, 659, 71);
bezierVertex(682, 64, 691, 78, 666, 93);
bezierVertex(669, 112, 647, 125, 640, 98);
bezierVertex(622, 118, 600, 114, 605, 96);
bezierVertex(582, 92, 569, 72, 597, 72);
endShape();
//cloud6
beginShape();
fill(235, yellowValue, 52)
vertex(275, 36);
bezierVertex(268, 7, 301, 19, 300, 36);
bezierVertex(321, 21, 352, 39, 305, 59);
bezierVertex(337, 68, 304, 85, 286, 70);
bezierVertex(273, 89, 248, 81, 260, 56);
bezierVertex(246, 59, 231, 12, 275, 39);
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





  let grassHeight = map(bass, -200, 50, 40, 180);

  // Draw the grass images with the calculated height
  image(Grass, -50, 700 - grassHeight, 1000, grassHeight);





}

