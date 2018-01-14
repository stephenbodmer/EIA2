//Aufgabe:    05 Canvas: SObjektivorientierte Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe5;
(function (aufgabe5) {
    var Schnee = /** @class */ (function () {
        function Schnee(x, y) {
            this.x = x;
            this.y = y;
        }
        Schnee.prototype.moveSnow = function () {
            if (this.y > 610) {
                this.y = 0;
            }
            this.y += Math.round(Math.random() * 5);
            this.createSnow();
        };
        Schnee.prototype.createSnow = function () {
            aufgabe5.ski.beginPath();
            aufgabe5.ski.arc(this.x, this.y, 2, 0 * Math.PI, 2.0 * Math.PI);
            aufgabe5.ski.strokeStyle = "lightgrey";
            aufgabe5.ski.stroke();
            aufgabe5.ski.fillStyle = "white";
            aufgabe5.ski.fill();
            aufgabe5.ski.closePath();
        };
        return Schnee;
    }());
    aufgabe5.Schnee = Schnee;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=schnee.js.map