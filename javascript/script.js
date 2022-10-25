/*
Chiedere all'utente la sua mail
dopo aver compilato l'array, creare una condizione che verifica che l'email inserita dall'utente sia effettivamente contenuta nel nostro array: (BONUS: questa azione deve essere svolta dopo che l'utente ha cliccato sul bottone 'inizia la sfida!')
SE ciò è verificato:
    il container login scomparirà e apparirà il container del gioco.
    l'utente cliccando sul bottone genererà una coppia di numeri random da 1 a 6:
        SE il primo numero è più grande:
            Vince.
        Se è uguale:
            Pareggia.
        ALTRIMENTI:
            Perde.

ALTRIMENTI non potrà giocare.

IL LAYOUT GRAFICO È ANCORA DA FINIRE MA LA LOICA DI JS FUNZIONA.
*/

const userMail = document.getElementById('user-name');
const myMailArray = ['lucrezia.lorem@gmail.com', 'marco.ipsum@live.com', 'federico.dolor@icloud.com'];
const btnPlay = document.getElementById('btn-play');
console.log('sono il bottone:', btnPlay);

// const eleLogin = document.getElementsByClassName('.play-me');
// console.log('sono il login', eleLogin);


btnPlay.addEventListener('click', function(){
    
    if (myMailArray.includes(userMail.value)) {
        console.log('puoi giocare');

        // eleLogin.classList.add('hidden');
    
        const userNum = parseInt(Math.floor(Math.random() * (7 - 1)) + 1);
        console.log(userNum);
        const randomNum = parseInt(Math.floor(Math.random() * (7 - 1)) + 1);
        console.log(randomNum);
        
        if (userNum > randomNum){
            console.log('Hai vinto!');

        } else if (userNum == randomNum) {
            console.log('Pareggio!');

        } else {
            console.log('Hai perso!')
        }
    } else {
        console.log('Email non valida, inserisci l\'email valida per poter giocare.');
    }
})


