camera = document.getElementById("camera");

Webcam.attach('#camera');

Webcam.set({
height: 350,
width: 300,
image_format: 'png',
png_quality: 90
});

function take_snapshot(){
Webcam.snap(function (data_uri) 
{
document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
});
}

console.log('ml5.version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bxctI-F_j/model.json', modelLoaded);

function modelLoaded(){
console.log("Model Loaded!");
}

function check(){
img = document.getElementById('captured_img');
classifier.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
console.error(error);
//console.log(results);
}
else{
console.log(results);
document.getElementById("object_result").innerHTML = results[0].label
document.getElementById("object_accuracy_result").innerHTML = results[0].confidence.toFixed(2);
}
}