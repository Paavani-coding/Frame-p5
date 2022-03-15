function preload(){
}
function setup(){
    canvas= createCanvas(640,480);
    canvas.position(280,300);
    video= createCapture(VIDEO);
    video.hide();
    

}
function draw(){

    image(video,100,75,450,350);
    fill(252,18,120);
    stroke(252,18,120);
    circle(0,0,200);

    stroke(3,37,126);
    fill(3,37,126);
    circle(640,0,200);

    stroke(246,190,0);
    fill(246,190,0);
    circle(640,500,200);

    stroke(194,24,7);
    fill(194,24,7);
    circle(0,500,200);

    stroke(255, 26, 74);
    fill(255, 26, 74);
    circle(20,250,20);

    stroke(118, 183, 167);
    fill(118, 183, 167);
    circle(60,185,20);

    stroke(54, 157, 178);
    fill(54, 157, 178);
    circle(50,320,20);

    stroke(241, 170, 168);
    fill(241, 170, 168);
    circle(320,25,20);

    stroke(241, 85, 86);
    fill(241, 85, 86);
    circle(256,50,20);

    stroke(13, 85, 86);
    fill(13, 85, 86);
    circle(385,52,20);

    stroke(66, 24, 105);
    fill(66, 24, 105);
    circle(580,200,20);

    stroke(99, 57, 56);
    fill(99, 57, 56);
    circle(620,250,20);

    stroke(12, 57, 112);
    fill(12, 57, 112);
    circle(580,300,20);

    stroke(174, 64, 145);
    fill(174, 64, 145);
    circle(405,450,20);

    stroke(42, 75, 157);
    fill(42, 75, 157);
    circle(280,450,20);

    stroke(104, 75, 157);
    fill(104, 75, 157 );
    circle(346,450,20);

}




function take_snapshot(){
    save('image_p5.png');
   
}
function filter_tint(){
    tint_color= document.getElementById("color_name").value;
}