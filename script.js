 
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
        let ar =["❌","🕷️","⭕","🧿","🦬","🦕","🐞"]
      let ar1 =["⭕","🐛","❌","🦦","🐳","🦎","🐦‍🔥"]
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
        };
        box7.onclick = () => {
            let p = t;
            let p2 = t;
            if(b7==""){
            if (p == true) {
                character1
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
        // checklist(b1,b2,b3,b4,b5,b6,b7,b8,b9)
    }
 list()
        function checklist(){

        console.log("b1 :",b1 ,"b2 :",b2,"b3 :",b3)

         if(b1=="x" && b2=="x" && b3=="x" || b1=="o" && b2=="o" && b3=="o")
        {
            box1.classList.add("line-horizontal");
            box2.classList.add("line-horizontal");
            box3.classList.add("line-horizontal");
            
            if(b1=="x" & b2=="x" && b3 =="x"){
                div.classList.add("line-fr")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
                //alert(`Player ❌ is Winner `);
                //clear()
            }
            else if(b1=="o"&& b2=="o"&& b3=="o"){
                div.classList.add("line-fr")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n} `;
                //alert(`Player ⭕ is Winner `);
                //clear()
            }
            console.log("b1 and b2 and b3")
        }
        else if(b4=="x" && b5=="x" && b6=="x" || b4=="o" && b5=="o" && b6=="o")
        {
            box4.classList.add("line-horizontal");
            box5.classList.add("line-horizontal");
            box6.classList.add("line-horizontal");
 
            if(b4=="x" & b5=="x" && b6 =="x"){
                div.classList.add("line-sr")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
                //alert(`Player ❌ is Winner`);
                //clear()
            }
            else if(b4=="o"&& b5=="o"&& b6=="o"){
                div.classList.add("line-sr")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n} `;
               // alert(`Player ⭕ is Winner `);
               // clear()
            }
            console.log("b4 and b5 and b6")
        }
        else if(b7=="x" && b8=="x" && b9=="x" || b7=="o" && b8=="o" && b9=="o")
        {
            box7.classList.add("line-horizontal");
            box8.classList.add("line-horizontal");
            box9.classList.add("line-horizontal");
            
            if(b7=="x" & b8=="x" && b9 =="x"){
                div.classList.add("line-tr")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
               // alert(`Player ❌ is Winner`);
                //clear()
            }
            else if(b7=="o"&& b8=="o"&& b9=="o"){
                div.classList.add("line-tr")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n}`;
                //alert(`Player ⭕ is Winner `);
                //clear()
            }
            console.log("b7 and b8 and b9")
        }
        else if(b1=="x" && b4=="x" && b7=="x" || b1=="o" && b4=="o" && b7=="o")
        {
            box1.classList.add("line-vertical");
            box4.classList.add("line-vertical");
            box7.classList.add("line-vertical");
            
            if(b1=="x" & b4=="x" && b7 =="x"){
                div.classList.add("line-fc")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
                //alert(`Player ❌ is Winner `);
                //clear()
            }
            else if(b1=="o"&& b4=="o"&& b7=="o"){
                div.classList.add("line-fc")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n} `;
                //alert(`Player ⭕ is Winner `);
                //clear()
            }
            console.log("b1 and b4 and b7")
        }
        else if(b2=="x" && b5=="x" && b8=="x" || b2=="o" && b5=="o" && b8=="o")
        {
            box2.classList.add("line-vertical");
            box5.classList.add("line-vertical");
            box8.classList.add("line-vertical");
            if(b2=="x" & b5=="x" && b8 =="x"){
                div.classList.add("line-sc")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
               // alert(`Player ❌ is Winner `);
                //clear()
            }
            else if(b2=="o"&& b5=="o"&& b8=="o"){
                div.classList.add("line-sc")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n} `;
               // alert(`Player ⭕ is Winner `);
                //clear()
            }
            console.log("b2 and b5 and b8")
        }
        else if(b3=="x" && b6=="x" && b9=="x" || b3=="o" && b6=="o" && b9=="o")
        {
            box3.classList.add("line-vertical");
            box6.classList.add("line-vertical");
            box9.classList.add("line-vertical");
            if(b3=="x" & b6=="x" && b9 =="x"){
                div.classList.add("line-tc")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
               // alert(`Player ❌ is Winner `);
               // clear()
            }
            else if(b3=="o"&& b6=="o"&& b9=="o"){
                div.classList.add("line-tc")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n}`;
                //alert(`Player ⭕ is Winner `);
               // clear()
            }
            console.log("b3 and b6 and b9")
        }
        else if(b1=="x" && b5=="x" && b9=="x" || b1=="o" && b5=="o" && b9=="o")
        {
            box1.classList.add("line");
            box5.classList.add("line");
            box9.classList.add("line");
            if(b1=="x" & b5=="x" && b9 =="x"){
                div.classList.add("line-d1")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
                //alert(`Player ❌ is Winner `);
                //clear()
            }
            else if(b1=="o"&& b5=="o"&& b9=="o"){
                div.classList.add("line-d1")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n} `;
               // alert(`Player ⭕ is Winner `);
               // clear()
            }
            console.log("b1 and b5 and b9")
        }
        else if(b3=="x" && b5=="x" && b7=="x" || b3=="o" && b5=="o" && b7=="o")
        {
            box3.classList.add("line2");
            box5.classList.add("line2");
            box7.classList.add("line2");
            if(b3=="x" & b5=="x" && b7 =="x"){
                div.classList.add("line-d2")
                c1.innerText =++m;
                result.innerText = `Congratulations , Winner is ${n}`;
               // alert(`Player ❌ is Winner `);
                //clear()
            }
            else if(b3=="o"&& b5=="o"&& b7=="o"){
                div.classList.add("line-d2")
                c2.innerText =++y;
                result.innerText = `Congratulations , Winner is ${n} `;
                //alert(`Player ⭕ is Winner `);
                //clear()
            }
            console.log("b3 and b5 and b7")
        }
        else if(!b1==" " && !b2==" " && !b3==" "&&!b4==" "&& !b5==" " &&!b6==" "&& !b7==" "&& !b8==" " &&!b9==" "){
             result.innerText = `Draw The Match`;
        }
        //userGift()
    }
    
    function userGift(){
        if(m<=5){
            result.innerText = `Congratulations , Winner is ${n} you have win 👒 `;
        }
        else if(m<=10)
        {
            result.innerText = `Congratulations , Winner is ${n} you have win 🕶️`; 

        }
        else{
             result.innerText = `Congratulations , Winner is ${n}`; 

        }

        if(y<=5){
                result.innerText = `Congratulations , Winner is ${n} you have win 👒 `;
                }
                else if(y<=10)
                {
                   result.innerText = `Congratulations , Winner is ${n} you have win 🕶️`; 
                }
                else{
                    result.innerText = `Congratulations , Winner is ${n} `;
                }
    }

    reset.addEventListener('click',()=>{
      
         box1.textContent = "";
         box2.textContent = "";
         box3.textContent = "";
         box4.textContent = "";
         box5.textContent = "";
         box6.textContent = "";
         box7.textContent = "";
         box8.textContent = "";
         box9.textContent = "";

         b1="";
         b2="";
         b3="";
         b4="";
         b5="";
         b6="";
         b7="";
         b8="";
         b9="";
         
         box1.classList.remove("line","line-vertical","line-horizontal")
         box2.classList.remove("line","line-vertical","line-horizontal")
         box3.classList.remove("line","line-vertical","line-horizontal")
         box4.classList.remove("line","line-vertical","line-horizontal")
         box5.classList.remove("line","line-vertical","line-horizontal")
         box6.classList.remove("line","line-vertical","line-horizontal")
         box7.classList.remove("line","line-vertical","line-horizontal")
         box8.classList.remove("line","line-vertical","line-horizontal")
         box9.classList.remove("line","line-vertical","line-horizontal")
         div.classList.remove("line-fr","line-sr","line-tr","line-fc","line-sc","line-tc","line-d1","line-d2")
        result.innerText = "";
    })

     function clear(){
         box1.textContent = "";
         box2.textContent = "";
         box3.textContent = "";
         box4.textContent = "";
         box5.textContent = "";
         box6.textContent = "";
         box7.textContent = "";
         box8.textContent = "";
         box9.textContent = "";

         b1="";
         b2="";
         b3="";
         b4="";
         b5="";
         b6="";
         b7="";
         b8="";
         b9="";
         
         box1.classList.remove("line","line-vertical","line-horizontal")
         box2.classList.remove("line","line-vertical","line-horizontal")
         box3.classList.remove("line","line-vertical","line-horizontal")
         box4.classList.remove("line","line-vertical","line-horizontal")
         box5.classList.remove("line","line-vertical","line-horizontal")
         box6.classList.remove("line","line-vertical","line-horizontal")
         box7.classList.remove("line","line-vertical","line-horizontal")
         box8.classList.remove("line","line-vertical","line-horizontal")
         box9.classList.remove("line","line-vertical","line-horizontal")
         div.classList.remove("line-fr","line-sr","line-tr","line-fc","line-sc","line-tc","line-d1","line-d2")
         result.innerText = "";
        }

