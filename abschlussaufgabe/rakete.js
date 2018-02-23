var abschluss;
(function (abschluss) {
    var Rakete = /** @class */ (function () {
        function Rakete(x, y) {
            this.x = x;
            this.y = y;
        }
        Rakete.prototype.moveRakete = function () {
            this.drawRakete();
        };
        Rakete.prototype.drawRakete = function () {
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
    }());
    abschluss.Rakete = Rakete;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=rakete.js.map