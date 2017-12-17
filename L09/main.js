//Aufgabe:    09
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      09.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    var currentLetter;
    var alphabet = [];
    function init() {
        for (var i = 65; i < 91; i++) {
            alphabet.push(String.fromCharCode(i));
        }
        for (var i = 0; i < alphabet.length; i++) {
            makeDiv(alphabet[i]);
        }
        makeLetter();
        console.log(alphabet);
    }
    function makeDiv(_alphabet) {
        var div = document.createElement("div");
        div.addEventListener("mousedown", handleMouseClick);
        div.innerText = _alphabet;
        div.style.border = "solid 1px";
        div.style.display = "inline";
        div.style.margin = "0 10px";
        div.id = _alphabet;
        div.className = "letters";
        document.body.appendChild(div);
    }
    function handleMouseClick(_event) {
        var klicken = _event.target;
        klicken.style.color = "aqua";
        currentLetter = klicken.id;
        var divList = document.getElementsByClassName("letters");
        for (var i = 0; i < divList.length; i++) {
            if (currentLetter != divList[i].id) {
                divList[i].style.color = "black";
            }
        }
    }
    function makeLetter(_event) {
        var letter = document.createElement("div");
        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "90%";
        letter.style.height = "300px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "2px";
        letter.id = "letterspace";
        letter.addEventListener("click", writeLetter);
        document.body.appendChild(letter);
    }
    function writeLetter(_event) {
        var b = document.createElement("div");
        b.innerText = currentLetter;
        b.style.color = "white";
        b.style.width = "30px";
        b.style.height = "30px";
        b.style.margin = "1px";
        b.style.fontSize = "20px";
        b.style.textAlign = "center";
        b.style.position = "absolute";
        b.style.left = _event.pageX + "px";
        b.style.top = _event.pageY + "px";
        b.addEventListener("click", writeLetter);
        document.body.appendChild(b);
        var clicking = _event.target;
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=main.js.map