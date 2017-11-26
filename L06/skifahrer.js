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
    var Skiers = (function (_super) {
        __extends(Skiers, _super);
        function Skiers(x, y, dx, dy, color) {
            var _this = _super.call(this, x, y) || this;
            _this.dx = dx;
            _this.dy = dy;
            _this.color = color;
            return _this;
        }
        Skiers.prototype.move = function () {
            if (this.x > 800, this.y > 650) {
                this.x = 350;
                this.y = 430; // Winkel in dem der Skier den Berg unter fährt
            }
            this.x += 10;
            this.y += -10;
        };
        Skiers.prototype.draw = function () {
            this.x += this.dx;
            this.y += this.dy; // um andere Bewegungsmuster zu finden
            aufgabe6.ski.fillStyle = this.color;
            aufgabe6.ski.fillRect(this.x, this.y, 10, -15);
            aufgabe6.ski.beginPath();
            aufgabe6.ski.arc(this.x + 10, this.y - 25, 5, 0, 2 * Math.PI);
            aufgabe6.ski.fill();
            aufgabe6.ski.beginPath();
            aufgabe6.ski.moveTo(this.x - 30, this.y - 15);
            aufgabe6.ski.lineTo(this.x + 40, this.y + 10);
            aufgabe6.ski.stroke();
        };
        return Skiers;
    }(aufgabe6.MovingShapes));
    aufgabe6.Skiers = Skiers;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=skifahrer.js.map