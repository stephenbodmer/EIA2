var abschluss;
(function (abschluss) {
    var Superklasse = /** @class */ (function () {
        function Superklasse(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        ;
        Superklasse.prototype.update = function () {
            this.draw();
            this.move();
        };
        Superklasse.prototype.draw = function () {
            //bla
        };
        Superklasse.prototype.move = function () {
            //bla
        };
        return Superklasse;
    }());
    abschluss.Superklasse = Superklasse;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=sozeugs.js.map