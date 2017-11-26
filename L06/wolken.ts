//Aufgabe:    06 Canvas: Polymorphe Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      26.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe6 {

    export class Wolken extends MovingShapes{
        x: number;
        y: number;

        constructor(x: number, y: number) {
          super(x,y);
        }

        move(): void {

            if (this.x > 850) {
                this.x = 0;
            }

            this.x += 1.5 * Math.random();
        }

        draw(): void {
            ski.beginPath();
            ski.arc(this.x + 100, this.y + 75, 25, 0, 2 * Math.PI);
            ski.arc(this.x + 110, this.y + 50, 30, 0, 2 * Math.PI);
            ski.arc(this.x + 125, this.y + 50, 30, 0, 2 * Math.PI);
            ski.arc(this.x + 130, this.y + 70, 40, 0, 2 * Math.PI);
            ski.arc(this.x + 175, this.y + 70, 40, 0, 2 * Math.PI);
            ski.arc(this.x + 200, this.y + 70, 30, 0, 2 * Math.PI);
            ski.strokeStyle = "darkgrey";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();
        }
    }
}
