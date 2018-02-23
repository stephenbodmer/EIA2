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
            this.score();
            this.createMeteor();
        };
        Meteorschauer.prototype.createMeteor = function () {
        };
        Meteorschauer.prototype.score = function () {
            var score = 0;
            if (this.y > 600) {
                score += 1;
            }
        };
        return Meteorschauer;
    }());
    abschluss.Meteorschauer = Meteorschauer;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=meteor.js.map