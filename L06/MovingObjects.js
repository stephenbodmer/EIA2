//Aufgabe:    06 Canvas: Polymorphe Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      26.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe6;
(function (aufgabe6) {
    var MovingShapes = /** @class */ (function () {
        function MovingShapes(x, y) {
            this.x = x;
            this.y = y;
        }
        MovingShapes.prototype.move = function () { };
        MovingShapes.prototype.draw = function () { };
        MovingShapes.prototype.update = function () {
            this.move();
            this.draw();
        };
        return MovingShapes;
    }());
    aufgabe6.MovingShapes = MovingShapes;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=MovingObjects.js.map