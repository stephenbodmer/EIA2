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
  r.moveTo(100, 200);
  r.lineTo(105, 210);
  r.lineTo(103, 240);
  r.lineTo(110, 245);
  r.lineTo(110, 250);
  r.lineTo(100, 245);
  r.lineTo(90, 250);
  r.lineTo(90, 245);
  r.lineTo(97, 240);
  r.lineTo(95, 210);
  r.stroke();
  r.fillStyle = "white";
  r.fill();

}
}
}
