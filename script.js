// Il programma dovrà chiedere all'utente il numero di chilometri che 
// vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto in pagina in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


const km = parseInt(prompt ("qaunti kilometri dei percorrere?"));
const anni = parseInt(prompt ("Quanti anni hai?"));

let prezzoPerKm = 0.21
 
if (anni < 18) {
    prezzoPerKm * 0.80
}

else if (anni > 65) {
    prezzoPerKm * 0.60
}

else anni < 65, anni > 18 {
    prezzoPerKm = 0.21
}

let prezzoTicket = prezzoPerKm * km

document.getElementById ("output").innerHTML = 'il costo del biglietto è di: ' + prezzoTicket