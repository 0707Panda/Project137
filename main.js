Status="";
objects=[];

function preload()
{
}

function setup()
{
    canvas=createCanvas(300, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 300, 350);

    if(Status =! "")
    {
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML="Status: Objects Detected";
            document.getElementById("object").innerHTML="Number of Objects Detected are: " + objects.length;
            fill("blue");
            accuracy = Math.floor(objects[i].confidence*100);
            objname_var=object[i].label;
            text(objname_var + "" + accuracy + "%" , objects[i].x +10, objects[i].y +20);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, objects[i].height);
        }
    }
    if(inputValue == objname_var)
    {
       video.stop();  
    }
}



function start()
{
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    inputValue=document.getElementById("textInput").value;
}

function modelLoaded()
{
    console.log("model loaded");
    Status=true;
}

function gotResult(error, results)
{
    if(error){
        console.error(error);
    }
        console.log(results);
        
        objects=results;
}