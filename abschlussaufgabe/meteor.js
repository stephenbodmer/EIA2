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
    //     export class Rakete {
    //       x: number;
    //       y: number;
    //
    //       constructor(x: number, y: number) {
    //           this.x = x;
    //           this.y = y;
    //     }
    //
    //     moveRakete(): void{
    //       if (this.y > 610) {
    //           this.y = 0;
    //       }
    //
    //       this.drawRakete();
    //     }
    //
    //     drawRakete(): void {
    //       r.beginPath();
    //       r.strokeStyle = "white";
    //       r.moveTo(100, 200);
    //       r.lineTo(105, 210);
    //       r.lineTo(103, 240);
    //       r.lineTo(110, 245);
    //       r.lineTo(110, 250);
    //       r.lineTo(100, 245);
    //       r.lineTo(90, 250);
    //       r.lineTo(90, 245);
    //       r.lineTo(97, 240);
    //       r.lineTo(95, 210);
    //       r.stroke();
    //       r.fillStyle = "white";
    //       r.fill();
    //
    //     }
    //    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=meteor.js.map