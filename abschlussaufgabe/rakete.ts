namespace abschluss {

export class Rakete {
  x: number;
  y: number;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
}

moveRakete(): void{
  if (this.y>550){
    this.y=550;
  }
  if (this.y<0){
    this.y=600;
  }
  if (this.x>800){
    this.x=0;
  }
  if (this.x<0){
    this.x=800;
  }
  this.drawRakete();
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

}


}
}
