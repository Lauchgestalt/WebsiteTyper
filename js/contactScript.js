var inputs = document.getElementsByClassName('contactInput');
var elements = document.getElementsByClassName('listElement');
var button = document.getElementById('sendButton');

var activeElem = 0;
elements[0].classList.add('active-form');

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            checkContent();
        }
    })
}

function checkContent(){
    activeElement = document.getElementsByClassName("active-form")[0];
    console.log(activeElement.childNodes[1].nodeName);
    if(activeElement.childNodes[1].nodeName != "INPUT"){
        nextElement();
    } else {
        if(activeElement.childNodes[1].value==""){
            console.log("ERROR: No input");
        } else {
            nextElement();
        }
    }
}

function nextElement() {
    if (activeElem != 4) {
        elements[activeElem].classList.remove('active-form');
        activeElem++;
        elements[activeElem].classList.add('active-form');
        if (activeElem === 4) {
            button.innerHTML = "&#10003;";
        }
    } else {
        console.log("Sent");
    }
}