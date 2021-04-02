const views=[
    {
    "title": "Miasto o zachodzie słońca",
    "src": "1.jpg",
},
{
    "title": "Widok miasta z góry",
    "src": "2.jpg",
},
{
    "title": "Wieżowce",
    "src": "3.jpg", 
}
];
console.log(views);

function displayViews(index){
const imgFild=document.querySelector(".content");
console.log(imgFild);
imgFild.innerHTML="";

const titleFild=document.querySelector("h2");
console.log(titleFild);
titleFild.innerHTML=views[index].title;

const img=document.createElement("img");
img.src="img/"+ views[index].src;
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
    





