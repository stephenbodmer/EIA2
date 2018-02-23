var l;
(function (l) {
    window.addEventListener("load", spielwiese);
    var imgData;
    var score = 0;
    var end = false;
    var fallingMeteor = [];
    // var movingRakete: Rakete[]=[];
    var movingRakete = new Rakete(400, 300);
    function spielwiese() {
        var canvas = document.getElementsByTagName("canvas")[0];
        l.r = canvas.getContext("2d");
        //Background
        l.r.fillStyle = "#071019";
        l.r.fillRect(0, 0, 800, 600);
        //Sun
        l.r.beginPath();
        l.r.strokeStyle = "#B43104";
        l.r.arc(700, 100, 50, 0, 2 * Math.PI);
        l.r.stroke();
        l.r.fillStyle = "#B43104";
        l.r.fill();
        //Meteorschauer
        for (var i = 0; i < 10; i++) {
            fallingMeteor[i] = new Meteorschauer(Math.random() * 800, Math.random() * 600);
        }
        for (var i = 0; i < 1; i++) {
            movingRakete[i] = new Rakete(300, 300);
        }
        imgData = l.r.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    // Animate
    function animate() {
        l.r.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
        //Schnee
        for (var i = 0; i < fallingMeteor.length; i++) {
            var meteor = fallingMeteor[i];
            meteor.moveMeteor();
        }
        // for (let i: number = 0; i < 1; i++) {
        //     let ra: Rakete = movingRakete[i];
        //     ra.moveRakete();
        // }
        window.setTimeout(animate, 10);
    }
    // function buttondraw(): void {
    //     let buttonup: HTMLButtonElement = document.createElement("button");
    //     buttonup.innerText = "UP";
    //     buttonup.id = "ButtonUp";
    //     buttonup.addEventListener("click", moveUp);
    //     document.body.appendChild(buttonup);
    //
    //     let buttonleft: HTMLButtonElement = document.createElement("button");
    //     buttonleft.innerText = "LEFT";
    //     buttonleft.id = "ButtonLeft";
    //     buttonleft.addEventListener("click", moveLeft);
    //     document.body.appendChild(buttonleft);
    //
    //     let buttonright: HTMLButtonElement = document.createElement("button");
    //     buttonright.innerText = "RIGHT";
    //     buttonright.id = "ButtonRight";
    //     buttonright.addEventListener("click", moveRight);
    //     document.body.appendChild(buttonright);
    //
    //     let buttondown: HTMLButtonElement = document.createElement("button");
    //     buttondown.innerText = "DOWN";
    //     buttondown.id = "ButtonDown";
    //     buttondown.addEventListener("click", moveDown);
    //     document.body.appendChild(buttondown);
    // }
    //
    //
    // function moveUp(): void {
    //     rocket.y -= 10;
    // }
    // function moveDown(): void {
    //     rocket.y += 10;
    // }
    // function moveLeft(): void {
    //     rocket.x -= 10;
    // }
    // function moveRight(): void {
    //     rocket.x += 10;
    // }
})(l || (l = {}));
// namespace abschluss{
//
// export let r: CanvasRenderingContext2D;
//
// window.addEventListener("load", spielwiese);
//
// let imgData: ImageData;
// let fallingMeteor: Meteorschauer[] = [];
// let movingRakete: Rakete[]=[];
// //let movingWolken: Wolken[]=[];
//
// function spielwiese(): void {
//
//   let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
//   r = canvas.getContext("2d");
//
//     //Background
//     r.fillStyle = "#071019";
//     r.fillRect(0, 0, 800, 600);
//
//     //Sun
//     r.beginPath();
//     r.strokeStyle = "#B43104";
//     r.arc(700, 100, 50, 0, 2 * Math.PI);
//     r.stroke();
//     r.fillStyle = "#B43104";
//     r.fill();
//
//
//     // Meteorschauer
//     for (let i: number = 0; i < 10; i++) {
//         fallingMeteor[i] = new Meteorschauer(Math.random() * 800, Math.random() * 600);
//     }
//     for (let i: number = 0; i < 10; i++) {
//         movingRakete[i] = new Rakete(Math.random() * 800, Math.random() * 600);
//     }
//
//
//     imgData = r.getImageData(0, 0, canvas.width, canvas.height);
//
//     animate();
// }
// Animate
function animate() {
    r.putImageData(imgData, 0, 0); //Hintergrundbild einsetzen
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
//# sourceMappingURL=main.js.map