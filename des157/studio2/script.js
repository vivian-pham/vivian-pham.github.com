(function () {

    'use strict';

    let windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    lastTop;
    
    document.getElementById("btn").addEventListener("click", showMemory);

      let memory = document.querySelectorAll(".memory")

      function showMemory() {

        for (i = 0; i < memory.length; ++i) {
          memory[i].showMemory();
        }

        if (memory.style.display === "none") {
          memory.style.display = "block";
        } else {
          memory.style.display = "none";
        }

        return
      };


    window.addEventListener('scroll', function(event) {
    const carA = document.getElementById('honda');
    const carB = document.getElementById('runner');
    const carC = document.getElementById('mazda');
    const carD = document.getElementById('corolla');
    const top = carA.getBoundingClientRect().top;
    const offset = top - windowHeight;
    const first = document.getElementById('crash1');
    const second = document.getElementById('crash2');
    const third = document.getElementById('crash3');
    const fourth = document.getElementById('crash4');
      
      if (offset > 100) {
      	carA.classList.remove('vroom');
        carB.classList.remove('vroom');
        carC.classList.remove('vroom');
        carD.classList.remove('vroom');
        first.classList.remove('vroom');
        second.classList.remove('vroom');
        third.classList.remove('vroom');
        fourth.classList.remove('vroom');
        return;
      }
      
      if (top < windowHeight / 2 && top > lastTop) {
      	carA.classList.remove('vroom');
        carB.classList.remove('vroom');
        carC.classList.remove('vroom');
        carD.classList.remove('vroom');
        first.classList.remove('vroom');
        second.classList.remove('vroom');
        third.classList.remove('vroom');
        fourth.classList.remove('vroom');
      }
      
      if (carA.className.indexOf('vroom') === -1 && top < 
      lastTop) {
      	carA.classList.add('vroom');
        carB.classList.add('vroom');
        carC.classList.add('vroom');
        carD.classList.add('vroom');
        first.classList.add('vroom');
        second.classList.add('vroom');
        third.classList.add('vroom');
        fourth.classList.add('vroom');
      }
      
      lastTop = top;
      
    });

    
})();
