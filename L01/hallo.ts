window.addEventListener("load", skipiste);

function skipiste(): void {

    var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    
    var ski: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(ski);

    //Himmel
     //Verlauf fehlt noch
    ski.fillStyle = "#81DAF5";
    ski.fillRect(0, 0, 800, 600);
    //ski.createLinearGradient(100, 100, 50, 40) : CanvasGradient;
    
    //Sonne
     //Verlauf fehlt noch
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
    ski.beginPath();
    ski.moveTo(80, 230);
    ski.lineTo(85, 250);
    ski.lineTo(75, 250);
    ski.closePath();
    ski.fillStyle = "darkgreen";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(90, 330);
    ski.lineTo(95, 350);
    ski.lineTo(85, 350);
    ski.closePath();
    ski.fillStyle = "darkgreen";
    ski.fill();
   
    ski.beginPath();
    ski.moveTo(50, 430);
    ski.lineTo(55, 450);
    ski.lineTo(45, 450);
    ski.closePath();
    ski.fillStyle = "darkgreen";
    ski.fill(); 
    
    ski.beginPath();
    ski.moveTo(110, 380);
    ski.lineTo(115, 400);
    ski.lineTo(105, 400);
    ski.closePath();
    ski.fillStyle = "darkgreen";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(70, 410);
    ski.lineTo(75, 430);
    ski.lineTo(65, 430);
    ski.closePath();
    ski.fillStyle = "darkgreen";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(120, 410);
    ski.lineTo(125, 430);
    ski.lineTo(115, 430);
    ski.closePath();
    ski.fillStyle = "darkgreen";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(150, 430);
    ski.lineTo(155, 450);
    ski.lineTo(145, 450);
    ski.closePath();
    ski.fillStyle = "darkgreen";
    ski.fill();
    
}