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
var abschluss;
(function (abschluss) {
    var Rakete = /** @class */ (function (_super) {
        __extends(Rakete, _super);
        function Rakete(_x, _y) {
            return _super.call(this, _x, _y) || this;
        }
        Rakete.prototype.draw = function () {
            abschluss.r.beginPath();
            abschluss.r.strokeStyle = "white";
            abschluss.r.moveTo(this.x + 100, this.y + 200);
            abschluss.r.lineTo(this.x + 105, this.y + 210);
            abschluss.r.lineTo(this.x + 103, this.y + 240);
            abschluss.r.lineTo(this.x + 110, this.y + 245);
            abschluss.r.lineTo(this.x + 110, this.y + 250);
            abschluss.r.lineTo(this.x + 100, this.y + 245);
            abschluss.r.lineTo(this.x + 90, this.y + 250);
            abschluss.r.lineTo(this.x + 90, this.y + 245);
            abschluss.r.lineTo(this.x + 97, this.y + 240);
            abschluss.r.lineTo(this.x + 95, this.y + 210);
            abschluss.r.stroke();
            abschluss.r.fillStyle = "white";
            abschluss.r.fill();
        };
        return Rakete;
    }(abschluss.Superklasse));
    abschluss.Rakete = Rakete;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=rakete.js.map