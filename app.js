
//const cell = document.querySelectorAll(".cell")
let cell = []
let first = 1
let JZ=0

const body = document.querySelector("body")
const container = document.querySelector(".container")
let turn = 1

const row1 = document.createElement("div")
const row2 = document.createElement("div")
const row3 = document.createElement("div")
const row4 = document.createElement("div")
row1.classList.add("row1");
row2.classList.add("row2");
row3.classList.add("row3");
row4.classList.add("row4");
container.appendChild(row1)
container.appendChild(row2)
container.appendChild(row3)
container.appendChild(row4)
 

/*let fishka1 = document.querySelectorAll(".fishka1")
const result = [];
for (const node of fishka1) {
  result.push(node);
}
console.log(result)*/
const fishka11 = document.createElement("div")
fishka11.classList.add("fishka11");
body.appendChild(fishka11)
const fishka12 = document.createElement("div")
fishka12.classList.add("fishka12");
body.appendChild(fishka12)
const fishka13 = document.createElement("div")
fishka13.classList.add("fishka13");
body.appendChild(fishka13)
const fishka14 = document.createElement("div")
fishka14.classList.add("fishka14");
body.appendChild(fishka14)
const fishka15 = document.createElement("div")
fishka15.classList.add("fishka15");
body.appendChild(fishka15)
const fishka16 = document.createElement("div")
fishka16.classList.add("fishka16");
body.appendChild(fishka16)
const fishka17 = document.createElement("div")
fishka17.classList.add("fishka17");
body.appendChild(fishka17)
const fishka18 = document.createElement("div")
fishka18.classList.add("fishka18");
body.appendChild(fishka18)
const fishka21 = document.createElement("div")
fishka21.classList.add("fishka21");
body.appendChild(fishka21)
const fishka22 = document.createElement("div")
fishka22.classList.add("fishka22");
body.appendChild(fishka22)
const fishka23 = document.createElement("div")
fishka23.classList.add("fishka23");
body.appendChild(fishka23)
const fishka24 = document.createElement("div")
fishka24.classList.add("fishka24");
body.appendChild(fishka24)
const fishka25 = document.createElement("div")
fishka25.classList.add("fishka25");
body.appendChild(fishka25)
const fishka26 = document.createElement("div")
fishka26.classList.add("fishka26");
body.appendChild(fishka26)
const fishka27 = document.createElement("div")
fishka27.classList.add("fishka27");
body.appendChild(fishka27)
const fishka28 = document.createElement("div")
fishka28.classList.add("fishka28");
body.appendChild(fishka28)

let d = 0
let d2 = 0

function delete1(){
   d++
   if(d==1){
      fishka11.remove()
   }
   if(d==2){
      fishka12.remove()
   }
   if(d==3){
      fishka13.remove()
   }
   if(d==4){
      fishka14.remove()
   }
   if(d==5){
      fishka15.remove()
   }
   if(d==6){
      fishka16.remove()
   }
   if(d==7){
      fishka17.remove()
   }
   if(d==8){
      fishka18.remove()
   }
   
}

function delete2(){
   d2++
   if(d2==1){
      fishka21.remove()
   }
   if(d2==2){
      fishka22.remove()
   }
   if(d2==3){
      fishka23.remove()
   }
   if(d2==4){
      fishka24.remove()
   }
   if(d2==5){
      fishka25.remove()
   }
   if(d2==6){
      fishka26.remove()
   }
   if(d2==7){
      fishka27.remove()
   }
   if(d2==8){
      fishka28.remove()
   }
   
}


//var img = new Image();   // Создаёт новый элемент изображения
//img.src = "A1.jpg";
let j0 = 1
let j1 = 1
let j2 = 1
let j3 = 1
let j4 = 1
let j5 = 1
let j6 = 1
let j7 = 1
let j8 = 1
let j9 = 1
let j10 = 1
let j11 = 1
let j12 = 1
let j13 = 1
let j14 = 1
let j15 = 1



  /*for ( let i = 0; i < 16; i++) {
    cell[i] = i
    console.log(cell)
  }  */ 
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


 const jpg0 = document.querySelector(".newElement0")
 //console.log(jpg1)
 const jpg1 = document.querySelector(".newElement1")
 //console.log(jpg2)
 const jpg2 = document.querySelector(".newElement2")
 //console.log(jpg3)
 const jpg3 = document.querySelector(".newElement3")
 //console.log(jpg4)
 const jpg4 = document.querySelector(".newElement4")
 //console.log(jpg5)
 const jpg5 = document.querySelector(".newElement5")
 //console.log(jpg6)
 const jpg6 = document.querySelector(".newElement6")
 //console.log(jpg7)
 const jpg7 = document.querySelector(".newElement7")
 //console.log(jpg8)
 const jpg8 = document.querySelector(".newElement8")
 //console.log(jpg9)
 const jpg9 = document.querySelector(".newElement9")
 //console.log(jpg10)
 const jpg10 = document.querySelector(".newElement10")
 //console.log(jpg11)
 const jpg11 = document.querySelector(".newElement11")
 //console.log(jpg12)
 const jpg12 = document.querySelector(".newElement12")
 //console.log(jpg13)
 const jpg13 = document.querySelector(".newElement13")
 //console.log(jpg14)
 const jpg14 = document.querySelector(".newElement14")
 //console.log(jpg15)
 const jpg15 = document.querySelector(".newElement15")
 //console.log(jpg16)

 let possibility = [jpg0, jpg1, jpg2, jpg3, jpg4, jpg5, jpg6, jpg7, jpg8, jpg9, jpg10, jpg11, jpg12, jpg13, jpg14, jpg15]

 /*for(i=0; i<15; i++){
 if(cell[0]=jpg`${i}`){
   console.log("dsasdasd")
 }
}*/
cell[0].addEventListener("click", firstTurn0)
cell[1].addEventListener("click", firstTurn0)
cell[2].addEventListener("click", firstTurn0)
cell[3].addEventListener("click", firstTurn0)
cell[4].addEventListener("click", firstTurn0)
cell[5].addEventListener("click", firstTurn1)
cell[6].addEventListener("click", firstTurn1)
cell[7].addEventListener("click", firstTurn0)
cell[8].addEventListener("click", firstTurn0)
cell[9].addEventListener("click", firstTurn1)
cell[10].addEventListener("click", firstTurn1)
cell[11].addEventListener("click", firstTurn0)
cell[12].addEventListener("click", firstTurn0)
cell[13].addEventListener("click", firstTurn0)
cell[14].addEventListener("click", firstTurn0)
cell[15].addEventListener("click", firstTurn0)

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

   jpg0.addEventListener("click", show0)
   function show0(){
      if(j1==1 || j2==1 || j3==1 || j4==1 || j8==1 || j12==1){
      let check = jpg0.classList
      
     
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg0)
      obnul()
      j0 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      
      if (turn % 2 == 0){
         jpg0.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg0.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}


   jpg1.addEventListener("click", show1)
   function show1(){
      if(j0==1 || j2==1 || j3==1 || j5==1 || j9==1 || j13==1){
      let check = jpg1.classList
      
     
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg1)
      obnul()
      j1 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg1.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg1.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}


   jpg2.addEventListener("click", show2)
   function show2(){
      if(j0==1 || j1==1 || j3==1 || j6==1 || j10==1 || j14==1){
      let check = jpg2.classList
    
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg2)
      obnul()
      j2 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg2.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg2.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg3.addEventListener("click", show3)
   function show3(){
      if(j0==1 || j1==1 || j2==1 || j7==1 || j11==1 || j15==1){
      let check = jpg3.classList
      
     
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg3)
      obnul()
      j3 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg3.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg3.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg4.addEventListener("click", show4)
   function show4(){
      if(j5==1 || j6==1 || j7==1 || j0==1 || j8==1 || j12==1){
      let check = jpg4.classList
   
     
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg4)
      obnul()
      j4 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg4.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg4.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

    jpg5.addEventListener("click", show5)
   function show5(){
      if(j4==1 || j6==1 || j7==1 || j1==1 || j9==1 || j13==1){
      let check = jpg5.classList
      
      
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg4)
      obnul()
      j5 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg5.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg5.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg6.addEventListener("click", show6)
   function show6(){
      if(j4==1 || j5==1 || j7==1 || j2==1 || j10==1 || j14==1){
      let check = jpg6.classList
      
  
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg4)
      obnul()
      j6 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg6.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg6.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg7.addEventListener("click", show7)
   function show7(){
      if(j4==1 || j5==1 || j6==1 || j3==1 || j11==1 || j15==1){
      let check = jpg7.classList
     
     
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg4)
      obnul()
      j7 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg7.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg7.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg8.addEventListener("click", show8)
   function show8(){
      if(j9==1 || j10==1 || j11==1 || j0==1 || j4==1 || j12==1){
      let check = jpg8.classList
     
    
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg4)
      obnul()
      j8 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg8.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg8.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg9.addEventListener("click", show9)
   function show9(){
      if(j8==1 || j10==1 || j11==1 || j1==1 || j5==1 || j13==1){
      let check = jpg9.classList
      
      
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg4)
      obnul()
      j9 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg9.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg9.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

    jpg10.addEventListener("click", show10)
   function show10(){
      if(j8==1 || j9==1 || j11==1 || j2==1 || j6==1 || j14==1){
      let check = jpg10.classList
     
     
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      //console.log(jpg4)
      obnul()
      j10 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg10.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg10.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg11.addEventListener("click", show11)
   function show11(){
      if(j8==1 || j9==1 || j10==1 || j3==1 || j7==1 || j15==1){
      let check = jpg11.classList
      
      
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
      console.log(jpg4)
      obnul()
      j11 = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg11.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg11.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg12.addEventListener("click", show12)
   function show12(){
      if(j13==1 || j14==1 || j15==1 || j0==1 || j4==1 || j8==1){
      let check = jpg12.classList
     
      
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         let o = document.createElement("div")
         obnul()
      j12 = 1
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)

      if (turn % 2 == 0){
         jpg12.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg12.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg13.addEventListener("click", show13)
   function show13(){
      if(j12==1 || j14==1 || j15==1 || j1==1 || j5==1 || j9==1){
      let check = jpg13.classList
     
    
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         let o = document.createElement("div")
         obnul()
         j13 = 1
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg13.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg13.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg14.addEventListener("click", show14)
   function show14(){
      if(j12==1 || j13==1 || j15==1 || j2==1 || j6==1 || j10==1){
      let check = jpg14.classList
      
     
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         obnul()
         j14 = 1
         let o = document.createElement("div")
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg14.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg14.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   jpg15.addEventListener("click", show15)
   function show15(){
      if(j12==1 || j13==1 || j14==1 || j3==1 || j7==1 || j11==1){
      let check = jpg15.classList
    
      
      //jpg0.removeEventListener("click", show0)
      if(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1){
         obnul()
      j15 = 1
         let o = document.createElement("div")
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg15.classList.add("click1pl")
         turn++
         checkFinish()
         delete1()
         }
         else {         
         jpg15.classList.add("click2pl")
         turn++
         checkFinish()
         delete2()
         }}
      else{
         alert("Not following the rules, be careful")
      }
   }}

   

   function obnul(){
      j0 = 0
      j1 = 0
      j2 = 0
      j3 = 0
      j4 = 0
      j5 = 0
      j6 = 0
      j7 = 0
      j8 = 0
      j9 = 0
      j10 = 0
      j11 = 0
      j12 = 0
      j13 = 0
      j14 = 0
      j15 = 0
   }
   let c0 = 321
   let c1 = 565 
   let c2  = 89
   let c3  = 90
   let c4  = 2323
   let c5  = 4334
   let c6  = 56
   let c7  = 87
   let c8  = 3434
   let c9 = 45
   let c10  = 98
   let c11 = 9
   let c12 = 8
   let c13 = 7
   let c14 = 6
   let c15  = 5
  

function checkFinish(){

   let checkClass0 = cell[0].classList
   if (checkClass0[1] == "click1pl"){
      c0 = 1
   }
   else if (checkClass0[1] == "click2pl"){
      c0 = 2
   }
   
   let checkClass1 = cell[1].classList
   if (checkClass1[1] == "click1pl"){
      c1 = 1
   }
   else if (checkClass1[1] == "click2pl"){
      c1 = 2
   }

   let checkClass2 = cell[2].classList
   if (checkClass2[1] == "click1pl"){
      c2 = 1
   }
   else if (checkClass2[1] == "click2pl"){
      c2 = 2
   }

   let checkClass3 = cell[3].classList
   if (checkClass3[1] =="click1pl"){
      c3 = 1
   }
   else if (checkClass3[1] == "click2pl"){
      c3 = 2
   }

   let checkClass4 = cell[4].classList
   if (checkClass4[1] == "click1pl"){
      c4 = 1
   }
   else if (checkClass4[1] == "click2pl"){
      c4 = 2
   }

   let checkClass5 = cell[5].classList
   if (checkClass5[1] == "click1pl"){
      c5 = 1
   }
   else if (checkClass5[1] == "click2pl"){
      c5 = 2
   }

   let checkClass6 = cell[6].classList
   if (checkClass6[1] == "click1pl"){
      c6 = 1
   }
   else if (checkClass6[1] == "click2pl"){
      c6 = 2
   }

   let checkClass7 = cell[7].classList
   if (checkClass7[1] == "click1pl"){
      c7 = 1
   }
   else if (checkClass7[1] == "click2pl"){
      c7 = 2
   }

   let checkClass8 = cell[8].classList
   if (checkClass8[1] == "click1pl"){
      c8 = 1
   }
   else if (checkClass8[1] == "click2pl"){
      c8 = 2
   }

   let checkClass9 = cell[9].classList
   if (checkClass9[1] == "click1pl"){
      c9 = 1
   }
   else if (checkClass9[1] == "click2pl"){
      c9 = 2
   }

   let checkClass10 = cell[10].classList
   if (checkClass10[1] == "click1pl"){
      c10 = 1
   }
   else if (checkClass10[1] == "click2pl"){
      c10 = 2
   }

   let checkClass11 = cell[11].classList
   if (checkClass11[1] == "click1pl"){
      c11 = 1
   }
   else if (checkClass11[1] == "click2pl"){
      c11 = 2
   }

   let checkClass12 = cell[12].classList
   if (checkClass12[1] == "click1pl"){
      c12 = 1
   }
   else if (checkClass12[1] == "click2pl"){
      c12 = 2
   }

   let checkClass13 = cell[13].classList
   if (checkClass13[1] == "click1pl"){
      c13 = 1
   }
   else if (checkClass13[1] == "click2pl"){
      c13 = 2
   }

   let checkClass14 = cell[14].classList
   if (checkClass14[1] == "click1pl"){
      c14 = 1
   }
   else if (checkClass14[1] == "click2pl"){
      c14 = 2
   }

   let checkClass15 = cell[15].classList
   if (checkClass15[1] == "click1pl"){
      c15 = 1
   }
   else if (checkClass15[1] == "click2pl"){
      c15 = 2
   }

   first=0
   finishend()
}

function finishend() {
   if(c0==c1&&c1==c2&&c2==c3 || c4==c5&&c5==c6&&c6==c7 || c8==c9&&c9==c10&&c10==c11 || c12==c13&&c13==c14&&c14==c15 || c0==c4&&c4==c8&&c8==c12 || c1==c5&c5==c9&&c9==c13 || c2==c6&&c6==c10&&c10==c14 || c3==c7&&c7==c11&&c11==c15 || c3==c6&&c6==c9&&c9==c12 || c0==c5&&c5==c10&&c10==c15 || c0==c1&&c1==c4&&c4==c5 || c1==c2&&c2==c5&&c5==c6 || c2==c3&&c3==c6&&c6==c7 || c4==c5&&c5==c8&&c8==c9 || c5==c6&&c6==c9&&c9==c10 || c6==c7&&c7==c10&&c10==c11 || c8==c9&&c9==c12&&c12==c13 || c9==c10&&c10==c13&&c13==c14 || c10==c11&&c11==c14&&c14==c15)
   {
      if(c0==c1&&c1==c2&&c2==c3&&c0==1 || c4==c5&&c5==c6&&c6==c7&&c4==1 || c8==c9&&c9==c10&&c10==c11&&c8==1 || c12==c13&&c13==c14&&c14==c15&&c12==1 || c0==c4&&c4==c8&&c8==c12&&c0==1 || c1==c5&c5==c9&&c9==c13&&c1==1 || c2==c6&&c6==c10&&c10==c14&&c2==1 || c3==c7&&c7==c11&&c11==c15&&c3==1 || c3==c6&&c6==c9&&c9==c12&&c3==1 || c0==c5&&c5==c10&&c10==c15&&c0==1 || c0==c1&&c1==c4&&c4==c5&&c0==1 || c1==c2&&c2==c5&&c5==c6&&c1==1 || c2==c3&&c3==c6&&c6==c7&&c2==1 || c4==c5&&c5==c8&&c8==c9&&c4==1 || c5==c6&&c6==c9&&c9==c10&&c5==1 || c6==c7&&c7==c10&&c10==c11&&c6==1 || c8==c9&&c9==c12&&c12==c13&&c8==1 || c9==c10&&c10==c13&&c13==c14&&c9==1 || c10==c11&&c11==c14&&c14==c15&&c10==1){
        alert("выиграл второй игрок") 
      }
      if(c0==c1&&c1==c2&&c2==c3&&c0==2 || c4==c5&&c5==c6&&c6==c7&&c4==2 || c8==c9&&c9==c10&&c10==c11&&c8==2 || c12==c13&&c13==c14&&c14==c15&&c12==2 || c0==c4&&c4==c8&&c8==c12&&c0==2 || c1==c5&c5==c9&&c9==c13&&c1==2 || c2==c6&&c6==c10&&c10==c14&&c2==2 || c3==c7&&c7==c11&&c11==c15&&c3==2 || c3==c6&&c6==c9&&c9==c12&&c3==2 || c0==c5&&c5==c10&&c10==c15&&c0==2 || c0==c1&&c1==c4&&c4==c5&&c0==2 || c1==c2&&c2==c5&&c5==c6&&c1==2 || c2==c3&&c3==c6&&c6==c7&&c2==2 || c4==c5&&c5==c8&&c8==c9&&c4==2 || c5==c6&&c6==c9&&c9==c10&&c5==2 || c6==c7&&c7==c10&&c10==c11&&c6==2 || c8==c9&&c9==c12&&c12==c13&&c8==2 || c9==c10&&c10==c13&&c13==c14&&c9==2 || c10==c11&&c11==c14&&c14==c15&&c10==2){
        alert("выиграл первый игрок") 
      }
      
     
      
   }
   
}

/*0.1.2.3{строки
4.5.6.7
8.9.10.11
12.13.14.15}
0.4.8.12{столбики
1.5.9.13
2.6.10.14
3.7.11.15}
0.5.10.15{диагональ
3.6.9.12}
0.1.4.5{кубики
1.2.5.6
2.3.6.7
4.5.8.9
5.6.9.10
6.7.10.11
8.9.12.13
9.10.13.14
10.11.14.15}

if(check[0] == "newElement1"){
   possibility1 = [jpg0, jpg2, jpg3, jpg5, jpg9, jpg13]
   possibility1()
}
if(check[0] == "newElement2"){
   possibility2 = [jpg1, jpg0, jpg3, jpg6, jpg10, jpg14]
   possibility2()
}
if(check[0] == "newElement3"){
   possibility3 = [jpg1, jpg2, jpg0, jpg7, jpg11, jpg15]
   possibility3()
}
if(check[0] == "newElement4"){
   possibility4 = [jpg5, jpg6, jpg7, jpg0, jpg8, jpg12]
   possibility4()
}
if(check[0] == "newElement5"){
   possibility5 = [jpg4, jpg6, jpg7, jpg1, jpg9, jpg13]
   possibility5()
}
if(check[0] == "newElement6"){
   possibility6 = [jpg4, jpg5, jpg7, jpg2, jpg10, jpg14]
   possibility6()
}
if(check[0] == "newElement7"){
   possibility7 = [jpg4, jpg5, jpg6, jpg3, jpg11, jpg15]
   possibility7()
}
if(check[0] == "newElement8"){
   possibility8 = [jpg9, jpg10, jpg11, jpg0, jpg4, jpg12]
   possibility8()
}
if(check[0] == "newElement9"){
   possibility9 = [jpg8, jpg10, jpg11, jpg1, jpg5, jpg13]
   possibility9()
}
if(check[0] == "newElement10"){
   possibility10 = [jpg8, jpg9, jpg11, jpg2, jpg6, jpg14]
   possibility10()
}
if(check[0] == "newElement11"){
   possibility11 = [jpg8, jpg9, jpg10, jpg3, jpg7, jpg15]
   possibility11()
}
if(check[0] == "newElement12"){
   possibility12 = [jpg13, jpg14, jpg15, jpg0, jpg4, jpg8]
   possibility12()
}
if(check[0] == "newElement13"){
   possibility13 = [jpg12, jpg14, jpg15, jpg1, jpg5, jpg9]
   possibility13()
}
if(check[0] == "newElement14"){
   possibility14 = [jpg12, jpg13, jpg15, jpg2, jpg6, jpg10]
   possibility14()
}
if(check[0] == "newElement15"){
   possibility15 = [jpg12, jpg13, jpg14, jpg3, jpg7, jpg11]
   possibility15()
} */



//let is = true
//let pos = []
/*if(is = true){
possibility.forEach(utem => {
   utem.addEventListener('click', event => {
      console.log(utem)
      let rulesTurn = utem.classList
      is = false
      if(rulesTurn[0] == "newElement0") {   
         pos = [jpg1, jpg2, jpg3, jpg4, jpg8, jpg12] 
         possibility = []
         utem = "none"
         is = false
        console.log(pos)
         //createWeb()
      }
      if(rulesTurn[0] == "newElement1") {   
         pos = [jpg0, jpg2, jpg3, jpg5, jpg9, jpg13] 
         console.log(pos)
         is = false
        // createWeb()
      }  
       
   })
})
}
*/
/*main()
function main() {
   possibility.forEach(atem => {
      
      atem.addEventListener('click', event => {
         let check = atem.classList
         atem.removeEventListener
         //console.log(check)
         if(check[1] == "click1pl" || check[1] == "click2pl") {
         //alert("Нельзя ходить на чужую фишку")
         }
         else{
               
         //console.log(possibility)
            


               let tar = event.target 
               let o = document.createElement("div")
               o.classList.add(`${check[0]}`)
               o.classList.add("o")
               body.appendChild(o)
               
               if(check[0] == "newElement0"){
                  possibility0 = [jpg1, jpg2, jpg3, jpg4, jpg8, jpg12]
                  possibility0()
                  
               }
               if(check[0] == "newElement1"){
                  possibility1 = [jpg0, jpg2, jpg3, jpg5, jpg9, jpg13]
                  possibility1()
               }
               if(check[0] == "newElement2"){
                  possibility2 = [jpg1, jpg0, jpg3, jpg6, jpg10, jpg14]
                  possibility2()
               }
               if(check[0] == "newElement3"){
                  possibility3 = [jpg1, jpg2, jpg0, jpg7, jpg11, jpg15]
                  possibility3()
               }
               if(check[0] == "newElement4"){
                  possibility4 = [jpg5, jpg6, jpg7, jpg0, jpg8, jpg12]
                  possibility4()
               }
               if(check[0] == "newElement5"){
                  possibility5 = [jpg4, jpg6, jpg7, jpg1, jpg9, jpg13]
                  possibility5()
               }
               if(check[0] == "newElement6"){
                  possibility6 = [jpg4, jpg5, jpg7, jpg2, jpg10, jpg14]
                  possibility6()
               }
               if(check[0] == "newElement7"){
                  possibility7 = [jpg4, jpg5, jpg6, jpg3, jpg11, jpg15]
                  possibility7()
               }
               if(check[0] == "newElement8"){
                  possibility8 = [jpg9, jpg10, jpg11, jpg0, jpg4, jpg12]
                  possibility8()
               }
               if(check[0] == "newElement9"){
                  possibility9 = [jpg8, jpg10, jpg11, jpg1, jpg5, jpg13]
                  possibility9()
               }
               if(check[0] == "newElement10"){
                  possibility10 = [jpg8, jpg9, jpg11, jpg2, jpg6, jpg14]
                  possibility10()
               }
               if(check[0] == "newElement11"){
                  possibility11 = [jpg8, jpg9, jpg10, jpg3, jpg7, jpg15]
                  possibility11()
               }
               if(check[0] == "newElement12"){
                  possibility12 = [jpg13, jpg14, jpg15, jpg0, jpg4, jpg8]
                  possibility12()
               }
               if(check[0] == "newElement13"){
                  possibility13 = [jpg12, jpg14, jpg15, jpg1, jpg5, jpg9]
                  possibility13()
               }
               if(check[0] == "newElement14"){
                  possibility14 = [jpg12, jpg13, jpg15, jpg2, jpg6, jpg10]
                  possibility14()
               }
               if(check[0] == "newElement15"){
                  possibility15 = [jpg12, jpg13, jpg14, jpg3, jpg7, jpg11]
                  possibility15()
               } 

               if (turn % 2 == 0){
               tar.classList.add("click1pl")
               turn++
               
               
               }
               else {         
                  tar.classList.add("click2pl")
                  turn++
                   
                  }
              
               
                           //event.target.remove()   
         }           
      })
   })
} */
/*possibility.forEach(atem => {
      
   atem.addEventListener('click', event => {
      let check = atem.classList
      //console.log(check)
      if(check[1] == "click1pl" || check[1] == "click2pl") {
      alert("Нельзя ходить на чужую фишку")
      }
      else{
             let tar = event.target 
            let o = document.createElement("div")
            o.classList.add(`${check[0]}`)
            o.classList.add("o")
            body.appendChild(o)
            if (turn % 2 == 0){
            tar.classList.add("click1pl")
            turn++
            }
            else {         
               tar.classList.add("click2pl")
               turn++
               }
           
      }
                        //event.target.remove()              
   })
})*/
/*
function possibility0() {
possibility0.forEach(atem => {
      
      atem.addEventListener('click', event => {
         let check = atem.classList
         //console.log(check)
         if(check[1] == "click1pl" || check[1] == "click2pl") {
         //alert("Нельзя ходить на чужую фишку")
         }
         else{
               
         console.log(possibility)
                  
               let tar = event.target 
               let o = document.createElement("div")
               o.classList.add(`${check[0]}`)
               o.classList.add("o")
               body.appendChild(o)
               if (turn % 2 == 0){
               tar.classList.add("click1pl")
               turn++
               
               }
               else {         
                  tar.classList.add("click2pl")
                  turn++
                  tar.classList.add("click2pl")
                  turn++
                  if(check[0] == "newElement0"){
                     possibility0 = [jpg1, jpg2, jpg3, jpg4, jpg8, jpg12]
                     possibility0()
                  }
                  if(check[0] == "newElement1"){
                     possibility1 = [jpg0, jpg2, jpg3, jpg5, jpg9, jpg13]
                     possibility1()
                  }
                  if(check[0] == "newElement2"){
                     possibility2 = [jpg1, jpg0, jpg3, jpg6, jpg10, jpg14]
                     possibility2()
                  }
                  if(check[0] == "newElement3"){
                     possibility3 = [jpg1, jpg2, jpg0, jpg7, jpg11, jpg15]
                     possibility3()
                  }
                  if(check[0] == "newElement4"){
                     possibility4 = [jpg5, jpg6, jpg7, jpg0, jpg8, jpg12]
                     possibility4()
                  }
                  if(check[0] == "newElement5"){
                     possibility5 = [jpg4, jpg6, jpg7, jpg1, jpg9, jpg13]
                     possibility5()
                  }
                  if(check[0] == "newElement6"){
                     possibility6 = [jpg4, jpg5, jpg7, jpg2, jpg10, jpg14]
                     possibility6()
                  }
                  if(check[0] == "newElement7"){
                     possibility7 = [jpg4, jpg5, jpg6, jpg3, jpg11, jpg15]
                     possibility7()
                  }
                  if(check[0] == "newElement8"){
                     possibility8 = [jpg9, jpg10, jpg11, jpg0, jpg4, jpg12]
                     possibility8()
                  }
                  if(check[0] == "newElement9"){
                     possibility9 = [jpg8, jpg10, jpg11, jpg1, jpg5, jpg13]
                     possibility9()
                  }
                  if(check[0] == "newElement10"){
                     possibility10 = [jpg8, jpg9, jpg11, jpg2, jpg6, jpg14]
                     possibility10()
                  }
                  if(check[0] == "newElement11"){
                     possibility11 = [jpg8, jpg9, jpg10, jpg3, jpg7, jpg15]
                     possibility11()
                  }
                  if(check[0] == "newElement12"){
                     possibility12 = [jpg13, jpg14, jpg15, jpg0, jpg4, jpg8]
                     possibility12()
                  }
                  if(check[0] == "newElement13"){
                     possibility13 = [jpg12, jpg14, jpg15, jpg1, jpg5, jpg9]
                     possibility13()
                  }
                  if(check[0] == "newElement14"){
                     possibility14 = [jpg12, jpg13, jpg15, jpg2, jpg6, jpg10]
                     possibility14()
                  }
                  if(check[0] == "newElement15"){
                     possibility15 = [jpg12, jpg13, jpg14, jpg3, jpg7, jpg11]
                     possibility15()
                  }  
                  }
              
               
                           //event.target.remove()   
         }           
      })
   })
}*/
/*cell.forEach(utem => {
    
   utem.addEventListener('click', event => {
      
   let rulesTurn = utem.classList
   console.log(rulesTurn) 
      if(rulesTurn[0] == "newElement0"){
         possibility = [jpg1, jpg2, jpg3, jpg4, jpg8, jpg12]
         console.log(possibility)
         //utem.classList.add("click1pl")

         possibility.forEach(atem => {
      
            atem.addEventListener('click', event => {
               let check = atem.classList
               //console.log(check)
               if(check[1] == "click1pl" || check[1] == "click2pl") {
               //alert("Нельзя ходить на чужую фишку")
               }
               else{
                  let tar = event.target 
            if (turn % 2 == 0){
            tar.classList.add("click1pl")
            //console.log(tar)
            turn++
            }
            else {         
               tar.classList.add("click2pl")
               // console.log(tar)
               turn++
               }
               }
            //event.target.remove()              
               })
         })
      }

      if(rulesTurn[0] == "newElement1"){
         possibility = [jpg0, jpg2, jpg3, jpg5, jpg9, jpg7]
         console.log(possibility)
         //utem.classList.add("click1pl")

         possibility.forEach(atem => {
      
            atem.addEventListener('click', event => {
               let check = atem.classList
               //console.log(check)
               if(check[1] == "click1pl" || check[1] == "click2pl") {
               //alert("Нельзя ходить на чужую фишку")
               }
               else{
                  let tar = event.target 
            if (turn % 2 == 0){
            tar.classList.add("click1pl")
            //console.log(tar)
            turn++
            }
            else {         
               tar.classList.add("click2pl")
               // console.log(tar)
               turn++
               }
               }
            //event.target.remove()              
               })
         })
      }
         
   })

 /*cell.forEach(atem => {
    
   atem.addEventListener('click', event => {
      let check = atem.classList
      //console.log(check)
      if(check[1] == "click1pl" || check[1] == "click2pl") {
      alert("Нельзя ходить на чужую фишку")
      }
      else{
         let tar = event.target 
   if (turn % 2 == 0){
   tar.classList.add("click1pl")
   //console.log(tar)
   turn++
   }
   else {         
       tar.classList.add("click2pl")
      // console.log(tar)
       turn++
       }
      }
   //event.target.remove()              
      })
} 
)*/
/*cell.forEach(item => {
    
   item.addEventListener('click', event => {
   let elementClasses = item.classList;
   console.log(elementClasses)
   if(elementClasses[2] == "click1pl" || elementClasses[2] == "click2pl") {
      alert("Нельзя ходить на чужую фишку")
   }
   else{
   
   //console.log(elementClasses)
   let o = document.createElement("div")
   o.classList.add(`${elementClasses[0]}`);
   o.classList.add("o");
   body.appendChild(o)
  // console.log(o)
   }
   })
})*/













   /*if(item == cell[0]){
         
         cell[0] = document.createElement("div")
         body.appendChild(cell[0]) 
         console.log("fdsfd")
      }*/
  /*for ( let i = 0; i < 16; i++) {
    const rand = Math.floor(Math.random()*cell.length);
    const rValue = cell[rand];
    
   // console.log(rValue)
  }*/

  /*var random_start = 1; // От какого генерировать
  var random_end = 16; // До какого генерировать
  allСycles = 16;
  var array= []
  for(i=random_start;i<=random_end;i++){
     
    
     array.push(i)
  }
  for(countCycles=1;countCycles<=allСycles;countCycles++){
      const finish = array.splice(Math.random()*array.length,1)[0]
      let k=0
      k++
      cell[k] = newElement 
      //cell.push(finish) 
    console.log(cell)
    //console.log(finish)
  }

  
  const newElement = document.createElement("div")
  newElement.innerHTML = "магия"
  newElement.classList.add('newElement');
container.appendChild(newElement)








/*cell[$].addEventListener("click", (event) => {
    
    if (event.target.classList.contains("circle")){
        score++
        event.target.remove()
        createRandomCircle()
    }
    console.log("adadad")
})*/

//const element1 = document.querySelector('.a-class')
//const element2 = document.querySelector('.another-class')

/*body.addEventListener("click", event => {
if (event.target == cell) {
return 
}
console.log(cell[i])
})*/
/*0 - 1.2.3.4.8.12
1 - 0.2.3.5.9.13
2 - 0.1.3.6.10.14
3 - 0.1.2.7.11.15
4 - 5.6.7.0.8.12
5 - 4.6.7.1.9.13
6 - 4.5.7.2.10.14
7 - 4.5.6.3.11.15
8 -9.10.11.0.4.12 
9 - 8.10.11.1.5.13
10 - 8.9.11.2.6.14
11 - 8.9.10.3.7.15
12 - 13.14.15.0.4.8
13 - 12.14.15.1.5.9
14 - 12.13.15.2.6.10
15 - 12.13.14.3.7.11*/
