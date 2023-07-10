// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

const changeH1Text=function (){
    document.querySelector('h1').innerText='Changed'
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

const changeBackGroundColor=function(){
    document.querySelector('body').style.backgroundColor='blue'
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

const changeAddress=function(){
    document.querySelector('#address').innerHTML='80100 Suite Apartment Portland Or, United States'
}
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

const addClass=function(){
   let links= document.querySelectorAll('a')
for (let link of links){
    link.classList.add('classlink')
}
}
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

const addimg=function(){
    let photos= document.querySelectorAll('img')
 for (let photo of photos){
     photo.classList.toggle('immagini')
 }
 }
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  }

const changeColorPrice=function(){
    const randomcolor=getRandomColor()
    let prices=document.querySelectorAll('.prices')
for (let price of prices){
    price.style.color=randomcolor
}
}


