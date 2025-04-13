
// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "Waiting...";
let confidence = "";

function setup() {
  let cnv = createCanvas(640,520);
  cnv.parent('test'); // attach canvas to id
  video = createCapture(VIDEO);
  video.hide();

  // Start classification when the video is ready
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IB8Vygn4A/model.json",() => {
    console.log("Model loaded");
    startClassification();
  });
}
  
function startClassification() {
    classifier.classifyStart(video, gotResults);
}

function draw() {
  background(0);
  image(video, 0, 50);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, 30);
}

// Callback function for when classification has finished
function gotResults(results, error) {
  // The results are in an array ordered by confidence
  if(error){
    console.log("Classificaiton error: ", error);
    return;
  }
  if(results && results[0]){
    label = results[0].label;
    confidence = results[0].confidence;
    console.log("Label:", label, "Confidence:", confidence);

    // if(confidence > 0.75){
      // classifier.classifyStop();
      // console.log("Stopped classificaiton due to high confidence");
    // }
  }
}

