let firstButton = document.getElementById('firstButton');
let secondButton = document.getElementById('secondButton');
const body = document.body;

function swapElements(element1, element2) {
    const temp = document.createElement("div");
    element1.parentNode.insertBefore(temp, element1);
    element2.parentNode.insertBefore(element1, element2);
    temp.parentNode.insertBefore(element2, temp);
    temp.remove();
}

firstButton.addEventListener('click', ()=> {
    if(firstButton.className == "btn"){
        alert("Buena decisión!!");
    }
    else{
        alert("Buen intento, intenta de nuevo");
    }
});

secondButton.addEventListener('click', ()=> {
    if(secondButton.className == "btn"){
        alert("Buena decisión!!");
    }
    else{
        alert("Buen intento, intenta de nuevo");
    }
});

firstButton.addEventListener('mouseenter', () => {
    if(firstButton.className != "btn"){                
        swapElements(firstButton, secondButton);
    }
});

secondButton.addEventListener('mouseenter', () => {
    if(secondButton.className != "btn"){                
        swapElements(firstButton, secondButton);        
    }
});

document.addEventListener('mousemove', (event) => {
    let yesButton = firstButton;
    let noButton = secondButton;
    if(firstButton.className != "btn"){
        yesButton = secondButton;
        noButton = firstButton;
    }

    const yesButtonPosition = yesButton.getBoundingClientRect();
    const noButtonPosition = noButton.getBoundingClientRect();
    
    const yesButtonCenterX = yesButtonPosition.left + yesButtonPosition.width / 2;
    const yesButtonCenterY = yesButtonPosition.top + yesButtonPosition.height / 2;
    const noButtonCenterX = noButtonPosition.left + noButtonPosition.width / 2;
    const noButtonCenterY = noButtonPosition.top + noButtonPosition.height / 2;

    const distanceToYes = Math.sqrt(
        Math.pow(event.clientX - yesButtonCenterX, 2) +
        Math.pow(event.clientY - yesButtonCenterY, 2)
    );

    const distanceToNo = Math.sqrt(
        Math.pow(event.clientX - noButtonCenterX, 2) +
        Math.pow(event.clientY - noButtonCenterY, 2)
    );
    
    const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
    let intensity;

    if (distanceToYes < distanceToNo) {        
        intensity = Math.min(1, distanceToYes / maxDistance);
        body.style.backgroundColor = `rgb(255, ${255 - (200 * (1 - intensity))}, ${150 * (1 - intensity)})`;
    } else {
        intensity = Math.min(1, distanceToNo / maxDistance);
        body.style.backgroundColor = `rgb(255, ${255 * intensity}, ${255 * intensity})`;
    }
});
