(function () {

    'use strict';

    window.addEventListener('scroll', reveal);

    function reveal (){
        const reveals = document.querySelectorAll('.reveal');

        for ( let i = 0; i <reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealpoint = 950;
            const crashSound = new Audio('media/crashsound.wav');

            if (revealtop <= windowHeight-revealpoint) {
                reveals[i].classList.add('appear');
            }

            else {
                reveals[i].classList.remove('appear');
            }
        }
    }

    
})();
