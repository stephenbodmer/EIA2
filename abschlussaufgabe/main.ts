namespace abschluss{

export let r: CanvasRenderingContext2D;

window.addEventListener("load", spielwiese);

let imgData: ImageData;
let score: number = 0;
let end: boolean = false;
let hitbox: number = 10;
var fallingMeteor: Meteorschauer[] = [];
var movingRakete: Rakete;
// let movingRakete: Rakete = new Rakete(2,3);


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


    //Meteorschauer
    for (let i: number = 0; i < 10; i++) {
        fallingMeteor[i] = new Meteorschauer(Math.random() * 800, Math.random() * 600);
    }

    movingRakete = new Rakete(300,300);

    imgData = r.getImageData(0, 0, canvas.width, canvas.height);
    animate();
    buttondraw();
    }


// Animate
function animate(): void {

    r.putImageData(imgData, 0, 0);    //Hintergrundbild einsetzen

    //Meteorschauer
    for (let i: number = 0; i < fallingMeteor.length; i++) {
        let meteor: Meteorschauer = fallingMeteor[i];
        meteor.moveMeteor();
    }

    //Rakete
    movingRakete.moveRakete();

    window.setTimeout(animate, 10);
}


function buttondraw(): void {
    let buttonup: HTMLButtonElement = document.createElement("button");
    buttonup.innerText = "↑";
    buttonup.id = "ButtonUp";
    buttonup.addEventListener("click", hoch);
    document.body.appendChild(buttonup);

    let buttonleft: HTMLButtonElement = document.createElement("button");
    buttonleft.innerText = "←";
    buttonleft.id = "ButtonLeft";
    buttonleft.addEventListener("click", li);
    document.body.appendChild(buttonleft);

    let buttonright: HTMLButtonElement = document.createElement("button");
    buttonright.innerText = "→";
    buttonright.id = "ButtonRight";
    buttonright.addEventListener("click", re);
    document.body.appendChild(buttonright);

    let buttondown: HTMLButtonElement = document.createElement("button");
    buttondown.innerText = "↓";
    buttondown.id = "ButtonDown";
    buttondown.addEventListener("click", runter);
    document.body.appendChild(buttondown);
}


function hoch(): void {
    movingRakete.y -= 10;
}
function runter(): void {
    movingRakete.y += 10;
}
function li(): void {
    movingRakete.x -= 10;
}
function re(): void {
    movingRakete.x += 10;
}

function collision(): void {

    for (let i: number = 1; i < fallingMeteor.length; i++) {
        let x: number;
        let y: number;
        x = Math.abs(fallingMeteor[i].x - movingRakete.x);
        y = Math.abs(fallingMeteor[i].y - movingRakete.y);

        if (x < hitbox && y < hitbox) {
          function loose(): void {
              alert("Game Over");
              location.reload();
          }
        }
    }
}

}
