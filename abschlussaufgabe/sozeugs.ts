
namespace abschluss {

    export class Superklasse {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;

        };

        update(): void {
            this.draw();
            this.move();

        }
        draw(): void {
            //bla
        }
        move(): void {
            //bla
        }

    }
}
