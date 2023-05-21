
const btn = document.querySelector("button");
const text = document.querySelector("h3");
const box = document.querySelector(".box");
const testDiv=document.querySelector('.testDiv')



btn.addEventListener("click",moveBtn);


function moveBtn() {

    let rotateX=Math.ceil(Math.random()*(document.body.clientWidth))
    let rotateY=Math.ceil(Math.random()*(document.body.clientHeight))

    let red=Math.ceil(Math.random()*(255))
    let green=Math.ceil(Math.random()*(255))
    let blue=Math.ceil(Math.random()*(255))

    let mydiv = document.createElement("div");
  


  
  mydiv.classList='string'

  mydiv.style.backgroundColor =`rgb(${red},${green},${blue})`;
  mydiv.style.transform=`translate(${rotateX}px,${rotateY}px)`
  
  box.prepend(mydiv);  
  
  mydiv.addEventListener('click',()=>{
    mydiv.remove()
  })
  
}









// testDiv.style.transform=`translate(${rotateX}px,${rotateY}px)`;