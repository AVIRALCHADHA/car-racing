canvas=document.getElementById(id="myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
backgroundImage="car back.jpg";
car_img="download.png";
roverx=10;
rovery=10;
function add(){
    backgroundImagetag=new Image();
    backgroundImagetag.onload=uploadbackground;
    backgroundImagetag.src=backgroundImage;
    carImagetag=new Image();
    carImagetag.onload=uploadcar;
    carImagetag.src=carImage;
}
function uploadbackground(){
    ctx.drawimage(backgroundImagetag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawimage(carImagetag,car1x,car1y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawimage(car2Imagetag,car2x,car2y,car2_width,car2_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keycode;
console.log(keypress);
if(keypress=="38"){
    car1up();
    console.log("up");

}
if(keypress=="40"){
    car1down();
    console.log("down");

}
if(keypress=="37"){
    car1left();
    console.log("left");

}
if(keypress=="39"){
    car1right();
    console.log("right");

}
if(keypress=="38"){
    car2up();
    console.log("up");

}
if(keypress=="40"){
    car2down();
    console.log("down");

}
if(keypress=="37"){
    car2left();
    console.log("left");

}
if(keypress=="39"){
    car2right();
    console.log("right");

}
}function up(){
    if(cary>=0){
        cary=cary-10;
        uploadbackground();
        uploadcar();
    }
}
function down(){
    if(cary<=500){
        cary=cary+10;
        uploadbackground();
        uploadcar();
    }
}
function left(){
    if(carx>=0){
        carx=carx-10;
        uploadbackground();
        uploadcar();
    }
}
function right(){
    if(carx<=700){
        carx=carx+10;
        uploadbackground();
        uploadcar();
    }
}