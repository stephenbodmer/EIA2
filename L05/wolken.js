//Aufgabe:    05 Canvas: SObjektivorientierte Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe5;
(function (aufgabe5) {
    class Wolken {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        moveWolken() {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += 1.5 * Math.random();
            this.createWolke();
        }
        createWolke() {
            aufgabe5.ski.beginPath();
            aufgabe5.ski.arc(this.x + 100, this.y + 75, 25, 0, 2 * Math.PI);
            aufgabe5.ski.arc(this.x + 110, this.y + 50, 30, 0, 2 * Math.PI);
            aufgabe5.ski.arc(this.x + 125, this.y + 50, 30, 0, 2 * Math.PI);
            aufgabe5.ski.arc(this.x + 130, this.y + 70, 40, 0, 2 * Math.PI);
            aufgabe5.ski.arc(this.x + 175, this.y + 70, 40, 0, 2 * Math.PI);
            aufgabe5.ski.arc(this.x + 200, this.y + 70, 30, 0, 2 * Math.PI);
            aufgabe5.ski.strokeStyle = "darkgrey";
            aufgabe5.ski.stroke();
            aufgabe5.ski.fillStyle = "white";
            aufgabe5.ski.fill();
        }
    }
    aufgabe5.Wolken = Wolken;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=wolken.js.map