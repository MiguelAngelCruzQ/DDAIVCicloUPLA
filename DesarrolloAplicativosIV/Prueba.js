//aprendizaje de javascript
//OPCIONAL,el punto y coma es opcional se puede colocar sin el y no va a haber un error de sintaxis

//inicializacion de variables
recipiente = "tasa";
//tipos de variables
String ="hola"; 
number =12;
Boolean =true;
//tipos de variables no declaradas 
//para declarar una variable (no inicializarla)
//var NO LIMITA su acceso si esta dentro de un bloque cerrado como un bucle o metodo
var noLimita;
var var1,var2,var3;
//let LIMITA su acceso si esta dentro de un bloque cerrado
let limita;
let var4,var5,var6;
//const  se considera una variable primitiva ,osea no puede cambiar su valor (NO SE MODIFICA) 
//tambien tiene que tomar un valor una vez definida,se debe inicializar a la vez 
const primitivo=12;
//alertas
alert(primitivo);
//hoisting :en algunas partes de codigo se pueden llamar a variables que aun no se an definido 
//estas si estan despues igual el codigo va a correr 
//variables inicializadas  sin valor (null)
let noDefinidas = null;
animal = undefined
//NaN Not an Numberno es un numero es una variable creada de una operacion entre variables con tipos 
//inmescñlables por ejemplo String*number esto es imposible y pues a ese valor se letoma como 
//variable NaN es interna no la asignas manualmente


//pruebas con prompt (es el scanner de javascript,con el puedes leer info de la aplicacion)
//significa que es una funcion o metodo que contiene un parametro en () que puede ser una 
//cadena de textp
let nombre = prompt("Dime tu nombre");
alert("hola "+ nombre)
//documet.write es para escribir dentro de un html
document.writeln(nombre);
//operadores 
numero = 10;
nummero +=5;
nummero -=5;
nummero *=5;
nummero /=5;
nummero %=5;//resto o residuo de una division 
nummero **=5;//exponencializacion,elevado a la 5

