  let main = document.querySelector("#main");
        let box1 = document.querySelector("#box1");
        let box2 = document.querySelector("#box2");
        let box3 = document.querySelector("#box3");
        let box4 = document.querySelector("#box4");
        let box5 = document.querySelector("#box5");
        let box6 = document.querySelector("#box6");
        let box7 = document.querySelector("#box7");
        let box8 = document.querySelector("#box8");
        let box9 = document.querySelector("#box9");
        let div1 = document.querySelector(".div1")
        let me = document.querySelector("#me");
        let you = document.querySelector("#you");
        let c1 = document.querySelector("#count1");
        let c2 = document.querySelector("#count2");
        let reset = document.querySelector("#reset");
        let player1= document.querySelector("#player1");
        let player2 = document.querySelector("#player2");
        let result = document.createElement("p");
        result.classList.add("result-list");
        main.appendChild(result)
        let div = document.createElement("div")
        div1.appendChild(div)
        let m =0;
        let y =0;
        let t = true;
        let b1 = "";
        let b2 = "";
        let b3 = "";
        let b4 = "";
        let b5 = "";
        let b6 = "";
        let b7 = "";
        let b8 = "";
        let b9 = "";
        let ar =["❌","⚽","⭕","🌞","🌝","♠️","♣️","♥️","♦️","✖️","✔️","✅","❎"]
      let ar1 =["⭕","⚽","❌","🌞","🌝","♠️","♣️","♥️","♦️","✖️","✔️","✅","❎"]
      
      let character1=()=>{
        if(player1.value=="p"){
              n=ar[0]
            }
               else if( player1.value== "p1"){
             n=ar[1]
            }
          else if( player1.value== "p2"){
             n=ar[2]
            }
            else if( player1.value== "p3"){
             n=ar[3]
            }
            else if( player1.value== "p4"){
             n=ar[4]
            }
            else if( player1.value== "p5"){
             n=ar[5]
            }
            else if( player1.value== "p6"){
             n=ar[6]
            }
            else if( player1.value== "p7"){
             n=ar[7]
            }
            else if( player1.value== "p8"){
             n=ar[8]
            }
            else if( player1.value== "p9"){
             n=ar[9]
            }
            else if( player1.value== "p10"){
             n=ar[10]
            }
            else if( player1.value== "p11"){
             n=ar[11]
            }
            else if( player1.value== "p12"){
             n=ar[12]
            }
            else if( player1.value== "p13"){
             n=ar[13]
            }
      }
      let character2=()=>{
        if(player2.value=="r"){
              n=ar1[0]
            }
               else if( player2.value== "r1"){
             n=ar1[1]
            }
            else if( player2.value== "r2"){
             n=ar1[2]
            }
            else if( player2.value== "r3"){
             n=ar1[3]
            }
            else if( player2.value== "r4"){
             n=ar1[4]
            }
            else if( player2.value== "r5"){
             n=ar1[5]
            }
            else if( player2.value== "r6"){
             n=ar1[6]
            }
            else if( player2.value== "r7"){
             n=ar1[7]
            }
            else if( player2.value== "r8"){
             n=ar1[8]
            }
            else if( player2.value== "r9"){
             n=ar1[9]
            }
            else if( player2.value== "r10"){
             n=ar1[10]
            }
            else if( player2.value== "r11"){
             n=ar1[11]
            }
            else if( player2.value== "r12"){
             n=ar1[12]
            }
            else if( player2.value== "r13"){
             n=ar1[13]
            }

      }
        function list(){

        box1.onclick = () => {
            let p = t;
            let p2 = t;
            if(b1==""){
            if (p == true) {
                character1()
                box1.innerText = n;
                t = !t;
                console.log("result", box1.contains)
                b1 ="x";
            }
            else {
                character2()
                box1.textContent = n;
                t = !t;
                b1 ="o";
            }
        }
        
            checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
            // box1.disable =true;
            console.log("box1",b1)
        };
        box2.onclick = () => {
            let p = t;
            let p2 = t;
            if(b2==""){
            if (p == true) {
                character1()
                box2.textContent = n;
                t = !t;
                b2 ="x";
            }
            else {
                character2()
                box2.textContent = n;
                t = !t;
                b2 ="o";
            }
        }
            console.log("box2",b2)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
            //  box2.disable =true
        };
        box3.onclick = () => {
            let p = t;
            let p2 = t;
            if(b3==""){
            if (p == true) {
                character1()
                box3.textContent = n;
                t = !t;
                b3 ="x";
            }
            else {
                character2()
                box3.textContent = n;
                t = !t;
                b3 ="o";
            }
        }
            console.log("box3",b3)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
            //  box3.disable =true
        };
        box4.onclick = () => {
            let p = t;
            let p2 = t;
            if(b4==""){
            if (p == true) {
                character1()
                box4.textContent = n;
                t = !t;
                b4 ="x";
            }
            else {
                character2()
                box4.textContent = n;
                t = !t;
                b4 ="o";
            }
        }
            console.log("box4",b4)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
            //  box4.disable =true
        };
        box5.onclick = () => {
            let p = t;
            let p2 = t;
            if(b5==""){
            if (p == true) {
                character1()
                box5.textContent = n;
                t = !t;
                b5 ="x";
            }
            else {
                character2()
                box5.textContent = n;
                t = !t;
                b5 ="o";
            }
        }
            console.log("box5",b5)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
            //  box5.disable =true
        };
        box6.onclick = () => {
            let p = t;
            let p2 = t;
            if(b6==""){
            if (p == true) {
                character1()
                box6.textContent = n;
                t = !t;
                b6 ="x";
            }
            else {
                character2()
                box6.textContent = n;
                t = !t;
                b6 ="o";
            }
        }
            console.log("box6",b6)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
            //  box6.disable =true
        };
        box7.onclick = () => {
            let p = t;
            let p2 = t;
            if(b7==""){
            if (p == true) {
                character1()
                box7.textContent = n;
                t = !t;
                b7 ="x";
            }
            else {
                character2()
                box7.textContent = n;
                t = !t;
                b7 ="o";
            }
        }
            console.log("box7",b7)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
           
        };
        box8.onclick = () => {
            let p = t;
            let p2 = t;
            if(b8==""){
            if (p == true) {
                character1()
                box8.textContent = n;
                t = !t;
                b8 ="x";
            }
            else {
                character2()
                box8.textContent = n;
                t = !t;
                b8 ="o";
            }
        }
            console.log("box8".b8)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
           
        };
        box9.onclick = () => {
            let p = t;
            let p2 = t;
            if(b9==""){
            if (p == true) {
                character1()
                box9.textContent = n;
                t = !t;
                b9 ="x";
            }
            else {
                character2()
                box9.textContent = n;
                t = !t;
                b9 ="o";
            }
        }
            console.log("box9",b9)
             checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9);
           
        };
       
    }
        list()
        function checklist() {
    console.log("b1:", b1, "b2:", b2, "b3:", b3);

    
    const wins = [
        { cells: [b1, b2, b3], line: "line-fr", boxes: [box1, box2, box3] },
        { cells: [b4, b5, b6], line: "line-sr", boxes: [box4, box5, box6] },
        { cells: [b7, b8, b9], line: "line-tr", boxes: [box7, box8, box9] },
        { cells: [b1, b4, b7], line: "line-fc", boxes: [box1, box4, box7] },
        { cells: [b2, b5, b8], line: "line-sc", boxes: [box2, box5, box8] },
        { cells: [b3, b6, b9], line: "line-tc", boxes: [box3, box6, box9] },
        { cells: [b1, b5, b9], line: "line-d1", boxes: [box1, box5, box9] },
        { cells: [b3, b5, b7], line: "line-d2", boxes: [box3, box5, box7] }
    ];

    
    for (let win of wins) {
        if ((win.cells[0] === 'x' && win.cells[1] === 'x' && win.cells[2] === 'x') ||
            (win.cells[0] === 'o' && win.cells[1] === 'o' && win.cells[2] === 'o')) {
            
            div.classList.add(win.line);
            
            if (win.cells[0] === 'x') {
                c1.innerText = ++m;
            } else {
                c2.innerText = ++y;
            }
            
            result.innerText = `Congratulations, Winner is ${n}!`;
            disableGame();
            userGift();
            return; 
        }
    }

   
    if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
        result.innerText = 'Draw!';
        disableGame();
    }

    userGift();
}

function disableGame() {
   
    [box1, box2, box3, box4, box5, box6, box7, box8, box9].forEach(box => {
        box.disabled = true;
        box.style.pointerEvents = 'none'; 
    });
}

reset.addEventListener('click', () => {
    [box1, box2, box3, box4, box5, box6, box7, box8, box9].forEach(box => {
        box.textContent = '';
        box.disabled = false;
        box.style.pointerEvents = 'auto';
    });

    
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
    
    div.classList.remove("line-fr", "line-sr", "line-tr", "line-fc", "line-sc", "line-tc", "line-d1", "line-d2");
    result.innerText = '';
});
function userGift() {
    let giftMessage = '';
    
    if (m === 5) {
        giftMessage = ' 🎩 You unlocked a Hat!';
    } else if (m === 10) {
        giftMessage = ' 🕶️ You unlocked Sunglasses!';
    } 
    
    else if (y === 5) {
        giftMessage = ' 🎩 You unlocked a Hat!';
    } else if (y === 10) {
        giftMessage = ' 🕶️ You unlocked Sunglasses!';
    } 
    
    result.innerText += giftMessage;
}
   

