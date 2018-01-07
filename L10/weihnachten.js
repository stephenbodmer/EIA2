//Aufgabe:    10 - Weihnachtsshopping
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      28.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var weihnachtsfreude;
(function (weihnachtsfreude) {
    var baum = 0;
    var height = 1;
    var halterung = 0;
    var deko = 0;
    var color = 0;
    var shipping = 0;
    var menge = 1;
    var gespreis = 0;
    var name;
    var adresse;
    var plz;
    var mail;
    var shipment;
    var payment;
    var quantity;
    window.addEventListener("load", buildHTML);
    window.addEventListener("change", handleChange);
    function buildHTML() {
        var CheckOut = document.getElementById("checkout");
        name = document.createElement("input");
        name.type = "text";
        name.name = "name";
        name.placeholder = "Vorname / Nachname";
        name.required = true;
        CheckOut.appendChild(name);
        adresse = document.createElement("input");
        adresse.type = "text";
        adresse.name = "street";
        adresse.placeholder = "Straße";
        adresse.required = true;
        CheckOut.appendChild(adresse);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "plz";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        CheckOut.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "mail";
        mail.placeholder = "E-Mail@email.de";
        mail.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
        mail.required = true;
        CheckOut.appendChild(mail);
    }
    function handleChange(_event) {
        // console.log(_event);
        var target = _event.target;
        // console.log("Changed " + target.name + " to " + target.value);
        // Baumart
        if (target.name == "Baum") {
            baum = Number(target.value);
        }
        // Höhe
        if (target.name == "slider") {
            height = Number(target.value) / 100;
            document.getElementById("bg-slider").innerHTML = String(target.value);
        }
        // Halterung
        if (target.name == "Halterung") {
            halterung = Number(target.value);
        }
        // Deko
        if (target.name == "checkbox1" && target.checked == true) {
            deko += Number(target.value);
        }
        if (target.name == "checkbox1" && target.checked == false) {
            deko -= Number(target.value);
        }
        // Farbkombination
        if (target.name == "checkbox01" && target.checked == true) {
            deko += Number(target.value);
        }
        if (target.name == "checkbox01" && target.checked == false) {
            deko -= Number(target.value);
        }
        // Versandoption
        if (target.name == "Select") {
            shipping = Number(target.value);
        }
        // menge
        if (target.name == "stepper" && +target.value >= 1) {
            menge = Number(target.value);
        }
        // console.log(baum, height, halterung, deko, color, shipping, menge);
        gespreis = ((baum * height) + halterung + deko + color + shipping) * menge;
        document.getElementById("preis-ges").innerHTML = String(gespreis);
    }
})(weihnachtsfreude || (weihnachtsfreude = {}));
//# sourceMappingURL=weihnachten.js.map