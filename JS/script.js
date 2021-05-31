var emailRegistrati = ['marco@hotmail.com', 'mattia27@gmail.com', 'agnesebernutti@hotmail.it', 'arisa2198@yahoo.it'];
var email = prompt("Inserisci l'e-mail!");

var check = false;

for (var i = 0; i < emailRegistrati.length; i++) {
    if (email === emailRegistrati[i]) {
        check = true;  
    }
}

if (check = true) {
    document.getElementById('output').innerHTML = 'Puoi procedere!';
} else{
    document.getElementById('output').innerHTML = ('Registrati nella nostra pagina!');
}


// Gioco dei Dadi

var numUser =  Math.floor(Math.random() *6)+1;
var numCasual =  Math.floor(Math.random() *6)+1;


document.getElementById("number-casual").innerHTML = numCasual;
document.getElementById("number-user").innerHTML = numUser;

if(numUser > numCasual){
     document.getElementById("win").innerHTML = "You are the winner!"

} else if (numCasual > numUser){
    document.getElementById("win").innerHTML = ".... is the winner"
} else {
    document.getElementById("win").innerHTML = "Draw"

}