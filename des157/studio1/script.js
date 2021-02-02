(function(){
    'use strict';
    console.log("reading js");

    const formInput = document.querySelector('#formInput');
    const specialOutput = document.querySelector('#specialOutput');

    formInput.addEventListener('submit', function(event){

        event.preventDefault();
        const fname = document.querySelector('#fname').value;
        const veggie = document.querySelector('#veggie').value;
        const protein = document.querySelector('#protein').value;
        const method = document.querySelector('#method').value;
        const texture = document.querySelector('#texture').value;
        const adjOne = document.querySelector('#adjOne').value;
        const adjTwo = document.querySelector('#adjTwo').value;
        const flavor = document.querySelector('#flavor').value;
        
        if(fname && veggie && protein && method && texture && adjOne && adjTwo && flavor){

            let mySpecial= `Chef ${fname} has prepared a ${adjOne} dish for tonight. Featuring a
            special, imported cut of ${protein} that was ${method} with attention and care, to achieve the 
            ${texture}-est level known to mankind. This entree is truly ${adjTwo} when paired with a ${veggie} emulsion 
            infused with a ${flavor} sauce to complete the dish. <br> <br> <br> Bon Appetité!`;

            specialOutput.innerHTML = mySpecial;
            specialOutput.className = "output";
        }

        else{
            let mySpecial = "Complete all parts the form to create your special!";
            specialOutput.innerHTML = mySpecial;
            specialOutput.className = "error";
        };

    });

}());
