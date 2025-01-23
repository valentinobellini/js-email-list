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

// inizializza un array vuoto in cui salvare le mail
let mailsArray = [];

// aggiungi un event listener al bottone di refresh
generateButton.addEventListener('click', () => {

    // pulisci la lista al click del bottone
    outputList.innerHTML = '';
    // svuota array emails al click del bottone
    mailsArray = [];


    // cicla per ripetere la richiesta AJAX verso l'API per dieci volte
    for (let i = 0; i < 10; i++) {

        // invia la richiesta GET all'API
        axios.get(apiEndpoint)
            .then(responseObj => {

                // recupera la mail dalla risposta JSON dell'API
                const email = responseObj.data.response;

                // logga emails per debugging
                console.log(email);

                // salva le mails nell'array
                mailsArray.push(email);

                // logga array per debug
                console.log(mailsArray);

                // solo quando l'array contiene 10 mail
                if (mailsArray.length == 10) {
                    // popola la lista in pagina
                    for (let i = 0; i < 10; i++) {
                        outputList.innerHTML +=`
                            <li>${mailsArray[i]}</li>
                            `;
                    }

                }

            })

            .catch(function (error) {
                // gestisci eventuali errori nella richiesta
                console.error('Errore durante il recupero dell\'email:', error);

                // aggiungi messaggio di errore in pagina
                outputList.innerHTML =`
                    <li>404 | NOT FOUND</li>
                    `;
            });
    }
});


