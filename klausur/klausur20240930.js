console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

class Volumen{
    constructor(){
        this.Länge
        this.Höhe
        this.Breite
    }
}

let Volumen = new Volumen
let.Höhe = 2
let.Breite = 2
let.Länge = 2

console.log("Höhe:" + let.Höhe , "Breite:" + let.Breite , "Länge:" + let.Länge)

// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if (Volumen>=1000){
    console.log("Volumen größer als 1000")
}



// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.



console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class

class Zeugnis{
    constructor(){
        this.Deutsch
        this.Mathe
        this.Englisch
        this.Religion
        this.Schule
        this.Vorname
        this.Nachname
        this.Klasse
        this.Klassenbeste
    }
}


// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.

let Zeugnis = new Zeugnis;
let.Deutsch = 2
let.Mathe = 3
let.Englisch = 3
let.Religion = 2
let.Schule = "BKB"
let.Vorname = "Hans"
let.Nachname = "Müller"
let.Klasse = "GW23A"


// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.

console.log(' "Deutsch:" + let.deutsch , ' "Mathe:" + let.mathe , ' "Englisch:" let.Englisch')

// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.




// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.

let lisa = 3;   // bei lokaklen Variablen mit kleinbuchstaben beginnen
let tom = 4; 
let max = 5;

if(durchschnitt<Math.min(lisa, tom, max)){
    zeugnis.Klassenbeste = true;  // Es wird im Zeugnis eine neue Eigenschaft ergänzt
    console.log("Lisa hat einen Durchschnitt von " + durschnitt + ". Sie ist Klassenbeste.")
}else{
    zeugnis.Klassenbeste = false;
    console.log("Lisa hat einen Durchschnitt von " + durschnitt + ". Sie ist nicht Klassenbeste.")
}






console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class Produkt{
    constructor(){
        this.Art                      // Eigenschaften beginnen immer mit Großbuchstaben
        this.MehrwertsteuerSatz       // Kamelhöckernotation verwenden
        this.MehrwertsteuerSatz       // D.h. Wörter mit Großbuchstaben verbinden
        this.Nettorechnungsbetrag     // + keine Leerzeichen in Namen
        this.Bruttorechnungsbetrag    // + keine Bindestriche in Namen
        this.Skontosatz
        this.Skonto
        this.Zahlungsbetrag
        this.Rabatt
        this.Rabattsatz
    }
}

let produkt = new Produkt();

// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.

produkt.NettoRechnungsbetrag = 370    // Bitte kein Kommma, sondern den Punkt für Nachkommastellen
                                      // verwenden
                                      // Bitte keine Einheit (z.B. EUR) dahinterschreiben
                                      // "370,00 Euro" ist keine Zahl. Damit kann nicht gerechnet werden

produkt.Art = "Zeitung"

// Wenn die Produktart Zeitung ODER Lebensmittel ODER Buch ist, dann ...
if(produkt.Art === "Zeitung" || produkt.Art === "Lebensmittel" || produkt.Art === "Buch"){

    produkt.MehrwertsteuerSatz = 0.07  // Alternativ kann man auch 7 schreiben, dann ändert sich 
                                       // natürlich die Berechnung im Folgenden.

}else{
    produkt.MehrwertsteuerSatz = 0.19
}

console.log("Der MwSt-Satz beträgt: " + produkt.MehrwertsteuerSatz)
console.log("Produktart: " + produkt.Art)


// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

produkt.Mehrwertsteuer = produkt.NettoRechnungsbetrag * produkt

console.log("Mehrwertsteuer: " + produkt.Mehrwertsteuer)


// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

produkt.Bruttorechnungsbetrag = produkt.NettoRechnungsbetrag + produkt.Mehrwertsteuer



// 3e) NUR KLAUSURSCHREIBER
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

produkt.Skonto

if(produkt.Bruttorechnungsbetrag < 900) { produkt.Skonto = 2.0 }
if(produkt.Bruttorechnungsbetrag < 800) { produkt.Skonto = 1.9 }
if(produkt.Bruttorechnungsbetrag < 700) { produkt.Skonto = 1.8 }
if(produkt.Bruttorechnungsbetrag < 600) { produkt.Skonto = 1.7 }
if(produkt.Bruttorechnungsbetrag < 500) { produkt.Skonto = 1.6 }
if(produkt.Bruttorechnungsbetrag < 400) { produkt.Skonto = 1.5 }
if(produkt.Bruttorechnungsbetrag < 300) { produkt.Skonto = 1.4 }


console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.




// 4b) // NUR KLAUSURSCHREIBER
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.