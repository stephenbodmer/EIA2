//Aufgabe:    05 Canvas: SObjektivorientierte Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", skipiste); //wenn Seite vollständig geladen, Funktion skipiste wird aufgerufen
    var imgData;
    var movingSkier = [];
    var fallingSchnee = [];
    var movingWolken = [];
    //let movingSonne: Sonne[] = [];
    function skipiste() {
        var canvas = document.getElementsByTagName("canvas")[0];
        aufgabe5.ski = canvas.getContext("2d");
        //Himmel
        aufgabe5.ski.fillStyle = "#81DAF5";
        aufgabe5.ski.fillRect(0, 0, 800, 600);
        //Sonne
        aufgabe5.ski.beginPath();
        aufgabe5.ski.strokeStyle = "yellow";
        aufgabe5.ski.arc(700, 100, 50, 0, 2 * Math.PI);
        aufgabe5.ski.stroke();
        aufgabe5.ski.fillStyle = "yellow";
        aufgabe5.ski.fill();
        //Berg 1
        aufgabe5.ski.beginPath();
        aufgabe5.ski.moveTo(200, 150);
        aufgabe5.ski.lineTo(500, 600);
        aufgabe5.ski.lineTo(-100, 800);
        aufgabe5.ski.closePath();
        aufgabe5.ski.strokeStyle = "grey";
        aufgabe5.ski.stroke();
        aufgabe5.ski.fillStyle = "grey";
        aufgabe5.ski.fill();
        //Piste hinten
        aufgabe5.ski.beginPath();
        aufgabe5.ski.strokeStyle = "lightgrey";
        aufgabe5.ski.arc(650, 1370, 1000, 0, 2 * Math.PI);
        aufgabe5.ski.stroke();
        aufgabe5.ski.fillStyle = "white";
        aufgabe5.ski.fill();
        //Berg vorne
        aufgabe5.ski.beginPath();
        aufgabe5.ski.moveTo(80, 200);
        aufgabe5.ski.lineTo(300, 600);
        aufgabe5.ski.lineTo(-100, 600);
        aufgabe5.ski.closePath();
        aufgabe5.ski.strokeStyle = "lightgrey";
        aufgabe5.ski.stroke();
        aufgabe5.ski.fillStyle = "lightgrey";
        aufgabe5.ski.fill();
        //Piste vorne
        aufgabe5.ski.beginPath();
        aufgabe5.ski.strokeStyle = "lightgrey";
        aufgabe5.ski.arc(300, 1750, 1300, 0, 2 * Math.PI);
        aufgabe5.ski.stroke();
        aufgabe5.ski.fillStyle = "white";
        aufgabe5.ski.fill();
        //Seilbahn
        //Pfosten links
        aufgabe5.ski.beginPath();
        aufgabe5.ski.moveTo(245, 190);
        aufgabe5.ski.lineTo(245, 230);
        aufgabe5.ski.closePath();
        aufgabe5.ski.strokeStyle = "black";
        aufgabe5.ski.stroke();
        //Pfosten rechts
        aufgabe5.ski.beginPath();
        aufgabe5.ski.moveTo(750, 350);
        aufgabe5.ski.lineTo(750, 400);
        aufgabe5.ski.closePath();
        aufgabe5.ski.strokeStyle = "black";
        aufgabe5.ski.stroke();
        //Seil
        aufgabe5.ski.beginPath();
        aufgabe5.ski.moveTo(245, 190);
        aufgabe5.ski.lineTo(750, 350);
        aufgabe5.ski.closePath();
        aufgabe5.ski.strokeStyle = "black";
        aufgabe5.ski.stroke();
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
        // Schnee
        for (var i_1 = 0; i_1 < 1000; i_1++) {
            fallingSchnee[i_1] = new aufgabe5.Schnee(Math.random() * 800, Math.random() * 600);
        }
        //Wolke
        for (var i_2 = 0; i_2 < 3; i_2++) {
            movingWolken[i_2] = new aufgabe5.Wolken(Math.random() * (-400) + 200, Math.random() * (100 - 30 + 1) + 30);
        }
        // Skifahrer
        for (var i_3 = 0; i_3 < 3; i_3++) {
            movingSkier[i_3] = new aufgabe5.Skiers(350, 430, Math.random() * 8 + 5, Math.random() * 8 + 10, "hsl(" + Math.random() * 360 + ", 80%, 70%)");
        }
        //Bäume
        for (var i = 0; i < 40; i++) {
            drawTree(Math.floor(Math.random() * 550 + 50), Math.floor(Math.random() * 100 + 480), aufgabe5.ski);
        }
        imgData = aufgabe5.ski.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } /*funktion Ski*/
    // ------------ANIMATE-----------------------------------------
    function animate() {
        aufgabe5.ski.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        //Wolke
        for (var i = 0; i < movingWolken.length; i++) {
            var wo = movingWolken[i];
            wo.moveWolken();
        }
        //Schnee
        for (var i = 0; i < fallingSchnee.length; i++) {
            var sn = fallingSchnee[i];
            sn.moveSnow();
        }
        //Skifahrer
        for (var i = 0; i < movingSkier.length; i++) {
            var sk = movingSkier[i];
            sk.moveSkier();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=hallo.js.map