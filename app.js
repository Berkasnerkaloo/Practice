// Selectors

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box2B = document.querySelector('.box2b');
var colorVal = document.querySelector('#box1Color');
var colorValB = document.querySelector('#box1ColorB');
const box1Button = document.querySelector('#box1Button');
const box1ButtonB = document.querySelector('#box1ButtonB');
const body = document.querySelector('body');
const changeColorButtonText = document.querySelector('#changeColor');

// End of selectors

// *****************Gridbox**************** 


// Box 1 button 

function box1ButtonSend() {
    box2.style.backgroundColor = colorVal.value;
}

colorVal.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("box1Button").click();
    }
});

// End of box 1 Button



// Box 1 color change 

box1.onclick = function(){
    if (box1.style.backgroundColor !== 'purple') {
	box1.style.backgroundColor = 'purple';
    } else {
        box1.style.backgroundColor = '';
    }
}
// End of box 1 color change 


// Dark Mode 

function changeColor() {
    const allBox = document.querySelectorAll(".gridbox");
    for (var i = 0; i < allBox.length; i++) {
        if (allBox[i].style.backgroundColor !== 'black') {
        allBox[i].style.backgroundColor = "black";
        allBox[i].style.color = "#fff";
        box1.style.backgroundColor = 'bbb';
        body.style.backgroundColor = '#2c343b';
        changeColorButtonText.innerHTML = "Change Back"
        } else {
            allBox[i].style.backgroundColor = '';
            allBox[i].style.color = "";
            box1.style.backgroundColor = '';
            body.style.backgroundColor = '';
            changeColorButtonText.innerHTML = "Change To Dark Mode"
        }
    }
}

// End of Dark Mode 

// ****************End of Gridbox************* 



// *****************GridboxB***************

// Box 1B button 

function box1BButtonSend() {
    box2B.style.backgroundColor = colorValB.value;
}


colorValB.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("box1ButtonB").click();
    }
});

// End of Box 1B button 

// Change font on gridbox B

function changeColorB() {
    const bText = document.getElementsByClassName("bText");
    for (var i = 0; i < bText.length; i++) {
        if (bText[i].style.color !== 'white') {
        bText[i].style.color = 'white';
        bText[i].style.background = 'initial';
        bText[i].style.webkitTextFillColor = 'initial';
        bText[i].style.fontSize = '20px';
        bText[i].style.fontStyle = 'italic';
    } else {
        bText[i].style.color = '';
        bText[i].style.background = '';
        bText[i].style.webkitTextFillColor = '';
        bText[i].style.fontSize = '';
        bText[i].style.fontStyle = '';
    }
}
}

// End of gridbox B color




    










