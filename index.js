/*this is an event */
/*alert("Im annoying");*/


var username = prompt("Please enter your name");
var car = new Array("BMW", "Sabb", "Maratia");
console.log(username);

if(username==="Husky") {

    document.write("<h1>Hello " + username + " You won a " + car[0] + "!</h1>");
    document.write("<img src=\"Images/BMW.bmp\" alt=\"Husky-webdev\'s logo\"> ");

}
else if (username==="Husky-webdev") {
    document.write("<h1>Hello " + username + " You won a " + car[1] + "!</h1>");
    document.write("<img src=\"Images/sabb.bmp\" alt=\"Husky-webdev\'s logo\"> ");

}

else if (username==="Preston") {
    document.write("<h1>Hello " + username + " You won a " + car[2] + "!</h1>");
    document.write("<img src=\"Images/maruti%20.bmp\" alt=\"Husky-webdev\'s logo\"> ");

}

else {
    document.write("<h1>Hello " + username + "</h1>");
    document.write("<img src=\"Images/jlumycg9.bmp\" alt=\"Husky-webdev\'s logo\" height=\'200px\' width=\'200px\'> ");

}


/*document.write("<h1>Hello " + username + "!</h1>");*/

