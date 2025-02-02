let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#Comp-score");


const GenComp=()=>{

    const options=["Rock","Paper","Scissor"];
   const Random=Math.floor(Math.random()*3);
   return options[Random];
}

const DrawGame = () => {
    console.log("Game was Draw");
    msg.innerText =" Game was Draw! Play Again";
    


}

const showWinner=(userWin, UserC,ComputerC)=>{

    if(userWin){
    console.log("You Win");
    msg.innerText = `You Win! Your ${UserC} beats ${ComputerC}`;
    msg.style.backgroundColor = "green ";  
    userScore++;
    userScorepara.innerText= userScore;

}
    else{
        compScore++;
    compScorepara.innerText= compScore;
        console.log("You Lose");
        msg.innerText ="You Lose!";
        msg.style.backgroundColor = "red ";  
        msg.innerText = `You Lost! ${ComputerC} beats Your ${UserC}`;

    }


}

const PlayGame=(UserC)=>{

     const ComputerC= GenComp();//computer Choice

     if(UserC===ComputerC){
        DrawGame();
     }
     else{
        let userWin= true; 
        if(UserC==="Rock"){
            //scissor,paper
            userWin= ComputerC ==="Paper"? false:true
        }
        else if(UserC==="Paper"){
            //rock,scissor
            userWin= ComputerC ==="Scissor"? false:true
        }
        else{
            //rock,paper
            userWin= ComputerC ==="Rock"? false:true

        }
        showWinner(userWin,UserC,ComputerC);
     }
    };

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const User =choice.getAttribute("id");
       PlayGame(User);
    });
});