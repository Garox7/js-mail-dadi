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

ALTRIMENTI non potrà giocare
*/

const userMail = document.getElementById('user-name');
const myMailArray = ['lucrezia.lorem@gmail.com', 'marco.ipsum@live.com', 'federico.dolor@icloud.com'];

const eleLogin = document.querySelector('.login__section');
console.log('sono il login', eleLogin); //DEBUG
const btnLogin = document.getElementById('btn-login');
console.log('sono il bottone di login:', btnLogin); //DEBUG
const loginFailure = document.querySelector('.login__fail');

const btnPlay = document.getElementById('btn-play');
const elePlay = document.querySelector('.play__me');
const eleUser = document.querySelector('.user__number');
const eleRandom = document.querySelector('.random__number');
console.log('qui va il numero dell\'utente:',eleUser, 'qui va il numero del pc:',eleRandom) //DEBUG
const eleResult = document.querySelector('.result');



btnLogin.addEventListener('click', function(){
    
    if (myMailArray.includes(userMail.value)) {
        console.log('puoi giocare'); //DEBUG
        
        eleLogin.classList.add('hidden');
        elePlay.classList.remove('hidden');
        
        
        btnPlay.addEventListener('click', function(){
            
            const userNum = parseInt(Math.floor(Math.random() * (7 - 1)) + 1);
            const randomNum = parseInt(Math.floor(Math.random() * (7 - 1)) + 1);
            eleUser.innerHTML = userNum;
            eleRandom.innerHTML = randomNum;
            console.log('Numero utente:',userNum,'Numero computer:',randomNum); //DEBUG

            if (userNum > randomNum){
                eleResult.innerHTML = 'Hai vinto!'
                console.log('Hai vinto!');
    
            } else if (userNum == randomNum) {
                eleResult.innerHTML = 'Pareggio, ritenta!'
                console.log('Pareggio!');
    
            } else {
                eleResult.innerHTML = 'Hai Perso!'
                console.log('Hai perso!')
            }

        })

    } else {
        loginFailure.innerHTML = 'Email non valida! inserisci un\'email valida per giocare.';
    }
})


