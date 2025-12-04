(function(){
    'use strict'
    console.log('reading js')

    const dice1 = document.querySelector("#d1");
    const dice2 = document.querySelector("#d2");
    
    const infoText = document.querySelector(".middle-text");
    const currentPlayerText = document.querySelector(".current-player");
    
    const p1PointsBox = document.querySelectorAll(".player .points div")[0];
    const p2PointsBox = document.querySelectorAll(".player .points div")[1];
    
    const rollBtn = document.querySelector("#roll-btn");
    const nextBtn = document.querySelector("#next-btn");
    const checkBtn = document.querySelector("#check-btn");
    const restartBtn = document.querySelector("#restart-btn");
    const explainBox = document.querySelector("#explain-box");
    
    let scores = [0, 0];
    let current = 0;
    let stopped = [false, false];
    
    const diceImages = [
        "images/dice-1.png",
        "images/dice-2.png",
        "images/dice-3.png",
        "images/dice-4.png",
        "images/dice-5.png",
        "images/dice-6.png"
    ];
    
    function updateScoreUI() {
        p1PointsBox.innerHTML = scores[0];
        p2PointsBox.innerHTML = scores[1];
    }
    
    function updateInfo() {
        const remain = 30 - scores[current];
        infoText.innerHTML =
            "Player " + (current + 1) + " has " +
            scores[current] + " points — " +
            remain + " away from bust.";
        currentPlayerText.innerHTML =
            "Player " + (current + 1);
    }
    
    rollBtn.addEventListener("click", function () {
    
        if (stopped[current]) return;
    
        const r1 = Math.floor(Math.random() * 6) + 1;
        const r2 = Math.floor(Math.random() * 6) + 1;
    
        dice1.src = diceImages[r1 - 1];
        dice2.src = diceImages[r2 - 1];
    
        const sum = r1 + r2;
        scores[current] = scores[current] + sum;
    
        updateScoreUI();
    
        if (scores[current] > 30) {
            infoText.innerHTML =
                "Player " + (current + 1) +
                " busts with " + scores[current] + "!";
    
            rollBtn.disabled = true;
            nextBtn.disabled = true;
            checkBtn.disabled = true;
            restartBtn.style.display = "inline-block";
            return;
        }
    
        updateInfo();
    });
    
    nextBtn.addEventListener("click", function () {
    
        stopped[current] = true;
    
        if (stopped[0] && stopped[1]) {
            const p1 = scores[0];
            const p2 = scores[1];
            let result = "";
    
            if (p1 === p2) result = "Player One has " + p1 + ", Player Two has " + p2 + " — It is a tie!";
            else if (p1 > p2) result = "Player One has " + p1 + ", Player Two has " + p2 + " — Player One wins!";
            else result = "Player One has " + p1 + ", Player Two has " + p2 + " — Player Two wins!";
    
            explainBox.innerHTML = result;
    
            rollBtn.disabled = true;
            nextBtn.disabled = true;
            checkBtn.disabled = true;
            restartBtn.style.display = "inline-block";
            return;
        }
    
        if (current === 0) current = 1;
        else current = 0;
    
        updateInfo();
    });
    
    checkBtn.addEventListener("click", function () {
    
        const p1 = scores[0];
        const p2 = scores[1];
        let result = "";
    
        if (p1 === p2) {
            result = "Player One has " + p1 + ", Player Two has " + p2 + " — It is a tie!";
        } else if (p1 > p2) {
            result = "Player One has " + p1 + ", Player Two has " + p2 + " — Player One wins!";
        } else {
            result = "Player One has " + p1 + ", Player Two has " + p2 + " — Player Two wins!";
        }
    
        explainBox.innerHTML = result;
    
        rollBtn.disabled = true;
        nextBtn.disabled = true;
        checkBtn.disabled = true;
        restartBtn.style.display = "inline-block";
    });
    
    restartBtn.addEventListener("click", function () {
        location.reload();
    });
    
    updateScoreUI();
    updateInfo();    

})();