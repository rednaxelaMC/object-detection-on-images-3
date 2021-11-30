img="";
status="";
objects=[];
function preload()
{
    img = loadImage('tv.webp');
    
}
function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status-detecting objects"
}
function draw()
{
    if(status!= undefined)
    {
    image(img,0,0,620,420);
    for(var i=0; i<objects.length;i++)
    {
        document.getElementById("status").innerHTML = "status-objects detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
         noFill();
          stroke(255, 0, 0);
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
    }
}
function modelLoaded()
{
    console.log("model loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
if(error)
{
    console.log(error);

}
else{
    console.log(results);
    objects = results
}
}