_status = "";
img = "";
objects = [];
objectDetector = "";
function preload() {
  img = loadImage("dog_cat.jpg");
}
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}
function draw() {
  image(img, 0, 0, 640, 420);
  if (_status != "") {
    for (let a = 0; a < objects.length; a++) {
      document.getElementById("status").innerHTML = "Status:Objects Detected";
      fill("red");
      percent = floor(objects[a].confidence * 100);
      x = objects[a].x;
      y = objects[a].y;
      label = objects[a].label;
      width = objects[a].width;
        height = objects[a].height;
        textSize(20);
        textStyle("bold");
        text(label + " " + percent + " %", x+15, y+20)
        noFill();
        stroke("red")
        rect(x,y,width,height)
      }
    
  }
}
function modelLoaded() {
  console.log("Model Loaded");
  _status = "true";
  objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
