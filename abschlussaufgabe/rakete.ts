namespace abschluss{

  export class Rakete extends Superklasse {

    constructor(_x: number, _y: number) {
        super(_x, _y);
    }

    draw(): void {
      r.beginPath();
      r.strokeStyle = "white";
      r.moveTo(this.x+100, this.y+200);
      r.lineTo(this.x+105, this.y+210);
      r.lineTo(this.x+103, this.y+240);
      r.lineTo(this.x+110, this.y+245);
      r.lineTo(this.x+110, this.y+250);
      r.lineTo(this.x+100, this.y+245);
      r.lineTo(this.x+90, this.y+250);
      r.lineTo(this.x+90, this.y+245);
      r.lineTo(this.x+97, this.y+240);
      r.lineTo(this.x+95, this.y+210);
      r.stroke();
      r.fillStyle = "white";
      r.fill();
    }
  }
}
