// let imgCopy;

// let allImg=document.querySelectorAll('img');

// let sec=document.querySelectorAll('section')
// allImg.forEach((itm) =>{

//     console.log(sec);
//     itm.addEventListener('mouseenter' , (e) =>{

//         imgCopy=itm.cloneNode(true);
// 
//         let r=document.sec.appendChild(imgCopy);

//         let t=imgCopy.classList.add('popup2')

//         imgCopy.style.left=e.x + 10 + 'px';

//         imgCopy.style.top=e.y + 10 + 'px';

//     console.log(r);

    // });
    
    // itm.addEventListener('mouseleave' , ()=>{
    //     imgCopy.remove()
    // })

    // itm.addEventListener('mousemove' , (e)=>{
    //     imgCopy.style.left=e.x + 10 + 'px'
    //     imgCopy.style.top=e.y + 10 + 'px'
    // })
// })

let nav=document.querySelector("nav");
let link1=document.querySelector(".nav-Link ul #nav1");
let link2=document.querySelector(".nav-Link ul #nav2");
let link3=document.querySelector(".nav-Link ul #nav3");
let link4=document.querySelector(".nav-Link ul #nav4");
let link5=document.querySelector(".nav-Link ul #nav5");

let span1=document.querySelector(".span1")
let span2=document.querySelector(".span2")
let span3=document.querySelector(".span3")
let navLink=document.querySelector(".nav-Link")
let subhover=document.querySelector(".sub .links")

// console.log(subhover);
function click1(){
    span1.classList.toggle("spanon1")
    span2.classList.toggle("spanon2")
    span3.classList.toggle("spanon3")
    navLink.classList.toggle("navLink")
}
function liClick(){
    navLink.classList.toggle("navLink")
    span1.classList.toggle("spanon1")
    span2.classList.toggle("spanon2")
    span3.classList.toggle("spanon3")
}
function onclickhover(){
    subhover.classList.toggle("subhover");
}

let counter=0;
let lorem = " Let's Explore Your Awesome City";

let count1=setInterval(()=>{
    let myBroo=document.querySelector("#text h1");

    myBroo.innerText = lorem.substring(0 ,counter ) + "|"
    counter++

    if(counter > lorem.length){
        // clearInterval(count1)
        counter =0
    }
}, 200)

let butt=document.querySelector(".cars")

function button(){
    butt.value= "Search "
}

let opPop=document.getElementById("popup")
function openPopup(){
    opPop.classList.toggle("openPopup")
}
function closePopup(){
    opPop.classList.toggle("openPopup")
}

let nams=document.querySelectorAll(".user .bad");
let box=document.querySelector("#break-2")
let started=false;

function startCount(el){
    let goal=el.dataset.goal;

    let count=setInterval(() =>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    } , 3000 / goal)
}

window.onscroll = function (){

    // nav////////////////////////////////////
    if(this.scrollY >= 100){
        nav.classList.add("activenav")
        link1.classList.add("activenavLink")
        link2.classList.add("activenavLink")
        link3.classList.add("activenavLink")
        link4.classList.add("activenavLink")
        link5.classList.add("activenavLink")
    }else{
        nav.classList.remove("activenav")
        link1.classList.remove("activenavLink")
        link2.classList.remove("activenavLink")
        link3.classList.remove("activenavLink")
        link4.classList.remove("activenavLink")
        link5.classList.remove("activenavLink")
    }


    if(window.scrollY >= box.offsetTop){
        if(!started){
        nams.forEach((bad) =>startCount(bad))

        }
        started = true
    }
}

// breack/////////////////////////
let imgClick=document.getElementById("imgClick")
let inputClick=document.getElementById("inputClick")

inputClick.onchange =function(){
    imgClick.src = URL.createObjectURL(inputClick.files[0])
console.log(imgClick);

}