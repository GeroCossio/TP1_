//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numero1 = parseInt(prompt("Ingresa el primer numero:"));
let numero2 = parseInt(prompt("Ingresa el segundo numero:"));

if (numero1 > numero2) {
    document.write("El primer numero es el mas grande: " + numero1);
  } else if (numero2 > numero1) {
    document.write("El segundo numero es el mas grande " + numero2);
  } else {
    document.write("Hacelo de nuevo e ingresa dos numeros distintos :)");
  }