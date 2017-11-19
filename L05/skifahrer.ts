//Aufgabe:    05 Canvas: SObjektivorientierte Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe5 {

    export class Skiers {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        constructor(x: number, y: number, dx: number, dy: number, color: string) {

            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.color = color;

        }

        //Skifahrer
        moveSkier(): void {

            if (this.x > 800, this.y > 650) {
                this.x = 350;
                this.y = 430; // Winkel in dem der Skier den Berg unter fährt 
            }

            this.x += 10;
            this.y += -10;
            
            this.drawSkier();
        }

        //FSkifahrer 
        drawSkier(): void {

            this.x += this.dx;
            this.y += this.dy;           // um andere Bewegungsmuster zu finden 

            ski.fillStyle = this.color;
            ski.fillRect(this.x, this.y, 10, -15);
            ski.beginPath();
            ski.arc(this.x + 10, this.y - 25, 5, 0, 2 * Math.PI);
            ski.fill();
            ski.beginPath();
            ski.moveTo(this.x - 30, this.y - 15);
            ski.lineTo(this.x + 40, this.y + 10);
            ski.stroke();
        }
    }
}