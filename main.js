//https://teachablemachine.withgoogle.com/models/lDb1JcL-A/

Webcam.set ({
    width:350,
    height:300,
    image_format : "png",
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach("#camera");
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
        })  ;
    }
    
    console.log("ml5 version", ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lDb1JcL-A/model.json",model_loaded);
    
    function model_loaded (){
    console.log("model_loaded");
    }