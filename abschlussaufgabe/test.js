var l;
(function (l) {
    window.addEventListener("load", spielwiese);
    var imgData;
    var score = 0;
    var end = false;
    var fallingMeteor = [];
    // var movingRakete: Rakete[]=[];
    var movingRakete = new Rakete(400, 300);
    //let movingWolken: Wolken[]=[];
    function spielwiese() {
        var canvas = document.getElementsByTagName("canvas")[0];
        l.r = canvas.getContext("2d");
        //Background
        l.r.fillStyle = "#071019";
        l.r.fillRect(0, 0, 800, 600);
        //Sun
        l.r.beginPath();
        l.r.strokeStyle = "#B43104";
        l.r.arc(700, 100, 50, 0, 2 * Math.PI);
        l.r.stroke();
        l.r.fillStyle = "#B43104";
        l.r.fill();
        // Meteorschauer
        // for (let i: number = 0; i < 10; i++) {
        //     fallingMeteor[i] = new Meteorschauer(Math.random() * 800, Math.random() * 600);
        // }
        // for (let i: number = 0; i < 1; i++) {
        //     movingRakete[i] = new Rakete(300,300);
        // }
        imgData = l.r.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        buttondraw();
    }
    // Animate
    function animate() {
        l.r.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        //Schnee
        for (var i = 0; i < fallingMeteor.length; i++) {
            var meteor = fallingMeteor[i];
            meteor.moveMeteor();
        }
        // for (let i: number = 0; i < 1; i++) {
        //     let ra: Rakete = movingRakete[i];
        //     ra.moveRakete();
        // }
        window.setTimeout(animate, 10);
    }
    function buttondraw() {
        var buttonup = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", moveUp);
        document.body.appendChild(buttonup);
        var buttonleft = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", moveLeft);
        document.body.appendChild(buttonleft);
        var buttonright = document.createElement("button");
        buttonright.innerText = "RIGHT";
        buttonright.id = "ButtonRight";
        buttonright.addEventListener("click", moveRight);
        document.body.appendChild(buttonright);
        var buttondown = document.createElement("button");
        buttondown.innerText = "DOWN";
        buttondown.id = "ButtonDown";
        buttondown.addEventListener("click", moveDown);
        document.body.appendChild(buttondown);
    }
    function moveUp() {
        rocket.y -= 10;
    }
    function moveDown() {
        rocket.y += 10;
    }
    function moveLeft() {
        rocket.x -= 10;
    }
    function moveRight() {
        rocket.x += 10;
    }
})(l || (l = {}));
//# sourceMappingURL=test.js.map