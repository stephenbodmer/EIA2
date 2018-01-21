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
    var zahlung = 0;
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
        // BAUMART
        var baumart = document.getElementById("baumart");
        for (var i = 0; i < weihnachtsfreude.baumData.length; i++) {
            var ba = document.createElement("input");
            ba.type = "radio";
            ba.name = "Baum";
            ba.value = String(weihnachtsfreude.baumData[i].price);
            ba.id = weihnachtsfreude.baumData[i].name;
            baumart.appendChild(ba);
            var baLabel = document.createElement("label");
            baLabel.innerText = weihnachtsfreude.baumData[i].name + " (" + weihnachtsfreude.baumData[i].price + "$)";
            baLabel.id = "label" + weihnachtsfreude.baumData[i].name;
            baLabel.htmlFor = weihnachtsfreude.baumData[i].name;
            baumart.appendChild(baLabel);
            var br = document.createElement("br");
            baumart.appendChild(br);
        }
        //BAUMGRÖßE
        var baumgröße = document.getElementById("baumgröße");
        var sr = document.createElement("input");
        sr.type = "range";
        sr.name = "slider";
        sr.value = "100";
        sr.min = "100";
        sr.max = "200";
        sr.step = "10";
        baumgröße.appendChild(sr);
        var text = document.createElement("p");
        text.id = "bg-slider";
        text.innerHTML = "Baumgröße ca. " + sr.value + " cm";
        baumgröße.appendChild(text);
        // HALTERUNG
        var halterung = document.getElementById("halterung");
        var selectHalterung = document.createElement("select");
        selectHalterung.name = "halterung";
        for (var i = 0; i < weihnachtsfreude.halterungData.length; i++) {
            var hg = document.createElement("option");
            hg.id = weihnachtsfreude.halterungData[i].name;
            hg.value = String(weihnachtsfreude.halterungData[i].price);
            hg.innerText = weihnachtsfreude.halterungData[i].name;
            selectHalterung.appendChild(hg);
        }
        halterung.appendChild(selectHalterung);
        // BAUMSCHMUCK
        var deko = document.getElementById("deko");
        for (var i = 0; i < weihnachtsfreude.schmuckData.length; i++) {
            var bs = document.createElement("input");
            bs.type = "checkbox";
            bs.name = "checkbox1";
            bs.value = String(weihnachtsfreude.schmuckData[i].price);
            bs.id = weihnachtsfreude.schmuckData[i].name;
            deko.appendChild(bs);
            var bsLabel = document.createElement("label");
            bsLabel.innerText = weihnachtsfreude.schmuckData[i].name + " (" + weihnachtsfreude.schmuckData[i].price + "$)";
            bsLabel.id = "label" + weihnachtsfreude.schmuckData[i].name;
            bsLabel.htmlFor = "checkbox1";
            deko.appendChild(bsLabel);
            var br = document.createElement("br");
            deko.appendChild(br);
        }
        // FARBE
        var farbe = document.getElementById("farbkombination");
        for (var i = 0; i < weihnachtsfreude.farbData.length; i++) {
            var fe = document.createElement("input");
            fe.type = "checkbox";
            fe.name = "checkbox01";
            fe.value = String(weihnachtsfreude.farbData[i].price);
            fe.id = weihnachtsfreude.farbData[i].name;
            farbe.appendChild(fe);
            var feLabel = document.createElement("label");
            feLabel.innerText = weihnachtsfreude.farbData[i].name + " (" + weihnachtsfreude.farbData[i].price + "$)";
            feLabel.id = "Label" + weihnachtsfreude.farbData[i].name;
            feLabel.htmlFor = "checkbox01";
            farbe.appendChild(feLabel);
            var br = document.createElement("br");
            farbe.appendChild(br);
        }
        var CheckOut = document.getElementById("checkout");
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
        mail.type = "email";
        mail.name = "mail";
        mail.className += "checkoutanschrift";
        mail.placeholder = "E-Mail@email.de";
        mail.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
        mail.required = true;
        CheckOut.appendChild(mail);
        var Versand = document.getElementById("versand");
        var selectVersand = document.createElement("select");
        selectVersand.name = "versand";
        for (var i = 0; i < weihnachtsfreude.versandData.length; i++) {
            var vd = document.createElement("option");
            vd.id = weihnachtsfreude.versandData[i].name;
            vd.value = String(weihnachtsfreude.versandData[i].price);
            vd.innerText = weihnachtsfreude.versandData[i].name + " " + weihnachtsfreude.versandData[i].beschr;
            selectVersand.appendChild(vd);
        }
        Versand.appendChild(selectVersand);
        var Zahlung = document.getElementById("zahlungsart");
        var selectZahlung = document.createElement("select");
        selectZahlung.name = "zahlung";
        for (var i = 0; i < weihnachtsfreude.zahlungData.length; i++) {
            var vd = document.createElement("option");
            vd.id = weihnachtsfreude.zahlungData[i].name;
            vd.value = String(weihnachtsfreude.zahlungData[i].price);
            vd.innerText = weihnachtsfreude.zahlungData[i].name;
            selectZahlung.appendChild(vd);
        }
        Zahlung.appendChild(selectZahlung);
    }
    function handleChange(_event) {
        // console.log(_event);
        // console.log();
        var target = _event.target;
        // console.log("Changed " + target.name + " to " + target.value);
        // Baumart
        if (target.name == "Baum") {
            baum = Number(target.value);
        }
        // Höhe
        if (target.name == "slider") {
            height = Number(target.value) / 100;
            document.getElementById("bg-slider").innerHTML = "Baumgröße ca. " + String(target.value) + " cm";
        }
        // Halterung
        if (target.name == "halterung") {
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
        if (target.name == "versand") {
            shipping = Number(target.value);
            console.log(Number(100));
        }
        // Zahlungsoptionen
        if (target.name == "zahlung") {
            zahlung = Number(target.value);
        }
        // menge
        if (target.name == "stepper" && +target.value >= 1) {
            menge = Number(target.value);
        }
        gespreis = ((baum * height) + halterung + deko + color + shipping + zahlung) * menge;
        document.getElementById("preis-ges").innerHTML = String(gespreis);
    }
})(weihnachtsfreude || (weihnachtsfreude = {}));
//# sourceMappingURL=weihnachten.js.map