var abschluss;
(function (abschluss) {
    var Rakete = /** @class */ (function () {
        function Rakete(x, y) {
            this.x = x;
            this.y = y;
        }
        Rakete.prototype.moveRakete = function () {
            this.drawRakete();
            this.drawPunkt();
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
            // r.beginPath();
            // r.strokeStyle = "white";
            // r.moveTo(this.x+100, this.y+200);
            // r.lineTo(this.x+105, this.y+210);
            // r.lineTo(this.x+103, this.y+240);
            // r.lineTo(this.x+110, this.y+245);
            // r.lineTo(this.x+110, this.y+250);
            // r.lineTo(this.x+100, this.y+245);
            // r.lineTo(this.x+90, this.y+250);
            // r.lineTo(this.x+90, this.y+245);
            // r.lineTo(this.x+97, this.y+240);
            // r.lineTo(this.x+95, this.y+210);
            // r.stroke();
            // r.fillStyle = "white";
            // r.fill();
        };
        Rakete.prototype.drawPunkt = function () {
            //   r.beginPath();
            //   r.arc(this.x, this.y, 10, 0 * Math.PI, 2.0 * Math.PI);
            //   r.strokeStyle = "lightgrey";
            //   r.stroke();
            //   r.fillStyle = "white";
            //   r.fill();
            //   r.closePath();
        };
        return Rakete;
    }());
    abschluss.Rakete = Rakete;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=rakete.js.map