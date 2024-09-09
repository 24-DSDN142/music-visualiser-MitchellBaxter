let last_words = "";
let last_words_opacity = 0;

let palmtree;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (counter==0){
palmtree = loadImage("Palmtree.png")
  }
  background(255, 236, 180); // cream
  fill(235, 205, 52); // purple

  let stripeWidth = map(other, 5, 100, 5, 20, true);

  let numStripes = height / stripeWidth;
  for (let i = 0; i < numStripes; i = i + 2) {
    let cury = map(i, 0, numStripes - 1, 0, height);
    rect(0, cury, width, stripeWidth);

}

  // Beach
  fill(237, 201, 175); 
  rect(0, height - 300, width, 300);

  let ovalPlace = map(vocal, 20, 100, height - 430, 100, true);
  let ovalSize = map(vocal, 80, 100, 240, 150, true);
  
  // Outer glow effect
  for (let i = 0; i < 10; i++) {
    let glowSize = ovalSize + i * 10; // Increase the size for each glow layer
    let glowAlpha = 255 - i * 25; // Decrease the opacity for each glow layer
    fill(235, 140, 52, glowAlpha); // Yellow with varying opacity
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

  
//Water
 fill(66, 135, 245);
rect(0, height -400, width, 150);


//Hill
beginShape();
fill(38, 148, 50)
vertex(0, 470);
bezierVertex(272, 583, 500, 300, 755, 496);
bezierVertex(783, 519, 804, 527, 826, 529);
bezierVertex(849, 529, 881, 529, 898, 529);
bezierVertex(904, 555, 916, 608, 914, 679);
bezierVertex(911, 710, 843, 713, 724, 709);
bezierVertex(615, 706, 427, 713, 272, 708);
bezierVertex(72, 707, 4, 706, 0, 701);
bezierVertex(0, 651, 0, 567, 0, 470);
endShape();




image(palmtree,625,200,500,500)
push(); 
scale(-1, 1); 
image(palmtree, -275, 200, 500, 500); 
pop(); 

  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(50);
  noStroke();
  fill(0, 0, 0, int(last_words_opacity));
  text(words, width / 2, height / 2);







}

