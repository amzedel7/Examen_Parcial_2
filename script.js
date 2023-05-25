let uno = true;
let dos = "2";
let tres = 3;
let cuatro = null;
let cinco;
let seis = {numero: 6};
let siete = [7];
console.log(typeof(uno));
console.log(typeof(dos));
console.log(typeof(tres));
console.log(typeof(cuatro));
console.log(typeof(cinco));
console.log(typeof(seis));
console.log(typeof(siete));



let nombreProducto = 'Celular';
precio = 3700
direccionEnvio = 'km9 Av. Banzer'
pais = 'Bolivia'
costoEnvio = '200 bs'
console.log(nombreProducto,precio,direccionEnvio,pais,costoEnvio);



let libreria = 'React es una biblioteca Javascript de código abierto creada por Facebook.'



console.log(libreria.length);



let frase = 'React es una biblioteca'
console.log(frase.replace('React es una biblioteca','ReactNative es un framework'));



//REACT es una BIBLIOTECA JavaScript de CÓDIGO ABIERTO CREADA por FACEBOOK.
let libro1 = libreria.substring(0,5) 
let libro2 = libreria.substring(5,12)
let libro3 = libreria.substring(12,23);
let libro4 = libreria.substring(23,37);
let libro5 = libreria.substring(38,100);
console.log(libro1.toUpperCase(),libro2.toLowerCase(),libro3.toUpperCase(),libro4.replace('Javascript de','JavaScript de'),libro5.toUpperCase());



let vehiculos = 'TOYOTA, SUZUKI, BMW, FORD, KIA, ISUZU, AUDI'
console.log(vehiculos.split(','));



let letra = 'R'
console.error(letra.charCodeAt());



let saludo = 'HOLA MUNDO '
console.log(saludo.repeat(4));



console.log('Hola estudio "Sistema" y estoy llevando la materia de:\n \tPROGRAMACION 1\n \tTurno: Noche \nEn el grupo 2');



 function numero_ramdom (min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
    };
    console.log(numero_ramdom(25,51));



console.log(libreria.substring(7,8));



let String = 'JavaScript'
 const numer = Math.floor(Math.random()*10); 
 let firsletter = String[numer];
 console.warn(firsletter);



 /** 9.8     -> Numero entero
-5      -> Numero Absoluto
62      -> Cadena de texto
"28"    -> Numero entero
"15.65" -> Numero decimal */
console.log(Math.round(9.8));
console.log(Math.abs(-5));
console.log(parseInt("28"));
console.log(Number("15.65"));



console.log(Math.max(4, 8, 16, 18, -52, -3, -1, 7));



let num1 = 9.78
let num2 = 5.20
let num3 = 1.64
let num4 = 5.7
let num5 = 3.23
console.log(Math.floor(num1),(Math.ceil(num1)));
console.log(Math.floor(num2),(Math.ceil(num2)));
console.log(Math.floor(num3),(Math.ceil(num3)));
console.log(Math.floor(num4),(Math.ceil(num4)));
console.log(Math.floor(num5),(Math.ceil(num5)));



