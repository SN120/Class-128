song = "";

leftWrist = "";
rightWrist = "";

volume = 1;
rate = 1;

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 450);
}

function preload(){
    song = loadSound('music.mp3')
}

function play(){
    song.play();
    song.setVolume(volume/10);
    song.rate(1);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        // console.log(results);

        leftWrist = results[0].pose.leftWrist.y;
        rightWrist = results[0].pose.rightWrist.y;
        
        console.log("Left = "+leftWrist);
        console.log('Right = '+rightWrist);
    }
}

function changeVolume(){
    volume = document.getElementById("myRange").value;
    song.setVolume(volume/10);
    document.getElementById("vol").innerHTML = volume;
}
function changeRate(){
    rate =document.getElementById("myRange2").value;
    song.rate(rate/10);
    document.getElementById("speed").innerHTML = rate/10;
}