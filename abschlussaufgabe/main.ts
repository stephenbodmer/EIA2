namespace abschluss {

    window.addEventListener("load", spielwiese);
    export let r: CanvasRenderingContext2D;

    var fallingMeteor: Meteorschauer[] = [];

    let imgData: ImageData;
    let score: number = 0;
    let end: boolean = false;
    let img: ImageData;
    let hitbox: number = 10;

    let guy: Rakete = new Rakete(400, 500);

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



        //Img wird erstellt damit animate funktioniert und animate/button Funktionen werden ausgef�hrt
        imgData = r.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
//Zeichnen und Animation der Autos + Zeichnen der Coins
    function animate(): void {

        window.setTimeout(animate, 20);
    }

}
