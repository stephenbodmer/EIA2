//Aufgabe:    05 Canvas: SObjektivorientierte Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe5 {

    export let ski: CanvasRenderingContext2D;

    window.addEventListener("load", skipiste); //wenn Seite vollständig geladen, Funktion skipiste wird aufgerufen

    let imgData: ImageData;
    let movingSkier: Skiers[] = [];
    let fallingSchnee: Schnee[] = [];
    let movingWolken: Wolken[] = [];
    //let movingSonne: Sonne[] = [];


    function skipiste(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ski = canvas.getContext("2d");

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
        function drawTree(x: number, y: number, ski: any): void {
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
        for (let i: number = 0; i < 1000; i++) {
            fallingSchnee[i] = new Schnee(Math.random() * 800, Math.random() * 600);
        }

        //Wolke 
        for (let i: number = 0; i < 3; i++) {
            movingWolken[i] = new Wolken(Math.random() * (-400) + 200, Math.random() * (100 - 30 + 1) + 30);
        }

        // Skifahrer 
        for (let i: number = 0; i < 3; i++) {
            movingSkier[i] = new Skiers(
                350,
                430,
                Math.random() * 8 + 5,
                Math.random() * 8 + 10,
                "hsl(" + Math.random() * 360 + ", 80%, 70%)");
        }

        //Bäume
        for (var i: number = 0; i < 40; i++) {
            drawTree(Math.floor(Math.random() * 550 + 50), Math.floor(Math.random() * 100 + 480), ski);
        }
        
        
        imgData = ski.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } /*funktion Ski*/


    // ------------ANIMATE-----------------------------------------     

    function animate(): void {

        ski.putImageData(imgData, 0, 0);    //Hintergrundbild einsetzen

        //Wolke
        for (let i: number = 0; i < movingWolken.length; i++) {
            let wo: Wolken = movingWolken[i];
            wo.moveWolken();
        }

        //Schnee
        for (let i: number = 0; i < fallingSchnee.length; i++) {
            let sn: Schnee = fallingSchnee[i];
            sn.moveSnow();
        }

        //Skifahrer
        for (let i: number = 0; i < movingSkier.length; i++) {
            let sk: Skiers = movingSkier[i];
            sk.moveSkier();
        }
        window.setTimeout(animate, 20);
    }
}