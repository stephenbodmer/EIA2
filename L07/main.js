//Aufgabe:    07 StudiVZ
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      30.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("(n)  Datensatz anlegen\n(a)  Datensatz abfragen\n(s)  Programm beenden\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von:\nMatrikelnummer,\nName,\nVorname,\nAlter,\nGeschlecht (m oder w)\nund Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var student = _input.split(',', 6);
        student[0] = parseInt(student[0]);
        student[3] = parseInt(student[3]);
        if (student[4] == "m") {
            student[4] = true;
        }
        if (student[4] == "w") {
            student[4] = false;
        }
        if (isNaN(student[0]) || isNaN(student[3]) || typeof (student[4]) != "boolean") {
            return "Da ist wohl etwas schief gelaufen. Nochmal versuchen?";
        }
        else {
            students[student[0]] = student;
            return "Sehr gut.";
        }
    }
    function queryData(_matrikel) {
        if (typeof students[_matrikel] !== 'undefined') {
            return "Hier sind deine Daten:\n\nMatrikelnummer: " + students[_matrikel][0] + "\n        \nName: " + students[_matrikel][1] + "\n        \nVorname: " + students[_matrikel][2] + "\n        \nAlter: " + students[_matrikel][3] + "\n        \nGeschlecht: " + (students[_matrikel][4] === true ? "Männlich" : "Weiblich") + "\n        \nKommentar:" + students[_matrikel][5];
        }
        else {
            return "Deine Daten sind nicht in der Datenbank gespeichert.";
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main.js.map