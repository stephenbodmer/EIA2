var abschluss;
(function (abschluss) {
    window.addEventListener("load", spielwiese);
    var imgData;
    var score = 0;
    var end = false;
    var fallingMeteor = [];
    var movingRakete;
    // let movingRakete: Rakete = new Rakete(2,3);
    function spielwiese() {
        var canvas = document.getElementsByTagName("canvas")[0];
        abschluss.r = canvas.getContext("2d");
        //Background
        abschluss.r.fillStyle = "#071019";
        abschluss.r.fillRect(0, 0, 800, 600);
        //Sun
        abschluss.r.beginPath();
        abschluss.r.strokeStyle = "#B43104";
        abschluss.r.arc(700, 100, 50, 0, 2 * Math.PI);
        abschluss.r.stroke();
        abschluss.r.fillStyle = "#B43104";
        abschluss.r.fill();
        //Meteorschauer
        for (var i = 0; i < 10; i++) {
            fallingMeteor[i] = new abschluss.Meteorschauer(Math.random() * 800, Math.random() * 600);
        }
        movingRakete = new abschluss.Rakete(300, 300);
        imgData = abschluss.r.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    // Animate
    function animate() {
        abschluss.r.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        //Meteorschauer
        for (var i = 0; i < fallingMeteor.length; i++) {
            var meteor = fallingMeteor[i];
            meteor.moveMeteor();
        }
        window.setTimeout(animate, 10);
    }
    //
    // function buttondraw(): void {
    //     let buttonup: HTMLButtonElement = document.createElement("button");
    //     buttonup.innerText = "UP";
    //     buttonup.id = "ButtonUp";
    //     buttonup.addEventListener("click", moveUp);
    //     document.body.appendChild(buttonup);
    //
    //     let buttonleft: HTMLButtonElement = document.createElement("button");
    //     buttonleft.innerText = "LEFT";
    //     buttonleft.id = "ButtonLeft";
    //     buttonleft.addEventListener("click", moveLeft);
    //     document.body.appendChild(buttonleft);
    //
    //     let buttonright: HTMLButtonElement = document.createElement("button");
    //     buttonright.innerText = "RIGHT";
    //     buttonright.id = "ButtonRight";
    //     buttonright.addEventListener("click", moveRight);
    //     document.body.appendChild(buttonright);
    //
    //     let buttondown: HTMLButtonElement = document.createElement("button");
    //     buttondown.innerText = "DOWN";
    //     buttondown.id = "ButtonDown";
    //     buttondown.addEventListener("click", moveDown);
    //     document.body.appendChild(buttondown);
    // }
    //
    //
    function moveUp() {
        movingRakete.y -= 10;
    }
    function moveDown() {
        movingRakete.y += 10;
    }
    function moveLeft() {
        movingRakete.x -= 10;
    }
    function moveRight() {
        movingRakete.x += 10;
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=main.js.map