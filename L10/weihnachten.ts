
//Aufgabe:    10 - Weihnachtsshopping
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      28.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.


namespace weihnachtsfreude{

  var baum: number = 0;
  var height: number = 1;
  var halterung: number = 0;
  var deko: number = 0;
  var color: number= 0;
  var shipping: number= 0;
  var menge: number= 1;
  let gespreis: number= 0;

window.addEventListener("change", handleChange)

function handleChange(_event: Event): void {

    // console.log(_event);

    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    // console.log("Changed " + target.name + " to " + target.value);

    // Baumart
    if(target.name == "Baum"){
      baum = Number(target.value);
    }
    // Höhe
    if(target.name == "slider"){
      height = Number(target.value)/100;
      document.getElementById("bg-slider").innerHTML = String(target.value);
    }
    // Halterung
    if(target.name == "Halterung"){
      halterung = Number(target.value);
    }
    // Deko
    if(target.name == "checkbox1" && target.checked == true){
      deko += Number(target.value);
    }
    if(target.name == "checkbox1" && target.checked == false){
      deko -= Number(target.value);
    }
    // Farbkombination
    if(target.name == "checkbox01" && target.checked == true ){
      deko += Number(target.value);
     }
    if(target.name == "checkbox01" && target.checked == false ){
      deko -= Number(target.value);
    }
    // Versandoption
    if(target.name == "Select"){
      shipping = Number(target.value);
    }
    // menge
    if(target.name == "stepper" && +target.value >= 1){
      menge = Number(target.value);
    }

  // console.log(baum, height, halterung, deko, color, shipping, menge);

  gespreis= ((baum*height)+halterung+deko+color+shipping)*menge;
  document.getElementById("preis-ges").innerHTML = String(gespreis);
  }
}  
