object=[];
status="";



function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    canvas.position(350,250);
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    object_name=document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}