Webcam.set({
width:350,
height:300,
image_format: "png",
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera')


function take_snapshot() {
Webcam.snap(function(datauri) {
document.getElementById("result").innerHTML = "<img id='captured_image' src="+data_uri+"/>"
});
}

console.log('ml5 verson:', ml5.verson);
classifire = ml5.imageclassifire('https://teachablemachine.withgoogle.com/models/94dzTfigC/model.json', modelLoded);