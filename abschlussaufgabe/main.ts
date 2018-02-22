namespace abschluss{

export let r: CanvasRenderingContext2D;

window.addEventListener("load", spielwiese);

let imgData: ImageData;
let fallingMeteor: Meteorschauer[] = [];
let movingRakete: Rakete[]=[];
//let movingWolken: Wolken[]=[];

function spielwiese(): void {

  let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
  r = canvas.getContext("2d");

    //Background
    r.fillStyle = "#071019";
    r.fillRect(0, 0, 800, 600);

    //Sun
    r.beginPath();
    r.strokeStyle = "#B43104";
    r.arc(700, 100, 50, 0, 2 * Math.PI);
    r.stroke();
    r.fillStyle = "#B43104";
    r.fill();


    // Meteorschauer
    for (let i: number = 0; i < 10; i++) {
        fallingMeteor[i] = new Meteorschauer(Math.random() * 800, Math.random() * 600);
    }
    for (let i: number = 0; i < 10; i++) {
        movingRakete[i] = new Rakete(Math.random() * 800, Math.random() * 600);
    }


    imgData = r.getImageData(0, 0, canvas.width, canvas.height);

    animate();
}



// Animate
function animate(): void {

    r.putImageData(imgData, 0, 0);    //Hintergrundbild einsetzen

    //Schnee
    for (let i: number = 0; i < fallingMeteor.length; i++) {
        let meteor: Meteorschauer = fallingMeteor[i];
        meteor.moveMeteor();
    }

    for (let i: number = 0; i < movingRakete.length; i++) {
        let ra: Rakete = movingRakete[i];
        ra.moveRakete();
    }



    window.setTimeout(animate, 10);
}

}
