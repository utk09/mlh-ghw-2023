const canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 350;
paper.setup(canvas);

const keyData = {
  q: {
    sound: new Howl({
      src: ["sounds/bubbles.mp3"],
    }),
    color: "#34d399",
  },
  w: {
    sound: new Howl({
      src: ["sounds/clay.mp3"],
    }),
    color: "#f59e0b",
  },
  e: {
    sound: new Howl({
      src: ["sounds/timer.mp3"],
    }),
    color: "#3b82f6",
  },
  r: {
    sound: new Howl({
      src: ["sounds/play.mp3"],
    }),
    color: "#9333ea",
  },
};

const shapes = [];

// Define a function to create a random polygon or circle
function createRandomShape() {
  const maxPoint = new paper.Point(
    paper.view.size.width - 100,
    paper.view.size.height - 100
  );
  const randomPoint = paper.Point.random();
  const point = maxPoint.multiply(randomPoint).add(50, 50);

  if (Math.random() > 0.5) {
    // Create a polygon
    const sides = Math.floor(Math.random() * 3) + 6;
    const radius = 100;
    const path = new paper.Path.RegularPolygon(point, sides, radius);
    path.fillColor =
      keyData[
        Object.keys(keyData)[
          Math.floor(Math.random() * Object.keys(keyData).length)
        ]
      ].color;
    return path;
  } else {
    // Create a circle
    const radius = Math.floor(Math.random() * 50) + 50; // Random radius between 50 and 100
    const path = new paper.Path.Circle(point, radius);
    path.fillColor =
      keyData[
        Object.keys(keyData)[
          Math.floor(Math.random() * Object.keys(keyData).length)
        ]
      ].color;
    return path;
  }
}

paper.view.onKeyDown = function onKeyDown(event) {
  if (keyData[event.key]) {
    const shape = createRandomShape();
    keyData[event.key].sound.play();
    shapes.push(shape);
  }
};

paper.view.onFrame = function onFrame(event) {
  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    shape.scale(0.9);
    shape.fillColor.hue += 1;
    shape.fillColor.alpha *= 0.95; // reduce opacity
    if (!shape.bounds.intersects(paper.view.bounds)) {
      // remove shapes that are outside the canvas
      shape.remove();
      shapes.splice(i, 1);
      i--;
    }
    if (shape.area < 1) {
      shape.remove();
      shapes.splice(i, 1);
      i--;
    }
  }
};




// Add code to generate just circles

