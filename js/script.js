// Descrizione
// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)


// seleziona gli elementi del DOM
const outputList = document.getElementById('list');

// inizializzo e valorizzo l'endpoint
const apiEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// cicla per ripetere la richiesta AJAX verso l'API per dieci volte
for (i = 0; i < 10; i++){

    // invia la richiesta AJAX
    axios.get(apiEndpoint)
    .then(responseObj => {

        // recupera la mail dalla risposta
        const email = responseObj.data.response;

        // logga oggetto di risposta per debug
        console.log(responseObj);
        
        // logga email per debug
        console.log(email);

        // popolo la lista nel DOM
        outputList.innerHTML +=`
        <li>${email}</li>
        `;
    })

    .catch(function (error) {
        // gestisci errori nella richiesta
        console.error('Errore durante il recupero dell\'email:', error);
        // popolo la lista nel DOM
        outputList.innerHTML =`
        <li>404 | NOT FOUND</li>
        `;
      });

};
