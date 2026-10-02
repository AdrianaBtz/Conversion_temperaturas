function conversionTemperatura(){
    
    let temperatura = prompt("Ingresa la temperatura en grados Celsius") ;
    let celsius = Number(temperatura); // cambia el string (prompt) a un dato numerico

    if(temperatura === null || temperatura.trim() === "" || isNaN(celsius) ){
        alert("Error: ingresa número válido");
        conversionTemperatura(); // si marca error, vuelve a preguntar
    } else {
        let kelvin = celsius + 273.15;
        let fahrenheit = (celsius* 9/5) + 32;

        //imprime en consola
        console.log("Grados Kelvin: " + kelvin);
        console.log("Grados Fahrenheit: " + fahrenheit);

        // imprime en el DOM
        document.write("<p>Grados Kelvin: " + kelvin + "</p>");
        document.write("<p>Grados Fahrenheit: " + fahrenheit + "</p>");
    }

} //conversionTemperatura

conversionTemperatura();