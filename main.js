
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera")

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

< script src=" https://unpkg.com/ml5@0.4.3/dist/ml5.min.js </script>"></script>

console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('                         ',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    
    speak_data_2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

    function check()
    {
        img = document.getElementById('result')
        classifier.classfy(img, gotResult);

    
    }
