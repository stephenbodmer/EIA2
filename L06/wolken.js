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
    var Wolken = /** @class */ (function (_super) {
        __extends(Wolken, _super);
        function Wolken(x, y) {
            return _super.call(this, x, y) || this;
        }
        Wolken.prototype.move = function () {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += 1.5 * Math.random();
        };
        Wolken.prototype.draw = function () {
            aufgabe6.ski.beginPath();
            aufgabe6.ski.arc(this.x + 100, this.y + 75, 25, 0, 2 * Math.PI);
            aufgabe6.ski.arc(this.x + 110, this.y + 50, 30, 0, 2 * Math.PI);
            aufgabe6.ski.arc(this.x + 125, this.y + 50, 30, 0, 2 * Math.PI);
            aufgabe6.ski.arc(this.x + 130, this.y + 70, 40, 0, 2 * Math.PI);
            aufgabe6.ski.arc(this.x + 175, this.y + 70, 40, 0, 2 * Math.PI);
            aufgabe6.ski.arc(this.x + 200, this.y + 70, 30, 0, 2 * Math.PI);
            aufgabe6.ski.strokeStyle = "darkgrey";
            aufgabe6.ski.stroke();
            aufgabe6.ski.fillStyle = "white";
            aufgabe6.ski.fill();
        };
        return Wolken;
    }(aufgabe6.MovingShapes));
    aufgabe6.Wolken = Wolken;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=wolken.js.map