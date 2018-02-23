namespace abschluss {

    export class Meteorschauer {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        moveMeteor(): void {

            if (this.y > 610) {
                this.y = Math.random()*(-100);
                this.x = Math.random()*800;
            }

            this.y += Math.round(Math.random() * 5);

            this.createMeteor();
        }

        createMeteor(): void {
          r.beginPath();
          r.arc(this.x, this.y, 10, 0 * Math.PI, 2.0 * Math.PI);
          r.strokeStyle = "lightgrey";
          r.stroke();
          r.fillStyle = "white";
          r.fill();
          r.closePath();

        }
    }
}
