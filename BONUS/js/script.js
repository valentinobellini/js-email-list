// Descrizione
// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)


// seleziona gli elementi del DOM
const outputList = document.getElementById('list');
const generateButton = document.getElementById('button');

// definisci l'endpoint dell'API
const apiEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// aggiungi un event listener al bottone di refresh
generateButton.addEventListener('click', () => {
    // pulisci la lista al click del bottone
    outputList.innerHTML = '';

    // cicla per ripetere la richiesta AJAX verso l'API per dieci volte
    for (let i = 0; i < 10; i++) {

        // invia la richiesta al'API
        axios.get(apiEndpoint)
            .then(responseObj => {

                // recupera la mail dalla risposta dell'API
                const email = responseObj.data.response;

                // logga emails per debugging
                console.log(email);

                // popola la lista in pagina
                outputList.innerHTML += `
                <li>${email}</li>
                `;
            })

            .catch(function (error) {
                // gestisci eventuali errori nella richiesta
                console.error('Errore durante il recupero dell\'email:', error);

                // aggiungi messaggio di errore in pagina
                outputList.innerHTML = `
        <li>404 | NOT FOUND</li>
        `;
            });
    }
});


