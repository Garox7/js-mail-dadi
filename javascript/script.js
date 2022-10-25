/*
Chiedere all'utente la sua mail
dopo aver compilato l'array, creare una condizione che verifiche che l'email inserita dall'utente sia effettivamente contenuta nel nostro array:
SE si, può giocare
ALTRIMENTI no.

*/



const userMail = prompt('inserisci la tua mail per accedere');
const myMailArray = ['lucrezia.lorem@gmail.com', 'marco.ipsum@live.com', 'federico.dolor@icloud.com'];

if (myMailArray.includes(userMail)) {
    console.log('puoi giocare');
} else {
    console.log('Email non valida, inserisci l\'email valida per poter giocare.');
}
