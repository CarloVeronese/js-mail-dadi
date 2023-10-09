let max = 6
let min = 1
let userRandomNumber = Math.floor(Math.random() * (max - min + 1) + min)
let computerRandomNumber = Math.floor(Math.random() * (max - min + 1) + min)
console.log('Numero utente: ',userRandomNumber, 'Numero computer: ', computerRandomNumber, 'Il vincitore è: ')
if (userRandomNumber > computerRandomNumber){
    console.log("l'utente")
}
else if (computerRandomNumber > userRandomNumber){
    console.log('il computer')
}
else{
    console.log('nessuno, è un pareggio')
}