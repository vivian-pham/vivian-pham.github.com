(function () {

    'use strict';
    
    //first window mark = 3000px
    //second = 6730px

    const crashSound = new Audio('media/crashsound.wav');

    window.addEventListener('scroll', reveal);

    function reveal (){
        const reveals = document.querySelectorAll('.reveal');

        for ( let i = 0; i <reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealpoint = 700;

            if (revealtop < windowHeight-revealpoint) {
                reveals[i].classList.add('appear');
                
                // crashSound.load();
                // crashSound.play();
                // crashSound.loop = false;
                // crashSound.volume = 0.1;
                
            }

            else {
                reveals[i].classList.remove('active');
                crashSound.pause();
            }
        }
    }
    

    
})();
