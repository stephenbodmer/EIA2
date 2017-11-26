//Aufgabe:    06 Canvas: Polymorphe Skipiste
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      26.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe6{
  export class MovingShapes {
    x: number;
    y: number;

    constructor (x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    move() : void {}
    draw() : void {}

    update() : void {
      this.move();
      this.draw();
    }
  }
}
