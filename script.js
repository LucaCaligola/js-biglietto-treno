const km = parseInt(prompt ("qaunti kilometri dei percorrere?"));
const anni = parseInt(prompt ("Quanti anni hai?"));

let prezzoPerKm = 0.21
 
if (anni <= 18) {
    prezzoPerKm=prezzoPerKm * 0.80
}

else if (anni => 65) {
    prezzoPerKm=prezzoPerKm * 0.60
}

let prezzoTicket = (prezzoPerKm * km).toFixed(2);

document.getElementById ("output").innerHTML = 'il costo del biglietto è di: ' + prezzoTicket