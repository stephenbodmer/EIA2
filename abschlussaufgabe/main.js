var abschluss;
(function (abschluss) {
    window.addEventListener("load", spielwiese);
    var imgData;
    var score = 0;
    var end = false;
    var hitbox = 10;
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
        buttondraw();
    }
    // Animate
    function animate() {
        abschluss.r.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        //Meteorschauer
        for (var i = 0; i < fallingMeteor.length; i++) {
            var meteor = fallingMeteor[i];
            meteor.moveMeteor();
        }
        //Rakete
        movingRakete.moveRakete();
        window.setTimeout(animate, 10);
    }
    function buttondraw() {
        var buttonup = document.createElement("button");
        buttonup.innerText = "↑";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", hoch);
        document.body.appendChild(buttonup);
        var buttonleft = document.createElement("button");
        buttonleft.innerText = "←";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", li);
        document.body.appendChild(buttonleft);
        var buttonright = document.createElement("button");
        buttonright.innerText = "→";
        buttonright.id = "ButtonRight";
        buttonright.addEventListener("click", re);
        document.body.appendChild(buttonright);
        var buttondown = document.createElement("button");
        buttondown.innerText = "↓";
        buttondown.id = "ButtonDown";
        buttondown.addEventListener("click", runter);
        document.body.appendChild(buttondown);
    }
    function hoch() {
        movingRakete.y -= 10;
    }
    function runter() {
        movingRakete.y += 10;
    }
    function li() {
        movingRakete.x -= 10;
    }
    function re() {
        movingRakete.x += 10;
    }
    function collision() {
        for (var i = 1; i < fallingMeteor.length; i++) {
            var x = void 0;
            var y = void 0;
            x = Math.abs(fallingMeteor[i].x - movingRakete.x);
            y = Math.abs(fallingMeteor[i].y - movingRakete.y);
            if (x < hitbox && y < hitbox) {
                function loose() {
                    alert("Game Over");
                    location.reload();
                }
            }
        }
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=main.js.map