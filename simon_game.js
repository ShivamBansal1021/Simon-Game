let level = 0;
let gameSeq = [];
let playSeq = [];
let started = false;

let h4 = document.querySelector("h4");
document.addEventListener("keypress", function () {
    if (started == false) {
        
        started = true;

        levelUp();
        flash();
    }
})
function levelUp() {
    level++;
    h4.innerText = `Level ${level}`;
}

function flash() {
    let num = Math.ceil(Math.random() * 4);
    let randomBox = document.querySelector(`.color${num}`);
    randomBox.classList.add("flash");
    setTimeout(() => {
        randomBox.classList.remove('flash');
    }, 100)
    gameSeq.push(`color${num}`);
}



let colorContainer = document.querySelector(".color-container");
colorContainer.addEventListener("click", function (event) {
    if (event.target.classList[0] == "color") {
        if (started == true) {
            event.target.classList.add("flashUser");
            setTimeout(() => {
                event.target.classList.remove("flashUser");
            }, 100);
            playSeq.push(event.target.classList[1]);
        }
        for (i = 0; i < playSeq.length; i++) {
            if (playSeq[i] == gameSeq[i]) {
                if (playSeq.length == gameSeq.length && (playSeq[playSeq.length - 1] == gameSeq[gameSeq.length - 1])) {
                    setTimeout(() => {
                        levelUp();
                        flash();
                    }, 400);
                    playSeq = [];
                }
            }
            else {
                let body = document.querySelector("body");
                body.classList.add("wrong");
                setTimeout(() => {
                    body.classList.remove("wrong");
                }, 200); 
                h4.innerText = `Game Over! Your score is ${level - 1}. Press any key to restart`;
                reset();
            }
        }
    }
})

function reset(){
    started = false;
    level=0;
    playSeq = [];
    gameSeq = [];
}
