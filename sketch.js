function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  stroke(237, 26, 59);
  strokeWeight(10);
}
function draw() {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 10; i++) {
      for (let k = 4; k > 0; k--) {
        ellipse(
          240 * i + (j % 2) * (120),
          40 * j,
          k * 60,
          k * 40
        );
      }
    }
  }
}