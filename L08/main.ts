//Aufgabe:    08 DynHTML: RandomBoxes
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      09.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe8{

  window.addEventListener("load", eingabe);

  function eingabe(): void {
    let anzahlQuadrate = prompt("Geben sie eine Zahl zwischen 10 und 100 ein.")
    //prompt Eingabefenster

    if (isNaN(parseInt(anzahlQuadrate)) || parseInt(anzahlQuadrate) < 10 || parseInt(anzahlQuadrate) > 100) {
    alert("Hoppla, da ist wohl etwas schief gelaufen.")
    eingabe();
    //isNaN überprüft ob eine Zahl eingegeben wurde, Überprüfung ob Zahl außerhalb der Parameter liegt
    //erneutes aufrufen der Funktion(Rekursion)
    }

    else{
      for (let i = 0; i < parseInt(anzahlQuadrate); i++) {
          quadrate(Math.random()*window.innerWidth-50, Math.random()*window.innerHeight-50, Math.random()*250)
      }
    }
  }

  function quadrate(x: number, y: number, color: number): void {

        let quadr: HTMLDivElement = document.createElement("div");

        quadr.style.backgroundColor = "hsl(" + color + ", 100%, 70%)";
        quadr.style.width = "30px";
        quadr.style.height = "30px";
        quadr.style.marginLeft = x + "px";
        quadr.style.marginTop = y + "px";
        document.body.appendChild(quadr);
      }
}
