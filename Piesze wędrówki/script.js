const views=[
    {
    "src": "3.jpg"
},
{
    "src": "4.jpg"
},
{
    "src": "5.jpg" 
}
];

console.log(views);

function displayViews(index){
const imgFild=document.querySelector(".content");
console.log(imgFild);
imgFild.innerHTML="";

const img=document.createElement("img");
img.src="img/"+views[index].src;
imgFild.append(img);
console.log(img);
}
displayViews(0);

const leftArr=document.querySelector(".left");
leftArr.onclick=()=>{changeSlide("left")};

const rightArr=document.querySelector(".right");
rightArr.onclick=()=>{changeSlide("right")};

let currentSlide=0;
function changeSlide(direction){
    if(direction=="left"){
        currentSlide--;
        if(currentSlide<0){
            currentSlide=views.length-1;
        }
    }else{
        currentSlide++;
        if(currentSlide>views.length-1){
            currentSlide=0;   
        }
        }
        console.log(currentSlide);
        displayViews(currentSlide);
    }
    