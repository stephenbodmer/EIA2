//Aufgabe:    02 Canvas: Skipiste mit Funktion
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      20.10.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe2;
(function (aufgabe2) {
    window.addEventListener("load", skipiste);
    function skipiste() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        var ski = canvas.getContext("2d");
        console.log(ski);
        //Himmel
        ski.fillStyle = "#81DAF5";
        ski.fillRect(0, 0, 800, 600);
        //Sonne
        ski.beginPath();
        ski.strokeStyle = "yellow";
        ski.arc(700, 100, 50, 0, 2 * Math.PI);
        ski.stroke();
        ski.fillStyle = "yellow";
        ski.fill();
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
        //Wolke
        ski.beginPath();
        ski.arc(100, 75, 25, 0, 2 * Math.PI);
        ski.arc(110, 50, 30, 0, 2 * Math.PI);
        ski.arc(125, 50, 30, 0, 2 * Math.PI);
        ski.arc(130, 70, 40, 0, 2 * Math.PI);
        ski.arc(175, 70, 40, 0, 2 * Math.PI);
        ski.arc(200, 70, 30, 0, 2 * Math.PI);
        ski.strokeStyle = "darkgrey";
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
        for (var i = 0; i < 1000; i++) {
            createSnow(Math.floor(Math.random() * (800 + 1)), Math.floor(Math.random() * (600 + 1)), ski);
        }
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
        function createSnow(x, y, ski) {
            ski.beginPath();
            ski.arc(x, y, 2, 0 * Math.PI, 2.0 * Math.PI);
            ski.strokeStyle = "lightgrey";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();
            ski.closePath();
        }
    }
})(aufgabe2 || (aufgabe2 = {}));
//# sourceMappingURL=hallo.js.map