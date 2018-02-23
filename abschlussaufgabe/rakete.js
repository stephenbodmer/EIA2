var abschluss;
(function (abschluss) {
    var Rakete = /** @class */ (function () {
        function Rakete(x, y) {
            this.x = x;
            this.y = y;
        }
        Rakete.prototype.moveRakete = function () {
            if (this.y > 550) {
                this.y = 550;
            }
            if (this.y < 0) {
                this.y = 600;
            }
            if (this.x > 800) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = 800;
            }
            this.drawRakete();
        };
        Rakete.prototype.drawRakete = function () {
            abschluss.r.beginPath();
            abschluss.r.strokeStyle = "white";
            abschluss.r.moveTo(this.x, this.y);
            abschluss.r.lineTo(this.x + 5, this.y + 10);
            abschluss.r.lineTo(this.x + 3, this.y + 40);
            abschluss.r.lineTo(this.x + 10, this.y + 45);
            abschluss.r.lineTo(this.x + 10, this.y + 50);
            abschluss.r.lineTo(this.x, this.y + 45);
            abschluss.r.lineTo(this.x - 10, this.y + 50);
            abschluss.r.lineTo(this.x - 10, this.y + 45);
            abschluss.r.lineTo(this.x - 3, this.y + 40);
            abschluss.r.lineTo(this.x - 5, this.y + 10);
            abschluss.r.stroke();
            abschluss.r.fillStyle = "white";
            abschluss.r.fill();
        };
        return Rakete;
    }());
    abschluss.Rakete = Rakete;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=rakete.js.map