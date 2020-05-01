var colors=["rgb(255, 0, 0)","rgb(0, 255, 0)",
"rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(255, 0, 255)",
"rgb(, 255, 255)"];

var square=document.querySelectorAll(".square");
var pickedcolor=colors[3];
var colordisplay=document.querySelector(".colordisplay");
var container_one=document.querySelector(".container-one");

colordisplay.textContent=colors[3];

for(var i=0;i<colors.length;i++){
    square[i].style.background=colors[i];
    square[i].addEventListener("click",function(){
        var clickedcolor=this.style.background;
        if(clickedcolor===pickedcolor){
            allcolor(clickedcolor);
        }
        else{
            this.style.background="white";
        }
    });
}

function allcolor(clickedcolor){
    for(var i=0;i<square.length;i++){
        square[i].style.background=clickedcolor;
        container_one.style.background=clickedcolor;
    }
}