var abschluss;
(function (abschluss) {
    window.addEventListener("load", spielwiese);
    var imgData;
    var fallingMeteor = [];
    var movingRakete = [];
    //let movingWolken: Wolken[]=[];
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
        // Meteorschauer
        for (var i = 0; i < 10; i++) {
            fallingMeteor[i] = new abschluss.Meteorschauer(Math.random() * 800, Math.random() * 600);
        }
        for (var i = 0; i < 10; i++) {
            movingRakete[i] = new abschluss.Rakete(Math.random() * 800, Math.random() * 600);
        }
        imgData = abschluss.r.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    // Animate
    function animate() {
        abschluss.r.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        //Schnee
        for (var i = 0; i < fallingMeteor.length; i++) {
            var meteor = fallingMeteor[i];
            meteor.moveMeteor();
        }
        for (var i = 0; i < movingRakete.length; i++) {
            var ra = movingRakete[i];
            ra.moveRakete();
        }
        window.setTimeout(animate, 10);
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=main.js.map