var abschluss;
(function (abschluss) {
    var Meteorschauer = /** @class */ (function () {
        function Meteorschauer(x, y) {
            this.x = x;
            this.y = y;
        }
        Meteorschauer.prototype.moveMeteor = function () {
            if (this.y > 610) {
                this.y = Math.random() * (-100);
                this.x = Math.random() * 800;
            }
            this.y += Math.round(Math.random() * 5);
            this.createMeteor();
        };
        Meteorschauer.prototype.createMeteor = function () {
            abschluss.r.beginPath();
            abschluss.r.arc(this.x, this.y, 10, 0 * Math.PI, 2.0 * Math.PI);
            abschluss.r.strokeStyle = "lightgrey";
            abschluss.r.stroke();
            abschluss.r.fillStyle = "white";
            abschluss.r.fill();
            abschluss.r.closePath();
        };
        return Meteorschauer;
    }());
    abschluss.Meteorschauer = Meteorschauer;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=meteor.js.map