//Aufgabe:    06 Canvas: Polymorphe Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      26.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe6;
(function (aufgabe6) {
    window.addEventListener("load", skipiste); //wenn Seite vollständig geladen, Funktion skipiste wird aufgerufen
    var shape = [];
    var imgData;
    function skipiste() {
        var canvas = document.getElementsByTagName("canvas")[0];
        aufgabe6.ski = canvas.getContext("2d");
        //Himmel
        aufgabe6.ski.fillStyle = "#81DAF5";
        aufgabe6.ski.fillRect(0, 0, 800, 600);
        //Sonne
        aufgabe6.ski.beginPath();
        aufgabe6.ski.strokeStyle = "yellow";
        aufgabe6.ski.arc(700, 100, 50, 0, 2 * Math.PI);
        aufgabe6.ski.stroke();
        aufgabe6.ski.fillStyle = "yellow";
        aufgabe6.ski.fill();
        //Berg 1
        aufgabe6.ski.beginPath();
        aufgabe6.ski.moveTo(200, 150);
        aufgabe6.ski.lineTo(500, 600);
        aufgabe6.ski.lineTo(-100, 800);
        aufgabe6.ski.closePath();
        aufgabe6.ski.strokeStyle = "grey";
        aufgabe6.ski.stroke();
        aufgabe6.ski.fillStyle = "grey";
        aufgabe6.ski.fill();
        //Piste hinten
        aufgabe6.ski.beginPath();
        aufgabe6.ski.strokeStyle = "lightgrey";
        aufgabe6.ski.arc(650, 1370, 1000, 0, 2 * Math.PI);
        aufgabe6.ski.stroke();
        aufgabe6.ski.fillStyle = "white";
        aufgabe6.ski.fill();
        //Berg vorne
        aufgabe6.ski.beginPath();
        aufgabe6.ski.moveTo(80, 200);
        aufgabe6.ski.lineTo(300, 600);
        aufgabe6.ski.lineTo(-100, 600);
        aufgabe6.ski.closePath();
        aufgabe6.ski.strokeStyle = "lightgrey";
        aufgabe6.ski.stroke();
        aufgabe6.ski.fillStyle = "lightgrey";
        aufgabe6.ski.fill();
        //Piste vorne
        aufgabe6.ski.beginPath();
        aufgabe6.ski.strokeStyle = "lightgrey";
        aufgabe6.ski.arc(300, 1750, 1300, 0, 2 * Math.PI);
        aufgabe6.ski.stroke();
        aufgabe6.ski.fillStyle = "white";
        aufgabe6.ski.fill();
        //Seilbahn
        //Pfosten links
        aufgabe6.ski.beginPath();
        aufgabe6.ski.moveTo(245, 190);
        aufgabe6.ski.lineTo(245, 230);
        aufgabe6.ski.closePath();
        aufgabe6.ski.strokeStyle = "black";
        aufgabe6.ski.stroke();
        //Pfosten rechts
        aufgabe6.ski.beginPath();
        aufgabe6.ski.moveTo(750, 350);
        aufgabe6.ski.lineTo(750, 400);
        aufgabe6.ski.closePath();
        aufgabe6.ski.strokeStyle = "black";
        aufgabe6.ski.stroke();
        //Seil
        aufgabe6.ski.beginPath();
        aufgabe6.ski.moveTo(245, 190);
        aufgabe6.ski.lineTo(750, 350);
        aufgabe6.ski.closePath();
        aufgabe6.ski.strokeStyle = "black";
        aufgabe6.ski.stroke();
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
        for (var i_1 = 0; i_1 < 500; i_1++) {
            var snow = new aufgabe6.Schnee(Math.random() * 800, Math.random() * 600);
            shape.push(snow);
        }
        //Wolke
        for (var i_2 = 0; i_2 < 3; i_2++) {
            var cloud = new aufgabe6.Wolken(Math.random() * (-400) + 200, Math.random() * (100 - 30 + 1) + 30);
            shape.push(cloud);
        }
        // Skifahrer
        for (var i_3 = 0; i_3 < 3; i_3++) {
            var skier = new aufgabe6.Skiers(350, 430, Math.random() * 8 + 5, Math.random() * 8 + 10, "hsl(" + Math.random() * 360 + ", 80%, 70%)");
            shape.push(skier);
        }
        //Bäume
        for (var i = 0; i < 40; i++) {
            drawTree(Math.floor(Math.random() * 550 + 50), Math.floor(Math.random() * 100 + 480), aufgabe6.ski);
        }
        imgData = aufgabe6.ski.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } /*funktion Ski*/
    function animate() {
        aufgabe6.ski.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        for (var i = 0; i < shape.length; i++) {
            var s = shape[i];
            console.log(shape[i]);
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=hallo.js.map