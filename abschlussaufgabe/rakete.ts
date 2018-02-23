namespace abschluss {

export class Rakete {
  x: number;
  y: number;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
}

moveRakete(): void{
  if (this.y > 610) {
      this.y = 0;
  }

  this.drawRakete();
}

drawRakete(): void {
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
