function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad < 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}

clasificarEdad(17);
clasificarEdad(16);
clasificarEdad(65);