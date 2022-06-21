let cell = []
let first = 1
let JZ=0
let turn = 1
let turn2 = 1
let isYouTurn = true
let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtn")
let btnAllRoom = document.getElementById("btnAllRoom")
let WindowRooms = document.querySelector(".WindowRooms") 
let btnLang = document.getElementById("btnLang")
let span = document.getElementsByClassName("close")[0]
let span2 = document.getElementsByClassName("close")[1]
let information1=document.querySelector(".information1")
let information2=document.querySelector(".information2")
let information3=document.querySelector(".information3")
let information4=document.querySelector(".information4")
let information5=document.querySelector(".information5")
let information6=document.querySelector(".information6")
let fishka1=document.querySelector(".fishka1")
let fishka2=document.querySelector(".fishka2")
let rules = document.querySelector(".rules")
let start = document.querySelector(".footer__start")
let author = document.querySelector(".footer__author")
let timer1=document.querySelector(".timer1")
let timer2=document.querySelector(".timer2")
const mediaQuery = window.matchMedia('(max-width: 768px)')
const AnimationWinFirst = document.querySelector(".winFirstEnd")
const AnimationWinFirst2 = document.querySelector(".winFirstEnd2")
const AnimationWinSecond = document.querySelector(".winSecondEnd")
const AnimationWinSecond2 = document.querySelector(".winSecondEnd2")
const darkSide = document.querySelector(".darkSide")
const footer = document.querySelector("footer")
//let introdution
let finish = []
let j = []
let check
let checkClassRooms
 const socket = new WebSocket("wss://okaiya.herokuapp.com/ws/");
 
 socket.onopen = () => {
   socket.send(JSON.stringify({       
         event: "login"      
    }))
 }

 
 socket.onmessage = (res) => {
   try {
      //console.log(res.data)
      const msg = JSON.parse(res.data)
      if(msg.event === "join-room"){
        // finish = msg.data.board
        // CreateBoard(finish)
        console.log(msg.data)
        finish = msg.data.board
        CreateBoard(finish)
        btnAllRoom.style.display = "none"
        information1.style.display = "flex"
        WindowRooms.style.display = "none"
        fishkas2[0].style.backgroundColor = "Cyan"
         fishkas2[0].style.boxShadow = `0 0 2px Cyan, 0 0 10px Cyan`
         fishkas2[0].style.border= "5px solid Blue"
         
      }
      if(msg.event === "login"){
        
      }
   if(msg.event === "move"){
      obnul()
     if(msg.data==0){
      j[0] = 1
      isYouTurn = false
      show0()
     }
     else if(msg.data==1){
      j[1] = 1
      isYouTurn = false
      show1()
     }
     else if(msg.data==2){
      j[2] = 1
      isYouTurn = false
      show2()
     }
     else if(msg.data==3){
      j[3] = 1
      isYouTurn = false
      show3()
     }
     else if(msg.data==4){
      j[4] = 1
      isYouTurn = false
      show4()
     }
     else if(msg.data==5){
      j[5] = 1
      isYouTurn = false
      show5()
     }
     else if(msg.data==6){
      j[6] = 1
      isYouTurn = false
      show6()
     }
     else if(msg.data==7){
      j[7] = 1
      isYouTurn = false
      show7()
     }
     else if(msg.data==8){
      j[8] = 1
      isYouTurn = false
      show8()
     }
     else if(msg.data==9){
      j[9] = 1
      isYouTurn = false
      show9()
     }
     else if(msg.data==10){
      j[10] = 1
      isYouTurn = false
      show10()
     }
     else if(msg.data==11){
      j[11] = 1
      isYouTurn = false
      show11()
     }
     else if(msg.data==12){
      j[12] = 1
      isYouTurn = false
      show12()
     }
     else if(msg.data==13){
      j[13] = 1
      isYouTurn = false
      show13()
     }
     else if(msg.data==14){
      j[14] = 1
      isYouTurn = false
      show14()
     }
     else if(msg.data==15){
      j[15] = 1
      isYouTurn = false
      show15()
     }
   }
   } catch (error) {
      // console.log(err)
   } 
   
   
 }
 
//introdution = prompt("Имя введи", "default");
setTimeout(() => {
   console.log(finish[0])
}, 1700)
//let fric = Array.isArray(finish)
//console.log(fric)
let nowTurn = 0

let times1
let times2

let time1 = 0;
let time2 = 0;
let isDarkSide = false

//information1.style.display = "flex"

const body = document.querySelector("body")
const container = document.querySelector(".container")
let isRu = true
let isRooms = true
let room
let Rooms = []
rowsRooms = []
let rowCount2 = 0

let rows = []
for (let i=0; i<4; i++) {
   const row2 = document.createElement("div")
   const row = document.createElement("div")
   row.classList.add("row")
   row2.classList.add("row")
   container.appendChild(row)
   WindowRooms.appendChild(row2)
   rowsRooms.push(row2)
   rows.push(row)
}

btnAllRoom.onclick = function(){
      console.log("dasadsdadsa")
      WindowRooms.style.display = "block"
      if(isRooms){
      for(i=0; i<9; i++){
         room = document.createElement("button")
         room.classList.add("room")
         room.classList.add(`room${i}`)
         WindowRooms.appendChild(room)
         room.innerHTML = `Это комната ${i+1}`;
         Rooms.push(room)
         rowsRooms[rowCount2].appendChild(Rooms[i])
         if(i==2 || i==5){   
            rowCount2++  
        }
      } 
      isRooms = false
   }  
   console.log(Rooms)
   Rooms.forEach(item => {
      
      item.addEventListener('click', event => {
         checkClassRooms = item.classList
         for(i=0; i<9; i++){
       if(checkClassRooms[1] == `room${i}`){
         try{
            console.log("adsdasd")
            socket.send(JSON.stringify({
      
            event: "join-room",
            data: {
               "roomNumber": i
           }            
       }))}catch(err){
         console.log(err)
         }//ЗАПРОС НА СЕРВЕР
       }
         }
      })
   })
}

// for(i=0; i<9; i++){
//    Rooms[i].onclick = function(){
//       console.log(i)
//    }
// }



darkSide.onclick = function(){
if(!isDarkSide){
   body.style.backgroundColor = "#383525"
   footer.style.backgroundColor = "#dbd196"
   AnimationWinFirst.style.backgroundColor = "#383525"
   AnimationWinFirst2.style.backgroundColor = "#383525"
   AnimationWinSecond.style.backgroundColor = "#383525"
   AnimationWinSecond2.style.backgroundColor = "#383525"
   container.style.backgroundColor = "#dbd196"
   isDarkSide = true
}
else if(isDarkSide){
   body.style.backgroundColor = "white"
   footer.style.backgroundColor = "rgb(157, 236, 236)"
   AnimationWinFirst.style.backgroundColor = "white"
   AnimationWinFirst2.style.backgroundColor = "white"
   AnimationWinSecond.style.backgroundColor = "white"
   AnimationWinSecond2.style.backgroundColor = "white"
   container.style.backgroundColor = "antiquewhite"
   isDarkSide = false
}
}

btnAllRoom.style.display = "block"

btnLang.onclick = function (){
start.style.display = "none"
author.style.display = "none"
   if(!isRu){
   isRu = true
information1.style.display = "none"
information2.style.display = "none"
information3.style.display = "none"
information4.style.display = "none"
information5.style.display = "none"
information6.style.display = "none"
btnAllRoom.style.display = "none"
information1=document.querySelector(".information1")
information2=document.querySelector(".information2")
information3=document.querySelector(".information3")
information4=document.querySelector(".information4")
information5=document.querySelector(".information5")
information6=document.querySelector(".information6")
btnAllRoom = document.getElementById("btnAllRoom")
if(isDraw){
   information6.style.display = "flex"
   information1.style.display = "none" 
   information2.style.display = "none" 
   information5.style.display = "flex"
   AnimationWinSecond.style.display = "flex"
   AnimationWinFirst2.style.display = "flex"
   AnimationWinFirst.style.display = "none"
   AnimationWinSecond2.style.display = "none" 
}
if((nowTurn==1 || nowTurn==0)&& !isWin){
   btnAllRoom.style.display = "block"
   information1.style.display = "flex" 
}
if(nowTurn==2 && isWin==false){
   information2.style.display = "flex" 
}
if((nowTurn==1 || nowTurn==0) && isWin){
   information4.style.display = "flex"
   information5.style.display = "flex"
}
if(nowTurn==2 && isWin){
   information3.style.display = "flex" 
   information5.style.display = "flex"
}
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
information5.style.display = "none"
information6.style.display = "none"
btnAllRoom.style.display = "none"
information1=document.querySelector(".information1eng")
information2=document.querySelector(".information2eng")
information3=document.querySelector(".information3eng")
information4=document.querySelector(".information4eng")
information5=document.querySelector(".information5eng")
information6=document.querySelector(".information6eng")
if(isDraw){
   information6.style.display = "flex"
   information1.style.display = "none" 
   information2.style.display = "none"
   information5.style.display = "flex" 
   AnimationWinFirst.style.display = "flex"
   AnimationWinSecond2.style.display = "flex" 
   AnimationWinSecond.style.display = "none"
   AnimationWinFirst2.style.display = "none"
}
if((nowTurn==1 || nowTurn==0) && !isWin){
   btnAllRoom.style.display = "block"
   information1.style.display = "flex" 
}
if(nowTurn==2 && !isWin){
   information2.style.display = "flex" 
}
if((nowTurn==1 || nowTurn==0) && isWin){
   information4.style.display = "flex" 
   information5.style.display = "flex"
}
if(nowTurn==2 && isWin){
   information3.style.display = "flex"
   information5.style.display = "flex" 
}
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


 function Times1() {
   times1 = setInterval(function(){
      ++time1;
      timer1.innerHTML = time1;
   }, 1000);
 }
 function Times2() {
   times2 = setInterval(function(){
      ++time2;
      timer2.innerHTML = time2;
   }, 1000);
 }

btn.onclick = function (){
   modal.style.display = "block"
}
span.onclick = function (){
  // modal.style.display = "none"
   WindowRooms.style.display = "none"
}
span2.onclick = function (){
    modal.style.display = "none"
    //WindowRooms.style.display = "none"
 }
window.onclick = function(event){
   if(event.target==modal){
      modal.style.display = "none"
   }
}



let fishkas1 = []
let fishkas2 = []

 
for(i=0; i<8; i++){
   const fishka = document.createElement("div")
   if (mediaQuery.matches) {
  // const fishka = document.createElement("div")
   fishka.style.top = ("75%")
   fishka.style.left = (`${15*i+2}px`)
   fishkas1.push(fishka)  
   fishka.classList.add("fishka1")
   body.appendChild(fishka) 
   console.log("adada")
       }
   else{
     // const fishka = document.createElement("div")
fishka.style.top = (`${30*i+200}px`)
fishka.style.left = (`${30*i+200}px`)
fishkas1.push(fishka)  
fishka.classList.add("fishka1")
body.appendChild(fishka)
   }

}
for(i=0; i<8; i++){
   const fishka = document.createElement("div")
   if (mediaQuery.matches) {
      // const fishka = document.createElement("div")
       fishka.style.top = ("75%")
       fishka.style.left = (`${15*i+220}px`)
       fishkas2.push(fishka)  
       fishka.classList.add("fishka2")
       body.appendChild(fishka) 
       console.log("adada")
           }
       else{
         // const fishka = document.createElement("div")
    fishka.style.top = (`${30*i+200}px`)
    fishka.style.right = (`${30*i+200}px`)
    fishkas2.push(fishka)  
    fishka.classList.add("fishka2")
    body.appendChild(fishka)
   }
}

let d = -1
let d2 = -1



function delete1(){
   nowTurn = 1
   clearInterval(times1)
   Times2()
   d++ 
   information2.style.display = "none" 
   information1.style.display = "flex"
         fishkas1[d].remove()
         if(d<7){
            fishkas2[d+1].style.backgroundColor = "Cyan"
         fishkas2[d+1].style.boxShadow = `0 0 2px Cyan, 0 0 10px Cyan`
         fishkas2[d+1].style.border= "5px solid Blue" 
         }       
}

function delete2(){
   nowTurn = 2
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


for(i=0;i<16;i++){
j.push(1)
}

  const array = [] 

  for(i=0;i<=15;i++){    
    array.push(i)
 }


let rowCount = 0

function CreateBoard(finish){
for(let i = 0; i<=15; i++){
    //let fanish = finish[i]
    //finish = array.splice(Math.random()*array.length,1)[0]
    cell[i] = document.createElement("div")
    cell[i].classList.add(`newElement${finish[i]}`);
    rows[rowCount].appendChild(cell[i])
if(i==3 || i==7 || i==11){   
    rowCount++  
}
}
AddJpgInBoard()
}

let jpg = []
function AddJpgInBoard() {
for(i=0;i<16;i++){
   jpg.push(document.querySelector(`.newElement${i}`))

}
CreateFirstTurnBan()
}
//  let possibility = [jpg[0], jpg[1], jpg[2], jpg[3], jpg[4], jpg[5], jpg[6], jpg[7], jpg[8], jpg[9], jpg[10], jpg[11], jpg[12], jpg[13], jpg[14], jpg[15]]

function CreateFirstTurnBan() {
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
AddAllEventListener()
}
checkWinNoTurn = []
for(i=0; i<16; i++){
   checkWinNoTurn.push(0)
   }

let allowedIds=[]
function AddAllEventListener(){
   jpg[0].addEventListener("click", show0)
   jpg[1].addEventListener("click", show1)
   jpg[2].addEventListener("click", show2)
   jpg[3].addEventListener("click", show3)
   jpg[4].addEventListener("click", show4)
   jpg[5].addEventListener("click", show5)
   jpg[6].addEventListener("click", show6)
   jpg[7].addEventListener("click", show7)
   jpg[8].addEventListener("click", show8)
   jpg[9].addEventListener("click", show9)
   jpg[10].addEventListener("click", show10)
   jpg[11].addEventListener("click", show11)
   jpg[12].addEventListener("click", show12)
   jpg[13].addEventListener("click", show13)
   jpg[14].addEventListener("click", show14)
   jpg[15].addEventListener("click", show15)
}

   function show0(){
      console.log("Функция сработала до начала проверки")
      check = jpg[0].classList
      if((j[0]==1 || j[1]==1 || j[2]==1 || j[3]==1 || j[4]==1 || j[8]==1 || j[12]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
      
      if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
      
            event: "move",
            data: 0
            
       }))}catch(err){
         console.log(err)
         }//ЗАПРОС НА СЕРВЕР
      } 
      isYouTurn = true
      checkWinNoTurn[0] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[0].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[0].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin0(turn)
      }
      else{
         if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }


 
   

   function show1(){
      console.log("Функция сработала до начала проверки")
      check = jpg[1].classList
      if((j[1]==1 ||j[0]==1 || j[2]==1 || j[3]==1 || j[5]==1 || j[9]==1 || j[13]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
       if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 1
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[1] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[1].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[1].classList.add("click2pl")
         turn++
           delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin1(turn)
      }
      else{
         if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }


  

   function show2(){
      console.log("Функция сработала до начала проверки")
      check = jpg[2].classList
      if((j[2]==1||j[0]==1 || j[1]==1 || j[3]==1 || j[6]==1 || j[10]==1 || j[14]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 2
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[2] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[2].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[2].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin2(turn)
      }
      else{
         if(isRu==true)alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }


 

   function show3(){
      console.log("Функция сработала до начала проверки")
      check = jpg[3].classList
      if((j[3]==1||j[0]==1 || j[1]==1 || j[2]==1 || j[7]==1 || j[11]==1 || j[15]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 3
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[3] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[3].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[3].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin3(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }



   function show4(){
      console.log("Функция сработала до начала проверки")
      check = jpg[4].classList
      if((j[4]==1||j[5]==1 || j[6]==1 || j[7]==1 || j[0]==1 || j[8]==1 || j[12]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 4
         
    }))}catch(err){
      console.log(err)
      }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[4] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[4].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[4].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin4(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }

   

   
   function show5(){
      console.log("Функция сработала до начала проверки")
      check = jpg[5].classList
      if((j[5]==1||j[4]==1 || j[6]==1 || j[7]==1 || j[1]==1 || j[9]==1 || j[13]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 5
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[5] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[5].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[5].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin5(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }




   function show6(){
      console.log("Функция сработала до начала проверки")
      check = jpg[6].classList
      if((j[6]==1||j[4]==1 || j[5]==1 || j[7]==1 || j[2]==1 || j[10]==1 || j[14]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 6
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[6] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[6].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[6].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin6(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }


 

   function show7(){
      console.log("Функция сработала до начала проверки")
      check = jpg[7].classList
      if((j[7]==1|| j[4]==1 || j[5]==1 || j[6]==1 || j[3]==1 || j[11]==1 || j[15]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 7
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[7] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[7].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[7].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin7(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }




   function show8(){
      console.log("Функция сработала до начала проверки")
      check = jpg[8].classList
      if((j[8]==1||j[9]==1 || j[10]==1 || j[11]==1 || j[0]==1 || j[4]==1 || j[12]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 8
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[8] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[8].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[8].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin8(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }



   function show9(){
      console.log("Функция сработала до начала проверки")
      check = jpg[9].classList
      if((j[9]==1||j[8]==1 || j[10]==1 || j[11]==1 || j[1]==1 || j[5]==1 || j[13]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 9
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[9] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[9].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[9].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin9(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }



   function show10(){
      check = jpg[10].classList
      if((j[10]==1||j[8]==1 || j[9]==1 || j[11]==1 || j[2]==1 || j[6]==1 || j[14]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 10
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[10] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[10].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[10].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin10(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }


 

   function show11(){
      check = jpg[11].classList
      if((j[11]==1||j[8]==1 || j[9]==1 || j[10]==1 || j[3]==1 || j[7]==1 || j[15]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 11
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[11] = 1
      let o = document.createElement("div")
      o.classList.add(`${check[0]}`)
      o.classList.add("o")
      body.appendChild(o)
      if (turn % 2 == 0){
         jpg[11].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[11].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin11(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }


  

   function show12(){
      check = jpg[12].classList
      if (( j[12]==1 || j[13]==1 || j[14]==1 || j[15]==1 || j[0]==1 || j[4]==1 || j[8]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 12
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[12] = 1
      let o = document.createElement("div")
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg[12].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[12].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin12(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }

 
   

   function show13(){
      check = jpg[13].classList
      if((j[13]==1 || j[12]==1 || j[14]==1 || j[15]==1 || j[1]==1 || j[5]==1 || j[9]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
         let o = document.createElement("div")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 13
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[13] = 1
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg[13].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[13].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin13(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }

   
  

   function show14(){
      check = jpg[14].classList
      if((j[14]==1||j[12]==1 || j[13]==1 || j[15]==1 || j[2]==1 || j[6]==1 || j[10]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
        if(isYouTurn){
         obnul()
         try{
            socket.send(JSON.stringify({
   
         event: "move",
         data: 14
         
    }))}catch(err){
      console.log(err)
       }//ЗАПРОС НА СЕРВЕР
   }
   isYouTurn = true
      checkWinNoTurn[14] = 1
         let o = document.createElement("div")
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg[14].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[14].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin14(turn)
      }
      else{
         if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }


   
   
   function show15(){
      check = jpg[15].classList
      if((j[15]==1||j[12]==1 || j[13]==1 || j[14]==1 || j[3]==1 || j[7]==1 || j[11]==1)&&(check[1] !== "click1pl" && check[1] !== "click2pl" && JZ!==1)){
         console.log("Функция сработала и прошла первую ступень провреки")
         if(isYouTurn){
            obnul()
            try{
               socket.send(JSON.stringify({
      
            event: "move",
            data: 15
            
       }))}catch(err){
         console.log(err)
          }//ЗАПРОС НА СЕРВЕР
      }
      isYouTurn = true
      checkWinNoTurn[15] = 1
         let o = document.createElement("div")
         o.classList.add(`${check[0]}`)
         o.classList.add("o")
         body.appendChild(o)
      if (turn % 2 == 0){
         jpg[15].classList.add("click1pl")
         turn++
         delete1()
         checkFinish(turn)
         }
         else {         
         jpg[15].classList.add("click2pl")
         turn++
          delete2()
         checkFinish(turn)
         }
         turn2++
         noTurnWin15(turn)
      }
      else{
                  if(isRu==true) alert("Ваш ход не соответсвует правилам")
         else alert("Your move doesn't follow the rules")
      }
   }

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
let CheckDraw
let isDraw = false

function checkFinish(turn){
   console.log(j)
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
   finishend(turn) 
   if(turn==17){
      isDraw = true
      clearInterval(times2)
      clearInterval(times1)
      obnul() 
      information6.style.display = "flex"
      information1.style.display = "none" 
      information2.style.display = "none" 
      information5.style.display = "flex"
      AnimationWinSecond.style.display = "flex"
      AnimationWinFirst2.style.display = "flex" 
   }
}


function finishend() {
   if(c[0]==c[1]&&c[1]==c[2]&&c[2]==c[3] || c[4]==c[5]&&c[5]==c[6]&&c[6]==c[7] || c[8]==c[9]&&c[9]==c[10]&&c[10]==c[11] || c[12]==c[13]&&c[13]==c[14]&&c[14]==c[15] || c[0]==c[4]&&c[4]==c[8]&&c[8]==c[12] || c[1]==c[5]&c[5]==c[9]&&c[9]==c[13] || c[2]==c[6]&&c[6]==c[10]&&c[10]==c[14] || c[3]==c[7]&&c[7]==c[11]&&c[11]==c[15] || c[3]==c[6]&&c[6]==c[9]&&c[9]==c[12] || c[0]==c[5]&&c[5]==c[10]&&c[10]==c[15] || c[0]==c[1]&&c[1]==c[4]&&c[4]==c[5] || c[1]==c[2]&&c[2]==c[5]&&c[5]==c[6] || c[2]==c[3]&&c[3]==c[6]&&c[6]==c[7] || c[4]==c[5]&&c[5]==c[8]&&c[8]==c[9] || c[5]==c[6]&&c[6]==c[9]&&c[9]==c[10] || c[6]==c[7]&&c[7]==c[10]&&c[10]==c[11] || c[8]==c[9]&&c[9]==c[12]&&c[12]==c[13] || c[9]==c[10]&&c[10]==c[13]&&c[13]==c[14] || c[10]==c[11]&&c[11]==c[14]&&c[14]==c[15])
   {
      if(c[0]==c[1]&&c[1]==c[2]&&c[2]==c[3]&&c[0]==1 || c[4]==c[5]&&c[5]==c[6]&&c[6]==c[7]&&c[4]==1 || c[8]==c[9]&&c[9]==c[10]&&c[10]==c[11]&&c[8]==1 || c[12]==c[13]&&c[13]==c[14]&&c[14]==c[15]&&c[12]==1 || c[0]==c[4]&&c[4]==c[8]&&c[8]==c[12]&&c[0]==1 || c[1]==c[5]&c[5]==c[9]&&c[9]==c[13]&&c[1]==1 || c[2]==c[6]&&c[6]==c[10]&&c[10]==c[14]&&c[2]==1 || c[3]==c[7]&&c[7]==c[11]&&c[11]==c[15]&&c[3]==1 || c[3]==c[6]&&c[6]==c[9]&&c[9]==c[12]&&c[3]==1 || c[0]==c[5]&&c[5]==c[10]&&c[10]==c[15]&&c[0]==1 || c[0]==c[1]&&c[1]==c[4]&&c[4]==c[5]&&c[0]==1 || c[1]==c[2]&&c[2]==c[5]&&c[5]==c[6]&&c[1]==1 || c[2]==c[3]&&c[3]==c[6]&&c[6]==c[7]&&c[2]==1 || c[4]==c[5]&&c[5]==c[8]&&c[8]==c[9]&&c[4]==1 || c[5]==c[6]&&c[6]==c[9]&&c[9]==c[10]&&c[5]==1 || c[6]==c[7]&&c[7]==c[10]&&c[10]==c[11]&&c[6]==1 || c[8]==c[9]&&c[9]==c[12]&&c[12]==c[13]&&c[8]==1 || c[9]==c[10]&&c[10]==c[13]&&c[13]==c[14]&&c[9]==1 || c[10]==c[11]&&c[11]==c[14]&&c[14]==c[15]&&c[10]==1){
         winFirst()
      }
      else winSecond()  
      
      isWin=true
   }   
}
let isWin = false
function winSecond(){
   information1.style.display = "none" 
   information2.style.display = "none" 
   information3.style.display = "flex" 
   information4.style.display = "none"  
   information5.style.display = "flex" 
   container.style.animation = "ramka1 3s infinite";
   clearInterval(times2)
      clearInterval(times1)
      obnul() 
      isWin=true
      AnimationWinFirst.style.display = "flex"
      AnimationWinFirst2.style.display = "flex"    
}
function winFirst(){
   information1.style.display = "none" 
   information2.style.display = "none" 
   information3.style.display = "none" 
   information4.style.display = "flex"
   information5.style.display = "flex" 
   clearInterval(times2)
      clearInterval(times1)
      obnul()  
      isWin=true
      AnimationWinSecond.style.display = "flex"
      AnimationWinSecond2.style.display = "flex"
      container.style.animation = "ramka2 3s infinite";
}
function noTurnWin0(turn){
   if(checkWinNoTurn[0] == 1 && checkWinNoTurn[1] == 1 &&checkWinNoTurn[2] == 1 &&checkWinNoTurn[3] == 1 &&checkWinNoTurn[4] == 1 && checkWinNoTurn[8] == 1 && checkWinNoTurn[12] == 1){
      if(turn % 2 == 0 && turn<17) winSecond()
      if(turn % 2 !== 0) winFirst() 
   }
   else if(turn2==17){
      information6.style.display = "flex" 
   }
}
function noTurnWin1(turn){
if(checkWinNoTurn[1] == 1 && checkWinNoTurn[0] == 1 && checkWinNoTurn[2] == 1 && checkWinNoTurn[3] == 1 && checkWinNoTurn[5] == 1 && checkWinNoTurn[9] == 1 && checkWinNoTurn[13] == 1){
   if(turn % 2 == 0 && turn<17)  winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin2(turn){
if(checkWinNoTurn[2] == 1 && checkWinNoTurn[0] == 1 && checkWinNoTurn[1] == 1 && checkWinNoTurn[3] == 1 && checkWinNoTurn[6] == 1 && checkWinNoTurn[10] == 1 && checkWinNoTurn[14] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   if(turn % 2 !== 0) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin3(turn){ 
if(checkWinNoTurn[3] == 1 && checkWinNoTurn[0] == 1 && checkWinNoTurn[1] == 1 && checkWinNoTurn[2] == 1 && checkWinNoTurn[7] == 1 && checkWinNoTurn[11] == 1 && checkWinNoTurn[15] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
}  
function noTurnWin4(turn){
if(checkWinNoTurn[4] == 1 && checkWinNoTurn[5] == 1 && checkWinNoTurn[6] == 1 && checkWinNoTurn[7] == 1 && checkWinNoTurn[0] == 1 && checkWinNoTurn[8] == 1 && checkWinNoTurn[12] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
}  
function noTurnWin5(turn){
if(checkWinNoTurn[5] == 1 && checkWinNoTurn[4] == 1 && checkWinNoTurn[6] == 1 && checkWinNoTurn[7] == 1 && checkWinNoTurn[1] == 1 && checkWinNoTurn[9] == 1 && checkWinNoTurn[13] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin6(turn){
if(checkWinNoTurn[6] == 1 && checkWinNoTurn[4] == 1 && checkWinNoTurn[5] == 1 && checkWinNoTurn[7] == 1 && checkWinNoTurn[2] == 1 && checkWinNoTurn[10] == 1 && checkWinNoTurn[14] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
}  
function noTurnWin7(turn){
if(checkWinNoTurn[7] == 1 && checkWinNoTurn[4] == 1 && checkWinNoTurn[5] == 1 && checkWinNoTurn[6] == 1 && checkWinNoTurn[3] == 1 && checkWinNoTurn[11] == 1 && checkWinNoTurn[15] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
}  
function noTurnWin8(turn){
if(checkWinNoTurn[8] == 1 && checkWinNoTurn[9] == 1 && checkWinNoTurn[10] == 1 && checkWinNoTurn[11] == 1 && checkWinNoTurn[0] == 1 && checkWinNoTurn[4] == 1 && checkWinNoTurn[12] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
}  
function noTurnWin9(turn){
if(checkWinNoTurn[9] == 1 && checkWinNoTurn[8] == 1 && checkWinNoTurn[10] == 1 && checkWinNoTurn[11] == 1 && checkWinNoTurn[1] == 1 && checkWinNoTurn[5] == 1 && checkWinNoTurn[13] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin10(turn){
if(checkWinNoTurn[10] == 1 && checkWinNoTurn[8] == 1 && checkWinNoTurn[9] == 1 && checkWinNoTurn[11] == 1 && checkWinNoTurn[2] == 1 && checkWinNoTurn[6] == 1 && checkWinNoTurn[14] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin11(turn){
if(checkWinNoTurn[11] == 1 && checkWinNoTurn[8] == 1 && checkWinNoTurn[9] == 1 && checkWinNoTurn[10] == 1 && checkWinNoTurn[3] == 1 && checkWinNoTurn[7] == 1 && checkWinNoTurn[15] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin12(turn){
if(checkWinNoTurn[12] == 1 && checkWinNoTurn[13] == 1 && checkWinNoTurn[14] == 1 && checkWinNoTurn[15] == 1 && checkWinNoTurn[0] == 1 && checkWinNoTurn[4] == 1 && checkWinNoTurn[8] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin13(turn){
if(checkWinNoTurn[13] == 1 && checkWinNoTurn[12] == 1 && checkWinNoTurn[14] == 1 && checkWinNoTurn[15] == 1 && checkWinNoTurn[1] == 1 && checkWinNoTurn[5] == 1 && checkWinNoTurn[9] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
} 
}
function noTurnWin14(turn){
if(checkWinNoTurn[14] == 1 && checkWinNoTurn[12] == 1 && checkWinNoTurn[13] == 1 && checkWinNoTurn[15] == 1 && checkWinNoTurn[2] == 1 && checkWinNoTurn[6] == 1 && checkWinNoTurn[10] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
}
} 
function noTurnWin15(turn){
if(checkWinNoTurn[15] == 1 && checkWinNoTurn[12] == 1 && checkWinNoTurn[13] == 1 && checkWinNoTurn[14] == 1 && checkWinNoTurn[3] == 1 && checkWinNoTurn[7] == 1 && checkWinNoTurn[11] == 1){
   if(turn % 2 == 0 && turn<17) winSecond()
   else if (turn % 2 !== 0 && turn<17) winFirst() 
}
else if(turn2==17){
   information6.style.display = "flex" 
} 
} 



