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
