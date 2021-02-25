(function () {

    'use strict';

    const startGame = document.getElementById('startgame');
        const gameControl = document.getElementById('gamecontrol');
        const game = document.getElementById('game');
        const actionArea = document.getElementById('actions');
        const speech = document.getElementById('speech');
        const playerOne = document.getElementById('name1');
        const playerTwo = document.getElementById('name2');
        const howto = document.getElementById('howto');
        const instruct = document.getElementById('instructions');
        const diceSound = new Audio('media/dice.mp3');
        const pigSound = new Audio('media/pig.mp3');
        const reeSound = new Audio('media/ree.mp3');
        const startSound = new Audio('media/start.wav');
    
        const gameData = {
            dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 
                'images/4die.png', 'images/5die.png', 'images/6die.png'],
            players: ['Player 1', 'Player 2'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 30
        };

        startGame.addEventListener("click", function(){
            //randomly set game index
            gameData.index = Math.round(Math.random());
            gameControl.innerHTML += '<button id="quit">New Game?</button>';

            document.getElementById('quit').addEventListener("click", function(){
                location.reload();
            });

            startSound.play();

            console.log(gameData.index);
            //console.log("set up the turn!");
            setUpTurn();


        });

        howto.addEventListener("click", function() {
            instruct.innerHTML = `<p>There are two players. The player whose turn it is rolls the dice. The total of the roll is added to the current player's score, unless either die comes up as a "one". If this happens, this player's turn is over, and it is the other player’s turn. After each roll, the current player can either roll again, (assuming a "one" was not rolled) or if the current player feels that luck is running thin, they can pass to the other player. The first player to get 30 points or higher wins.</p>
            <p>Oh, and if you roll two "ones" (snake eyes), your current score gets zeroed out. So don’t do that.</p>`;
        })

        function setUpTurn() {
            speech.innerHTML = `<h2>${gameData.players[gameData.index]}'s turn, Roll the Dice!</h2>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
            document.getElementById('roll').addEventListener('click',function(){

            throwDice();

            });
        };

        function throwDice () {
            diceSound.play();
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor(Math.random() * 6) +1; //using ceil could result in zero
            gameData.roll2 = Math.floor(Math.random() * 6) +1;
            speech.innerHTML = `<h2>${gameData.players[gameData.index]}'s turn, Roll the Dice!</h2>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2
            console.log(gameData);

            if ( gameData.rollSum === 2) {
                reeSound.play();
                speech.innerHTML += '<h2>Oh no! Two pigs in a pen! </h2>';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                setTimeout(setUpTurn, 2000);
            }

            else if( gameData.roll1 === 1 || gameData.roll2 === 1) {
                pigSound.play();
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                speech.innerHTML += `<h2>Sorry, one of your rolls was a pig, switching to ${gameData.players[gameData.index]}</h2>`;
                setTimeout(setUpTurn, 2000);
            }

            else {
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <br>or</br> <button id="pass">Pass</button>';

                document.getElementById('rollagain').addEventListener('click', function () {
                    setUpTurn();
                });

                document.getElementById('pass').addEventListener('click', function () {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });

                checkWinningCondition();
            }
        }

        function checkWinningCondition () {
            if ( gameData.score[gameData.index] > gameData.gameEnd) {
                speech.innerHTML = `<h2>${gameData.players[gameData.index]}
                    wins with ${gameData.score[gameData.index]} points! </h2>`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game"
            }

            else {
                showCurrentScore();
            }
        }

        function showCurrentScore() {
            
            playerOne.innerHTML = `<h1><strong>${gameData.players[0]}</strong></h1><h1><strong>${gameData.score[0]}</strong></h1>`;
            playerTwo.innerHTML = `<h1><strong>${gameData.players[1]}</strong></h1><h1><strong>${gameData.score[1]}</strong></h1>`;
        }
    

    
})();
