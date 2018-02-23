namespace abschluss{

export let r: CanvasRenderingContext2D;

window.addEventListener("load", spielwiese);

let imgData: ImageData;
let hitbox: number = 15;
let score: number = 0;
var fallingMeteor: Meteorschauer[] = [];
var movingRakete: Rakete;
// let movingRakete: Rakete = new Rakete(2,3);


function spielwiese(): void {

  alert("Herzlich Willkommen zu wilden  Spaceabenteuern.\nDu bist mit deinem Raumschiff in einen\ngroßen, wilden Meteorschauer geraten. Hilf der\nCrew hindurch zu manövrieren.\n\nBenutze dafür die Steuerungsbuttons um das Schiff \nnach vorne/hinten und rechts/links zu bewegen.\n")

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
    for (let i: number = 0; i < 20; i++) {
        fallingMeteor[i] = new Meteorschauer(Math.random() * 800, Math.random() * (-600));
    }

    movingRakete = new Rakete(400,500);

    imgData = r.getImageData(0, 0, canvas.width, canvas.height);
    animate();
    createButton();
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
    unfall();
    highscore();
    window.setTimeout(animate, 10);
}


function createButton(): void {
    let buttonup: HTMLButtonElement = document.createElement("button");
    buttonup.innerText = "↑";
    buttonup.addEventListener("click", hoch);
    document.body.appendChild(buttonup);

    let buttonleft: HTMLButtonElement = document.createElement("button");
    buttonleft.innerText = "←";
    buttonleft.addEventListener("click", li);
    document.body.appendChild(buttonleft);

    let buttonright: HTMLButtonElement = document.createElement("button");
    buttonright.innerText = "→";
    buttonright.addEventListener("click", re);
    document.body.appendChild(buttonright);

    let buttondown: HTMLButtonElement = document.createElement("button");
    buttondown.innerText = "↓";
    buttondown.addEventListener("click", runter);
    document.body.appendChild(buttondown);
}


function hoch(): void {
    movingRakete.y -= 15;
}
function runter(): void {
    movingRakete.y += 15;
}
function li(): void {
    movingRakete.x -= 15;
}
function re(): void {
    movingRakete.x += 15;
}

function highscore(): void {
  for (let i: number = 1; i < fallingMeteor.length; i++) {
      let y: number = fallingMeteor[i].y;
      if(y>600){
        score+=1;
      }
  }
}

function unfall(): void {

    for (let i: number = 1; i < fallingMeteor.length; i++) {
        let x: number;
        let y: number;
        x = Math.abs(fallingMeteor[i].x - movingRakete.x);
        y = Math.abs(fallingMeteor[i].y - movingRakete.y);

        if (x < hitbox && y < hitbox) {
          console.log(x, y);
          verloren();
        }

        function verloren(): void {
            alert("Looser.\n\n Du hast " + score + " Punkte erreicht.");
            location.reload();
        }

    }
}

}
