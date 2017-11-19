//Aufgabe:    05 Canvas: SObjektivorientierte Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe5 {

    export class Schnee {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        moveSnow(): void {

            if (this.y > 610) {
                this.y = 0;
            }

            this.y += Math.round(Math.random() * 5);

            this.createSnow();
        }

        createSnow(): void {
            ski.beginPath();
            ski.arc(this.x, this.y, 2, 0 * Math.PI, 2.0 * Math.PI);
            ski.strokeStyle = "lightgrey";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();
            ski.closePath();
        }

    }
}