namespace abschluss {

export class Rakete {
  x: number;
  y: number;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
}

moveRakete(): void{

  this.drawRakete();
  this.drawPunkt();
}

drawRakete(): void {
  r.beginPath();
  r.strokeStyle = "white";
  r.moveTo(this.x, this.y);
  r.lineTo(this.x+5, this.y+10);
  r.lineTo(this.x+3, this.y+40);
  r.lineTo(this.x+10, this.y+45);
  r.lineTo(this.x+10, this.y+50);
  r.lineTo(this.x, this.y+45);
  r.lineTo(this.x-10, this.y+50);
  r.lineTo(this.x-10, this.y+45);
  r.lineTo(this.x-3, this.y+40);
  r.lineTo(this.x-5, this.y+10);
  r.stroke();
  r.fillStyle = "white";
  r.fill();
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
}

drawPunkt(): void{
//   r.beginPath();
//   r.arc(this.x, this.y, 10, 0 * Math.PI, 2.0 * Math.PI);
//   r.strokeStyle = "lightgrey";
//   r.stroke();
//   r.fillStyle = "white";
//   r.fill();
//   r.closePath();
}
}
}
