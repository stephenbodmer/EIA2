var abschluss;
(function (abschluss) {
    var Meteorschauer = /** @class */ (function () {
        function Meteorschauer(x, y) {
            this.x = x;
            this.y = y;
        }
        Meteorschauer.prototype.moveMeteor = function () {
            if (this.y > 610) {
                this.y = 0;
            }
            this.y += Math.round(Math.random() * 5);
            this.createMeteor();
        };
        Meteorschauer.prototype.createMeteor = function () {
            abschluss.r.beginPath();
            abschluss.r.arc(this.x, this.y, 5, 0 * Math.PI, 2.0 * Math.PI);
            abschluss.r.strokeStyle = "lightgrey";
            abschluss.r.stroke();
            abschluss.r.fillStyle = "white";
            abschluss.r.fill();
            abschluss.r.closePath();
        };
        return Meteorschauer;
    }());
    abschluss.Meteorschauer = Meteorschauer;
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
            abschluss.r.beginPath();
            abschluss.r.strokeStyle = "white";
            abschluss.r.moveTo(100, 200);
            abschluss.r.lineTo(105, 210);
            abschluss.r.lineTo(103, 240);
            abschluss.r.lineTo(110, 245);
            abschluss.r.lineTo(110, 250);
            abschluss.r.lineTo(100, 245);
            abschluss.r.lineTo(90, 250);
            abschluss.r.lineTo(90, 245);
            abschluss.r.lineTo(97, 240);
            abschluss.r.lineTo(95, 210);
            abschluss.r.stroke();
            abschluss.r.fillStyle = "white";
            abschluss.r.fill();
        };
        return Rakete;
    }());
    abschluss.Rakete = Rakete;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=sozeugs.js.map