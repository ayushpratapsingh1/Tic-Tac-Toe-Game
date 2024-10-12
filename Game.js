let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let reset = document.querySelector(".reset");
let replay = document.querySelector("#replay");
let msg = document.querySelector("#msg");
let msg_con = document.querySelector(".msg-con");

let turn = true;//player X,player Y

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");
        count++;
        
        if(count==9){
            draw();
        }
        if(turn){//player O's turn
            box.innerText ="O";
            turn = false;
        }
        else{
            box.innerText ="X";
            turn = true;
        }
        box.disabled=true;
        check();
    });
});

const resetGame = () => {
    turn=true;
    count=0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg_con.classList.add("hide");
    container.classList.remove("hide");
    reset.classList.remove("hide");    
}
const win = (winner) => {
    msg.innerText = `Hurray! ${winner} has won`;
    msg_con.classList.remove("hide");
    container.classList.add("hide");
    reset.classList.add("hide");
}
const draw = () => {
    msg.innerText = `Match Drawn!`;
    msg_con.classList.remove("hide");
    container.classList.add("hide");
    reset.classList.add("hide");
}
const check = () => {
    for(let i of winning){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner");
                win(pos1);
            }
        }
    }
}

reset.addEventListener("click", () => {
    resetGame();
});
replay.addEventListener("click", () => {
    resetGame();
});
