//Aufgabe:    06 Canvas: Polymorphe Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      26.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var aufgabe6;
(function (aufgabe6) {
    var Schnee = (function (_super) {
        __extends(Schnee, _super);
        function Schnee(x, y) {
            return _super.call(this, x, y) || this;
        }
        Schnee.prototype.move = function () {
            if (this.y > 610) {
                this.y = 0;
            }
            this.y += Math.round(Math.random() * 5);
        };
        Schnee.prototype.draw = function () {
            aufgabe6.ski.beginPath();
            aufgabe6.ski.arc(this.x, this.y, 2, 0 * Math.PI, 2.0 * Math.PI);
            aufgabe6.ski.strokeStyle = "lightgrey";
            aufgabe6.ski.stroke();
            aufgabe6.ski.fillStyle = "white";
            aufgabe6.ski.fill();
            aufgabe6.ski.closePath();
        };
        return Schnee;
    }(aufgabe6.MovingShapes));
    aufgabe6.Schnee = Schnee;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=schnee.js.map