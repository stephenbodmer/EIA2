//Aufgabe:    05 Canvas: SObjektivorientierte Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe5;
(function (aufgabe5) {
    class Skiers {
        constructor(x, y, dx, dy, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.color = color;
        }
        //Skifahrer
        moveSkier() {
            if (this.x > 800, this.y > 650) {
                this.x = 350;
                this.y = 430; // Winkel in dem der Skier den Berg unter fährt 
            }
            this.x += 10;
            this.y += -10;
            this.drawSkier();
        }
        //FSkifahrer 
        drawSkier() {
            this.x += this.dx;
            this.y += this.dy; // um andere Bewegungsmuster zu finden 
            aufgabe5.ski.fillStyle = this.color;
            aufgabe5.ski.fillRect(this.x, this.y, 10, -15);
            aufgabe5.ski.beginPath();
            aufgabe5.ski.arc(this.x + 10, this.y - 25, 5, 0, 2 * Math.PI);
            aufgabe5.ski.fill();
            aufgabe5.ski.beginPath();
            aufgabe5.ski.moveTo(this.x - 30, this.y - 15);
            aufgabe5.ski.lineTo(this.x + 40, this.y + 10);
            aufgabe5.ski.stroke();
        }
    }
    aufgabe5.Skiers = Skiers;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=skifahrer.js.map