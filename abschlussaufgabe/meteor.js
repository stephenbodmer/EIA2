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
    var Meteorschauer = /** @class */ (function (_super) {
        __extends(Meteorschauer, _super);
        function Meteorschauer(_x, _y, _dx) {
            var _this = _super.call(this, _x, _y) || this;
            _this.dx = _dx;
            return _this;
        }
        Meteorschauer.prototype.draw = function () {
            abschluss.r.beginPath();
            abschluss.r.arc(this.x, this.y, 5, 0 * Math.PI, 2.0 * Math.PI);
            abschluss.r.strokeStyle = "lightgrey";
            abschluss.r.stroke();
            abschluss.r.fillStyle = "white";
            abschluss.r.fill();
            abschluss.r.closePath();
        };
        Meteorschauer.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.dx;
        };
        return Meteorschauer;
    }(abschluss.Superklasse));
    abschluss.Meteorschauer = Meteorschauer;
})(abschluss || (abschluss = {}));
//     export class Meteorschauer {
//         x: number;
//         y: number;
//
//         constructor(x: number, y: number) {
//             this.x = x;
//             this.y = y;
//         }
//
//         moveMeteor(): void {
//
//             if (this.y > 610) {
//                 this.y = 0;
//             }
//
//             this.y += Math.round(Math.random() * 5);
//
//             this.score();
//
//             this.createMeteor();
//         }
//
//         createMeteor(): void {
//
//         }
//
//         score(): void{
//           let score:number=0;
//
//           if(this.y>600){
//             score+=1;
//           }
//
//         }
//     }
// }
//# sourceMappingURL=meteor.js.map