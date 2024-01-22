let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;
//playerX, playerO who plays
let count = 0;
//game draw

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnO === true){
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        //doesn't let the player tap on a used tile
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = "Game was a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disbaled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disbaled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = "Congratulations, YOU WON !!!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if(pos0Val !="" && pos1Val !="" && pos2Val !=""){
            if(pos0Val==pos1Val && pos1Val==pos2Val){
                console.log("Winner" , pos0Val);
                showWinner(pos0Val); //displays the Winner message
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);    //New game button
resetBtn.addEventListener("click", resetGame);  //Reset game button(midway)