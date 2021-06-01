song1="";
song2="";
function preload()
{
    song1=loadSound("Dil Bechara (1).mp3");
    song2=loadSound("Dil Bechara (2).mp3");
}
function setup()
{
    canvas=createCanvas(600,450);
    canvas.position(380,220);

    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,450);
}
