(function () {

    'use strict';


    // moving car at scroll window
    window.addEventListener('scroll', reveal);

    function reveal (){
        const reveals = document.querySelectorAll('.reveal');

        for ( let i = 0; i <reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealpoint = 950;

            if (revealtop < windowHeight-revealpoint) {
                reveals[i].classList.add('appear');     //car moves in
            }

            else {
                reveals[i].classList.remove('appear');  //car moves out
            }
        }
    }

    const clickPokeball = document.querySelector("#pokemon");
    const showOne = document.querySelector("#text1");
    const clickCheetos = document.querySelector("#cheetos");
    const showTwo = document.querySelector("#text2");
    const clickMusic = document.querySelector("#music");
    const stopMusic = document.querySelector("#mute");
    
    const pokeballSound = new Audio('media/pokeballSound.mp3');
    const chipSound = new Audio('media/chips.wav');
    const driveSound = new Audio('media/driving.wav');

    //click image
    clickPokeball.addEventListener("click", ()=> {
        showOne.classList.toggle("show1");  //toggle hide/show
        pokeballSound.play();
        pokeballSound.volume(0.5);
    });

    clickCheetos.addEventListener("click", ()=> {
        showTwo.classList.toggle("show2");
        chipSound.play();
    });

    //background sound buttons
    clickMusic.addEventListener("click", () => {
        driveSound.play();
    })

    stopMusic.addEventListener("click", () => {
        driveSound.pause();
    })


})();
