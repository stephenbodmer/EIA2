var abschluss;
(function (abschluss) {
    window.addEventListener("load", spielwiese);
    var fallingMeteor = [];
    var imgData;
    var score = 0;
    var end = false;
    var img;
    var hitbox = 10;
    var guy = new abschluss.Rakete(400, 500);
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
        //Img wird erstellt damit animate funktioniert und animate/button Funktionen werden ausgef�hrt
        imgData = abschluss.r.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //Zeichnen und Animation der Autos + Zeichnen der Coins
    function animate() {
        window.setTimeout(animate, 20);
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=main.js.map