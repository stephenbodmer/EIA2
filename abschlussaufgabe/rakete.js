var abschluss;
(function (abschluss) {
    var Rakete = /** @class */ (function () {
        function Rakete(x, y) {
            this.x = x;
            this.y = y;
        }
        Rakete.prototype.moveRakete = function () {
            if (this.y > 610) {
                this.y = 0;
            }
            this.drawRakete();
        };
        Rakete.prototype.drawRakete = function () {
            r.beginPath();
            r.strokeStyle = "white";
            r.moveTo(100, 200);
            r.lineTo(105, 210);
            r.lineTo(103, 240);
            r.lineTo(110, 245);
            r.lineTo(110, 250);
            r.lineTo(100, 245);
            r.lineTo(90, 250);
            r.lineTo(90, 245);
            r.lineTo(97, 240);
            r.lineTo(95, 210);
            r.stroke();
            r.fillStyle = "white";
            r.fill();
        };
        return Rakete;
    }());
    abschluss.Rakete = Rakete;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=rakete.js.map