song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload()
{
	song1 = loadSound("music.mp3");
  song2 = loadSound("music2.mp3");
}


function setup() {
    canvas =  createCanvas(600, 500);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("ScoreLeftWrist = " +scoreLeftWrist + "ScoreRightWrist = "+scoreRightWrist);

	  leftWristX = results[0].pose.leftWrist.x;
	  leftWristY = results[0].pose.leftWrist.y;
	  console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

	  rightWristX = results[0].pose.rightWrist.x;
	  rightWristY = results[0].pose.rightWrist.y;
	  console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	}
  }


function draw() {
   image(video, 0, 0, 600, 500);

   fill("#efdecd");
   stroke("#ff9966");

if (scoreLeftWrist >0.2){

   circle(leftWristX,leftWristY,20);
   InNumberLeftWristY = Number(leftWristY);
   new_leftWristY = floor(InNumberLeftWristY*2);
   
   leftWristY_divide_1000 = new_leftWristY/1000;

   song2.play();
   document.getElementById("Song_Name").innerHTML= "Harry Potter Playing"
}
if (scoreRightWrist >0.2){

  circle(RightWristX,RightWristY,20);
  InNumberRightWristY = Number(RightWristY);
  new_leftWristY = floor(InNumberLeftWristY*2);
  
  RightWristY_divide_1000 = new_RightWristY/1000;

	song1.play();
  document.getElementById("Song_Name").innerHTML= "Peter Pan Playing"
}
   }
