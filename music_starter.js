let last_words = "";
let last_words_opacity = 0;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
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
    fill(235, 205, 52, glowAlpha); // Yellow with varying opacity
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
  //Water
  fill(66, 135, 245);
  rect(0, height -400, width, 150);
  last_words = words;

  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(80);
  noStroke();
  fill(0, 0, 0, int(last_words_opacity));
  text(words, width / 2, height / 2);

 

}

