let cell = []
let first = 1
let JZ=0
let turn = 1
let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtn")
let btnLang = document.getElementById("btnLang")
let span = document.getElementsByClassName("close")[0]
let information1=document.querySelector(".information1")
let information2=document.querySelector(".information2")
let information3=document.querySelector(".information3")
let information4=document.querySelector(".information4")
let rules = document.querySelector(".rules")
let start = document.querySelector(".footer__start")
let author = document.querySelector(".footer__author")
let timer1=document.querySelector(".timer1")
let timer2=document.querySelector(".timer2")

let time1 = 0;
let time2 = 0;

information1.style.display = "flex"

const body = document.querySelector("body")
const container = document.querySelector(".container")
let isRu = true

btnLang.onclick = function (){
start.style.display = "none"
author.style.display = "none"
   if(isRu==false){
   isRu = true
information1.style.display = "none"
information2.style.display = "none"
information3.style.display = "none"
information4.style.display = "none"
information1=document.querySelector(".information1")
information2=document.querySelector(".information2")
information3=document.querySelector(".information3")
information4=document.querySelector(".information4")
information1.style.display = "flex"
btn.style.display = "none"
rules.style.display = "none"
btn = document.getElementById("myBtn")
rules = document.querySelector(".rules")
btn.style.display = "inline"
rules.style.display = "inline"
btn.onclick = function (){
   modal.style.display = "block"
}
start = document.querySelector(".footer__start")
author = document.querySelector(".footer__author")
start.style.display = "inline"
author.style.display = "inline"
   }
   else{
      isRu=false
information1.style.display = "none"
information2.style.display = "none"
information3.style.display = "none"
information4.style.display = "none"
information1=document.querySelector(".information1eng")
information2=document.querySelector(".information2eng")
information3=document.querySelector(".information3eng")
information4=document.querySelector(".information4eng")
information1.style.display = "flex"
btn.style.display = "none"
rules.style.display = "none"
btn = document.getElementById("myBtnEng")
rules = document.querySelector(".rulesEng")
btn.style.display = "inline"
rules.style.display = "inline"
btn.onclick = function (){
   modal.style.display = "block"
}

start = document.querySelector(".footer__startEng")
author = document.querySelector(".footer__authorEng")
start.style.display = "inline"
author.style.display = "inline"
   }
}


let times1
let times2

 function Times1() {
   times1 = setInterval(function(){
      ++time1;
      timer1.innerHTML = time1;
      console.log(time1)
   }, 1000);
 }
 function Times2() {
   times2 = setInterval(function(){
      ++time2;
      timer2.innerHTML = time2;
      console.log(time2)
   }, 1000);
 }

btn.onclick = function (){
   modal.style.display = "block"
}
span.onclick = function (){
   modal.style.display = "none"
}
window.onclick = function(event){
   if(event.target==modal){
      modal.style.display = "none"
   }
}

const row1 = document.createElement("div")
const row2 = document.createElement("div")
const row3 = document.createElement("div")
const row4 = document.createElement("div")
row1.classList.add("row");
row2.classList.add("row");
row3.classList.add("row");
row4.classList.add("row");
container.appendChild(row1)
container.appendChild(row2)
container.appendChild(row3)
container.appendChild(row4)

let fishkas1 = []
let fishkas2 = []

 
for(i=0; i<8; i++){
const fishka = document.createElement("div")
fishka.style.top = (`${30*i+200}px`)
fishka.style.left = (`${30*i+200}px`)
fishkas1.push(fishka)  
//fishkas1[length].style.backgroundColor = "red"
//fishkas1[length].style.boxShadow = `0 0 2px red, 0 0 10px red`
fishka.classList.add("fishka1")
body.appendChild(fishka)
}
for(i=0; i<8; i++){
   const fishka = document.createElement("div")
   fishka.style.top = (`${30*i+200}px`)
   fishka.style.right = (`${30*i+200}px`)
   fishkas2.push(fishka)  
   fishka.classList.add("fishka2")
   body.appendChild(fishka)
   }

let d = -1
let d2 = -1

fishkas2[0].style.backgroundColor = "Cyan"
fishkas2[0].style.boxShadow = `0 0 2px Cyan, 0 0 10px Cyan`
fishkas2[0].style.border= "5px solid Blue"

function delete1(){
   clearInterval(times1)
   Times2()
   d++ 
   information2.style.display = "none" 
   information1.style.display = "flex"
   for(i=0; i<8; i++){
      if(d==i){
         fishkas1[i].remove()
         fishkas2[i+1].style.backgroundColor = "Cyan"
         fishkas2[i+1].style.boxShadow = `0 0 2px Cyan, 0 0 10px Cyan`
         fishkas2[i+1].style.border= "5px solid Blue"
      } 
   }
}

function delete2(){
   clearInterval(times2)
   Times1();
   d2++
   information1.style.display = "none" 
   information2.style.display = "flex" 
   for(i=0; i<8; i++){
      if(d2==i){
         fishkas2[i].remove()
         fishkas1[i].style.backgroundColor = "DeepPink"
         fishkas1[i].style.boxShadow = `0 0 2px DeepPink, 0 0 10px DeepPink`
         fishkas1[i].style.border= "5px solid MediumVioletRed"
      } 
   } 
}

let j = []
for(i=0;i<16;i++){
j.push(1)
}

  const array = [] 

  for(i=0;i<=15;i++){    
    array.push(i)
 }
 for(let countCycles=0;countCycles<=3;countCycles++){
    let finish = array.splice(Math.random()*array.length,1)[0]
    //console.log(finish)
    cell[countCycles] = document.createElement("div")
    //newElement.innerHTML = cell[countCycles]
    cell[countCycles].classList.add(`newElement${finish}`);
    row1.appendChild(cell[countCycles])
 }
 for(let countCycles=4;countCycles<=7;countCycles++){
    let finish = array.splice(Math.random()*array.length,1)[0]
   // console.log(finish)
    cell[countCycles] = document.createElement("div")
    //newElement.innerHTML = cell[countCycles]
    cell[countCycles].classList.add(`newElement${finish}`);
    row2.appendChild(cell[countCycles])
 }
 for(let countCycles=8;countCycles<=11;countCycles++){
    let finish = array.splice(Math.random()*array.length,1)[0]
    //console.log(finish)
    cell[countCycles] = document.createElement("div")
    //newElement.innerHTML = cell[countCycles]
    cell[countCycles].classList.add(`newElement${finish}`);
    row3.appendChild(cell[countCycles])
 }
 for(let countCycles=12;countCycles<=15;countCycles++){
    let finish = array.splice(Math.random()*array.length,1)[0]
    //console.log(finish)
    cell[countCycles] = document.createElement("div")
    //newElement.innerHTML = cell[countCycles]
    cell[countCycles].classList.add(`newElement${finish}`);
    row4.appendChild(cell[countCycles])
 }

let jpg = []
for(i=0;i<16;i++){
   jpg.push(document.querySelector(`.newElement${i}`))

}
 let possibility = [jpg[0], jpg[1], jpg[2], jpg[3], jpg[4], jpg[5], jpg[6], jpg[7], jpg[8], jpg[9], jpg[10], jpg[11], jpg[12], jpg[13], jpg[14], jpg[15]]

for(i=0; i<16; i++){
cell[i].addEventListener("click", firstTurn0)
}
for(i=5; i<=6; i++){
cell[i].addEventListener("click", firstTurn1)
}
for(i=9; i<=10; i++){
cell[i].addEventListener("click", firstTurn1)
}
function firstTurn0(){
if(first==1){
JZ=0
}
}
function firstTurn1(){
if(first==1){
JZ=1
}
}

   jpg[0].addEventListener("click", show0)
   function show0(){
      if(j[1]==1 || j[2]==1 || j[3]==1 || j[4]==1 || j[8]==1 || j[12]==1){
      let check = jpg[0].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[0] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      
      if (turn % 2 == 0){
         jpg[0].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[0].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
         if(isRu==true)          if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
         else alert("Your move doesn't follow the rules")
      }
   }}


   jpg[1].addEventListener("click", show1)
   function show1(){
      if(j[0]==1 || j[2]==1 || j[3]==1 || j[5]==1 || j[9]==1 || j[13]==1){
      let check = jpg[1].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[1] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[1].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[1].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
         if(isRu==true)          if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
         else alert("Your move doesn't follow the rules")
      }
   }}


   jpg[2].addEventListener("click", show2)
   function show2(){
      if(j[0]==1 || j[1]==1 || j[3]==1 || j[6]==1 || j[10]==1 || j[14]==1){
      let check = jpg[2].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[2] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[2].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[2].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
         if(isRu==true)          if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[3].addEventListener("click", show3)
   function show3(){
      if(j[0]==1 || j[1]==1 || j[2]==1 || j[7]==1 || j[11]==1 || j[15]==1){
      let check = jpg[3].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[3] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[3].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[3].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[4].addEventListener("click", show4)
   function show4(){
      if(j[5]==1 || j[6]==1 || j[7]==1 || j[0]==1 || j[8]==1 || j[12]==1){
      let check = jpg[4].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[4] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[4].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[4].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

    jpg[5].addEventListener("click", show5)
   function show5(){
      if(j[4]==1 || j[6]==1 || j[7]==1 || j[1]==1 || j[9]==1 || j[13]==1){
      let check = jpg[5].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[5] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[5].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[5].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[6].addEventListener("click", show6)
   function show6(){
      if(j[4]==1 || j[5]==1 || j[7]==1 || j[2]==1 || j[10]==1 || j[14]==1){
      let check = jpg[6].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[6] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[6].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[6].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[7].addEventListener("click", show7)
   function show7(){
      if(j[4]==1 || j[5]==1 || j[6]==1 || j[3]==1 || j[11]==1 || j[15]==1){
      let check = jpg[7].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[7] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[7].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[7].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[8].addEventListener("click", show8)
   function show8(){
      if(j[9]==1 || j[10]==1 || j[11]==1 || j[0]==1 || j[4]==1 || j[12]==1){
      let check = jpg[8].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[8] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[8].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[8].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[9].addEventListener("click", show9)
   function show9(){
      if(j[8]==1 || j[10]==1 || j[11]==1 || j[1]==1 || j[5]==1 || j[13]==1){
      let check = jpg[9].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[9] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[9].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[9].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

    jpg[10].addEventListener("click", show10)
   function show10(){
      if(j[8]==1 || j[9]==1 || j[11]==1 || j[2]==1 || j[6]==1 || j[14]==1){
      let check = jpg[10].classList
     
     

      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[10] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[10].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[10].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[11].addEventListener("click", show11)
   function show11(){
      if(j[8]==1 || j[9]==1 || j[10]==1 || j[3]==1 || j[7]==1 || j[15]==1){
      let check = jpg[11].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      obnul()
      j[11] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[11].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[11].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[12].addEventListener("click", show12)
   function show12(){
      if(j[13]==1 || j[14]==1 || j[15]==1 || j[0]==1 || j[4]==1 || j[8]==1){
      let check = jpg[12].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         let o = document.createElement("div")
         obnul()
      j[12] = 1
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)

      if (turn % 2 == 0){
         jpg[12].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[12].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[13].addEventListener("click", show13)
   function show13(){
      if(j[12]==1 || j[14]==1 || j[15]==1 || j[1]==1 || j[5]==1 || j[9]==1){
      let check = jpg[13].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         let o = document.createElement("div")
         obnul()
         j[13] = 1
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg[13].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[13].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[14].addEventListener("click", show14)
   function show14(){
      if(j[12]==1 || j[13]==1 || j[15]==1 || j[2]==1 || j[6]==1 || j[10]==1){
      let check = jpg[14].classList
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         obnul()
         j[14] = 1
         let o = document.createElement("div")
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg[14].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[14].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   jpg[15].addEventListener("click", show15)
   function show15(){
      if(j[12]==1 || j[13]==1 || j[14]==1 || j[3]==1 || j[7]==1 || j[11]==1){
      let check = jpg[15].classList  
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         obnul()
      j[15] = 1
         let o = document.createElement("div")
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg[15].classList.add("click1pl")
         turn++
         delete1()
         checkFinish()
         }
         else {         
         jpg[15].classList.add("click2pl")
         turn++
         delete2()
         checkFinish()
         }}
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }}

   

function obnul(){
   for(i=0;i<16; i++){
   j.pop()
}
for(i=0;i<16; i++){
   j.unshift(0)
   }
}

let c = [] 

for(i=3;i<19;i++){
   c.push(i)  
}

let checkClass = []

function checkFinish(){
   for(i=0;i<16; i++){
      checkClass[i] = cell[i].classList
      if (checkClass[i][1] == "click1pl"){
         c[i] = 1
      }
      else if (checkClass[i][1] == "click2pl"){
         c[i] = 2
      }
   }  
   first=0
   finishend()
}

function finishend() {
   if(c[0]==c[1]&&c[1]==c[2]&&c[2]==c[3] || c[4]==c[5]&&c[5]==c[6]&&c[6]==c[7] || c[8]==c[9]&&c[9]==c[10]&&c[10]==c[11] || c[12]==c[13]&&c[13]==c[14]&&c[14]==c[15] || c[0]==c[4]&&c[4]==c[8]&&c[8]==c[12] || c[1]==c[5]&c[5]==c[9]&&c[9]==c[13] || c[2]==c[6]&&c[6]==c[10]&&c[10]==c[14] || c[3]==c[7]&&c[7]==c[11]&&c[11]==c[15] || c[3]==c[6]&&c[6]==c[9]&&c[9]==c[12] || c[0]==c[5]&&c[5]==c[10]&&c[10]==c[15] || c[0]==c[1]&&c[1]==c[4]&&c[4]==c[5] || c[1]==c[2]&&c[2]==c[5]&&c[5]==c[6] || c[2]==c[3]&&c[3]==c[6]&&c[6]==c[7] || c[4]==c[5]&&c[5]==c[8]&&c[8]==c[9] || c[5]==c[6]&&c[6]==c[9]&&c[9]==c[10] || c[6]==c[7]&&c[7]==c[10]&&c[10]==c[11] || c[8]==c[9]&&c[9]==c[12]&&c[12]==c[13] || c[9]==c[10]&&c[10]==c[13]&&c[13]==c[14] || c[10]==c[11]&&c[11]==c[14]&&c[14]==c[15])
   {
      if(c[0]==c[1]&&c[1]==c[2]&&c[2]==c[3]&&c[0]==1 || c[4]==c[5]&&c[5]==c[6]&&c[6]==c[7]&&c[4]==1 || c[8]==c[9]&&c[9]==c[10]&&c[10]==c[11]&&c[8]==1 || c[12]==c[13]&&c[13]==c[14]&&c[14]==c[15]&&c[12]==1 || c[0]==c[4]&&c[4]==c[8]&&c[8]==c[12]&&c[0]==1 || c[1]==c[5]&c[5]==c[9]&&c[9]==c[13]&&c[1]==1 || c[2]==c[6]&&c[6]==c[10]&&c[10]==c[14]&&c[2]==1 || c[3]==c[7]&&c[7]==c[11]&&c[11]==c[15]&&c[3]==1 || c[3]==c[6]&&c[6]==c[9]&&c[9]==c[12]&&c[3]==1 || c[0]==c[5]&&c[5]==c[10]&&c[10]==c[15]&&c[0]==1 || c[0]==c[1]&&c[1]==c[4]&&c[4]==c[5]&&c[0]==1 || c[1]==c[2]&&c[2]==c[5]&&c[5]==c[6]&&c[1]==1 || c[2]==c[3]&&c[3]==c[6]&&c[6]==c[7]&&c[2]==1 || c[4]==c[5]&&c[5]==c[8]&&c[8]==c[9]&&c[4]==1 || c[5]==c[6]&&c[6]==c[9]&&c[9]==c[10]&&c[5]==1 || c[6]==c[7]&&c[7]==c[10]&&c[10]==c[11]&&c[6]==1 || c[8]==c[9]&&c[9]==c[12]&&c[12]==c[13]&&c[8]==1 || c[9]==c[10]&&c[10]==c[13]&&c[13]==c[14]&&c[9]==1 || c[10]==c[11]&&c[11]==c[14]&&c[14]==c[15]&&c[10]==1){
         if(isRu==true){
            alert("Выиграл второй игрок(Фиолетовые фишки)")
         }
         if(isRu==false){
            alert("Second player wins(Purple chips)")
         }
        information1.style.display = "none" 
      information2.style.display = "none" 
      information4.style.display = "flex" 
      }
      else{
         if(isRu==true){
            alert("Выиграл первый игрок(Золотые фишки)")
         }
         if(isRu==false){
            alert("First player wins(Golden chips)")
         }
        information1.style.display = "none" 
      information2.style.display = "none" 
        information3.style.display = "flex"
      } 
      obnul() 
   }   
}
