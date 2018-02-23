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
                this.y = 0;
            }

            this.y += Math.round(Math.random() * 5);

            this.score();
            this.createMeteor();
        }

        createMeteor(): void {
          r.beginPath();
          r.arc(this.x, this.y, 5, 0 * Math.PI, 2.0 * Math.PI);
          r.strokeStyle = "lightgrey";
          r.stroke();
          r.fillStyle = "white";
          r.fill();
          r.closePath();
        }

        score(): void{
          let score:number=0;

          if(this.y>600){
            score+=1;
          }

        }
    }
}
