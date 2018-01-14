
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
  var zahlung: number=0;
  var menge: number= 1;
  let gespreis: number= 0;

  var name: HTMLInputElement;
  var adresse: HTMLInputElement;
  var plz: HTMLInputElement;
  var mail: HTMLInputElement;
  var shipment: HTMLSelectElement;
  var payment: HTMLInputElement;
  var quantity: HTMLInputElement;
  var br: HTMLElement = document.createElement('br');



window.addEventListener("load", buildHTML);
window.addEventListener("change", handleChange);

function buildHTML(): void{

  // BAUMART
  let baumart: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("baumart");
  for(var i:number=0; i<baumData.length; i++){
    var ba: HTMLInputElement = document.createElement("input");
    ba.type="radio";
    ba.name="Baum";
    ba.value=String(baumData[i].price);
    ba.id=baumData[i].name;
    baumart.appendChild(ba);

    var baLabel: HTMLLabelElement = document.createElement("label");
    baLabel.innerText = baumData[i].name + " (" + baumData[i].price + "$)";
    baLabel.id= "label" + baumData[i].name;
    baLabel.htmlFor="Baum";
    baumart.appendChild(baLabel);
  }

  //BAUMGRÖßE
  let baumgröße: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("baumgröße");
    var sr: HTMLInputElement = <HTMLInputElement>document.createElement("input");
    sr.type="range";
    sr.name="slider";
    sr.value="100";
    sr.min="100";
    sr.max="200";
    sr.step="10";
    baumgröße.appendChild(sr);
    var text: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
    text.id="bg-slider";
    text.innerHTML="Baumgröße ca. " + sr.value + " cm";
    baumgröße.appendChild(text);

  // HALTERUNG
  let halterung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("halterung");
    let selectHalterung: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
    selectHalterung.name= "halterung";
    for(var i:number=0; i<halterungData.length; i++){
      var hg: HTMLOptionElement = document.createElement("option");
      hg.id=halterungData[i].name;
      hg.value=String(halterungData[i].price);
      hg.innerText=halterungData[i].name;
      selectHalterung.appendChild(hg);
    }
  halterung.appendChild(selectHalterung);

  // BAUMSCHMUCK
  let deko: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("deko");
  for(var i:number=0; i<schmuckData.length; i++){
    var bs: HTMLInputElement = document.createElement("input")
    bs.type="checkbox";
    bs.name="checkbox1";
    bs.value=String(schmuckData[i].price);
    bs.id=schmuckData[i].name;
    deko.appendChild(bs);

    var bsLabel: HTMLLabelElement = document.createElement("label");
    bsLabel.innerText = schmuckData[i].name + " (" + schmuckData[i].price + "$)";
    bsLabel.id= "label" + schmuckData[i].name;
    bsLabel.htmlFor="checkbox1";
    deko.appendChild(bsLabel);
  }

  // FARBE
  let farbe: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("farbkombination");
  for(var i:number=0; i<farbData.length; i++){
    var fe: HTMLInputElement = document.createElement("input")
    fe.type="checkbox";
    fe.name="checkbox01";
    fe.value=String(farbData[i].price);
    fe.id=farbData[i].name;
    farbe.appendChild(fe);

    var feLabel: HTMLLabelElement = document.createElement("label");
    feLabel.innerText = farbData[i].name + " (" + farbData[i].price + "$)";
    feLabel.id= "Label" + farbData[i].name;
    feLabel.htmlFor="checkbox01";
    farbe.appendChild(feLabel);
  }

  let CheckOut: HTMLDivElement = <HTMLDivElement>document.getElementById("checkout");

   name = document.createElement("input");
   name.type = "text";
   name.name = "name";
   name.className += "checkoutanschrift";
   name.placeholder = "Vorname / Nachname";
   name.required = true;
   CheckOut.appendChild(name);

   adresse = document.createElement("input");
   adresse.type = "text";
   adresse.name = "street";
   adresse.className += "checkoutanschrift";
   adresse.placeholder = "Straße";
   adresse.required = true;
   CheckOut.appendChild(adresse);

   plz = document.createElement("input");
   plz.type = "text";
   plz.name = "plz";
   plz.className += "checkoutanschrift";
   plz.placeholder = "Postleitzahl";
   plz.pattern = "[0-9]{5}";
   plz.required = true;
   CheckOut.appendChild(plz);

   mail = document.createElement("input");
   mail.type= "email";
   mail.name= "mail";
   mail.className += "checkoutanschrift";
   mail.placeholder= "E-Mail@email.de";
   mail.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
   mail.required = true;
   CheckOut.appendChild(mail);

   let Versand: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("versand");
     let selectVersand: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
     selectVersand.name= "versand";
       for(var i:number=0; i<versandData.length; i++){
         var vd: HTMLOptionElement = document.createElement("option");
         vd.id=versandData[i].name;
         vd.value=String(versandData[i].price);
         vd.innerText=versandData[i].name + " (" + versandData[i].beschr + ")";
         selectVersand.appendChild(vd);
       }
   Versand.appendChild(selectVersand);

   let Zahlung: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("zahlungsart");
     let selectZahlung: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
     selectZahlung.name= "zahlung";
       for(var i:number=0; i<zahlungData.length; i++){
         var vd: HTMLOptionElement = document.createElement("option");
         vd.id=zahlungData[i].name;
         vd.value=String(zahlungData[i].price);
         vd.innerText=zahlungData[i].name;
         selectZahlung.appendChild(vd);
     }
   Zahlung.appendChild(selectZahlung);
}

function handleChange(_event: Event): void {

    // console.log(_event);
    // console.log();

    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    // console.log("Changed " + target.name + " to " + target.value);

    // Baumart
    if(target.name == "Baum"){
      baum = Number(target.value);
    }
    // Höhe
    if(target.name == "slider"){
      height = Number(target.value)/100;
      document.getElementById("bg-slider").innerHTML = "Baumgröße ca. " + String(target.value) + " cm";
    }
    // Halterung
    if(target.name == "halterung"){
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
    if(target.name == "versand"){
      shipping = Number(target.value);
           console.log(Number(100));
    }
    // Zahlungsoptionen
    if(target.name == "zahlung"){
      zahlung = Number(target.value);
    }
    // menge
    if(target.name == "stepper" && +target.value >= 1){
      menge = Number(target.value);
    }

  gespreis= ((baum*height)+halterung+deko+color+shipping+zahlung)*menge;
  document.getElementById("preis-ges").innerHTML = String(gespreis);
  }
}
