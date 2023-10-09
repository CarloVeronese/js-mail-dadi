const mailArray = [
    'mailesempio1@gmail.com',
    'mailesempio2@gmail.com',
    'mailesempio3@gmail.com',
    'mailesempio4@gmail.com',
    'mailesempio5@gmail.com',
    'mailesempio6@gmail.com',
    'mailesempio7@gmail.com',
    'mailesempio8@gmail.com',
    'mailesempio9@gmail.com',
]

userEmail = prompt('Inserisci la tua e-mail:')

mailNumber = mailArray.length

let accesPermission = false

for(let i = 0; i < mailNumber; i++){
    if(userEmail == mailArray[i]){
        console.log('Accesso autorizzato')
        accesPermission = true
        break
    }
}

if (accesPermission == false){
    console.log('Accesso non autorizzato')
}