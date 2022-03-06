function setup(){
    canvas=createCanvas(640,480);
    canvas.position(300,250);
    video=createCapture(VIDEO);
    video.hide();
    tintColour="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tintColour);
}
function filterTint(){
    tintColour=document.getElementById("colour_name").value;
}
function take_snapshot(){
    save("My filter Image.png");
}