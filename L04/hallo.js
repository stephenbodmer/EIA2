//Aufgabe:    04 Canvas: Skipiste mit Funktion und Array
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      10.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe4;
(function (aufgabe4) {
    window.addEventListener("load", skipiste); //wenn Seite vollständig geladen, Funktion skipiste wird aufgerufen
    var ski;
    console.log(ski);
    var schneeX = [];
    var schneeY = [];
    var sonneX = [];
    var sonneY = [];
    var wolkeX = [];
    var wolkeY = [];
    var imgData;
    var skier = [];
    function skipiste() {
        var canvas = document.getElementsByTagName("canvas")[0];
        ski = canvas.getContext("2d");
        //Himmel
        ski.fillStyle = "#81DAF5";
        ski.fillRect(0, 0, 800, 600);
        //Berg 1
        ski.beginPath();
        ski.moveTo(200, 150);
        ski.lineTo(500, 600);
        ski.lineTo(-100, 800);
        ski.closePath();
        ski.strokeStyle = "grey";
        ski.stroke();
        ski.fillStyle = "grey";
        ski.fill();
        //Piste hinten
        ski.beginPath();
        ski.strokeStyle = "lightgrey";
        ski.arc(650, 1370, 1000, 0, 2 * Math.PI);
        ski.stroke();
        ski.fillStyle = "white";
        ski.fill();
        //Berg vorne
        ski.beginPath();
        ski.moveTo(80, 200);
        ski.lineTo(300, 600);
        ski.lineTo(-100, 600);
        ski.closePath();
        ski.strokeStyle = "lightgrey";
        ski.stroke();
        ski.fillStyle = "lightgrey";
        ski.fill();
        //Piste vorne
        ski.beginPath();
        ski.strokeStyle = "lightgrey";
        ski.arc(300, 1750, 1300, 0, 2 * Math.PI);
        ski.stroke();
        ski.fillStyle = "white";
        ski.fill();
        //Seilbahn
        //Pfosten links
        ski.beginPath();
        ski.moveTo(245, 190);
        ski.lineTo(245, 230);
        ski.closePath();
        ski.strokeStyle = "black";
        ski.stroke();
        //Pfosten rechts
        ski.beginPath();
        ski.moveTo(750, 350);
        ski.lineTo(750, 400);
        ski.closePath();
        ski.strokeStyle = "black";
        ski.stroke();
        //Seil
        ski.beginPath();
        ski.moveTo(245, 190);
        ski.lineTo(750, 350);
        ski.closePath();
        ski.strokeStyle = "black";
        ski.stroke();
        //Bäume
        for (var i = 0; i < 40; i++) {
            drawTree(Math.floor(Math.random() * 550 + 50), Math.floor(Math.random() * 100 + 480), ski);
        }
        // Schnee
        for (var i_1 = 0; i_1 < 1000; i_1++) {
            schneeX[i_1] = Math.random() * 800;
            schneeY[i_1] = Math.random() * 600;
        }
        //Sonne 
        for (var i_2 = 0; i_2 < 1; i_2++) {
            sonneX[i_2] = Math.random() * (770 - 360 + 1) + 360;
            sonneY[i_2] = Math.random() * (100 - 30 + 1) + 30;
        }
        //Wolke 
        for (var i_3 = 0; i_3 < 3; i_3++) {
            wolkeX[i_3] = Math.random() * -400 + 200;
            wolkeY[i_3] = Math.random() * (100 - 30 + 1) + 30;
        }
        // Skifahrer 
        for (var i_4 = 0; i_4 < 3; i_4++) {
            skier[i_4] = {
                x: 350,
                y: 430,
                dx: Math.random() * 8 + 5,
                dy: Math.random() * 8 + 10,
                color: "hsl(" + Math.random() * 360 + ", 80%, 70%)"
            };
        }
        imgData = ski.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //Bäume
    function drawTree(x, y, ski) {
        ski.fillStyle = "brown";
        ski.fillRect(x, y, 8, 10);
        ski.beginPath();
        ski.moveTo(x - 10, y);
        ski.lineTo(x + 15, y);
        ski.lineTo(x + 4, y - 50);
        ski.lineTo(x - 8, y);
        ski.fillStyle = "green";
        ski.fill();
        ski.closePath();
    }
    //Sonne
    function createSonne(x, y, ski) {
        ski.beginPath();
        ski.strokeStyle = "yellow";
        ski.arc(x, y, 50, 0, 2 * Math.PI);
        ski.stroke();
        ski.fillStyle = "yellow";
        ski.fill();
    }
    //Schnee
    function createSnow(x, y, ski) {
        ski.beginPath();
        ski.arc(x, y, 2, 0 * Math.PI, 2.0 * Math.PI);
        ski.strokeStyle = "lightgrey";
        ski.stroke();
        ski.fillStyle = "white";
        ski.fill();
        ski.closePath();
    }
    //Wolke
    function createWolke(x, y, ski) {
        ski.beginPath();
        ski.arc(x + 100, y + 75, 25, 0, 2 * Math.PI);
        ski.arc(x + 110, y + 50, 30, 0, 2 * Math.PI);
        ski.arc(x + 125, y + 50, 30, 0, 2 * Math.PI);
        ski.arc(x + 130, y + 70, 40, 0, 2 * Math.PI);
        ski.arc(x + 175, y + 70, 40, 0, 2 * Math.PI);
        ski.arc(x + 200, y + 70, 30, 0, 2 * Math.PI);
        ski.strokeStyle = "darkgrey";
        ski.stroke();
        ski.fillStyle = "white";
        ski.fill();
    }
    //FSkifahrer 
    function drawSkier(_skier) {
        _skier.x += _skier.dx;
        _skier.y += _skier.dy; // um andere Bewegungsmuster zu finden 
        ski.fillStyle = _skier.color;
        ski.fillRect(_skier.x, _skier.y, 10, -15);
        ski.beginPath();
        ski.arc(_skier.x + 10, _skier.y - 25, 5, 0, 2 * Math.PI);
        ski.fill();
        ski.beginPath();
        ski.moveTo(_skier.x - 30, _skier.y - 15);
        ski.lineTo(_skier.x + 40, _skier.y + 10);
        ski.stroke();
    }
    // ------------ANIMATE-----------------------------------------     
    function animate() {
        ski.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        //Sonne
        for (var i = 0; i < sonneX.length; i++) {
            if (sonneX[i] > 800) {
                sonneX[i] = 0;
            }
            sonneX[i] += 0.5;
            sonneY[i] += 0.01;
            createSonne(sonneX[i], sonneY[i], ski);
        }
        //Wolke
        for (var i = 0; i < wolkeX.length; i++) {
            if (wolkeX[i] > 800) {
                wolkeX[i] = 0;
            }
            wolkeX[i] += 1.5 * Math.random();
            createWolke(wolkeX[i], wolkeY[i], ski);
        }
        //Schnee
        for (var i = 0; i < schneeY.length; i++) {
            if (schneeY[i] > 600) {
                schneeY[i] = 0;
            }
            schneeY[i] += Math.random();
            createSnow(schneeX[i], schneeY[i], ski);
        }
        //Skifahrer
        for (var i = 0; i < skier.length; i++) {
            drawSkier(skier[i]);
            if (skier[i].x > 800, skier[i].y > 650) {
                skier[i].x = 350;
                skier[i].y = 430; // Winkel in dem der Skier den Berg unter fährt 
            }
            skier[i].x += 10;
            skier[i].y += -10;
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe4 || (aufgabe4 = {}));
//# sourceMappingURL=hallo.js.map