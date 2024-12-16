/*---------------------------------------------------------------*/
//Funciones como expresiones (tipos)
// Una funcion que recibe por parametro otra funcion
function sayHello3( fn: (a: string) => void) {
    fn(' ->>>>>> Hola mundo');
}

function imprimirPorConsola(a: string ) {
    console.log( `El valor de a es: ${a}` );
}  

sayHello3(imprimirPorConsola);

// Un ejemplo mas comprensible


// Definicion del parametro a recibir
type Fn = (a: string) => void;

// Funcion a ejecutar
function saludaros(fn: Fn) {
    fn('Funcion como parametro con un alias');
}

// Funcion a pasar por parametro
function imprimirEnConsola(s: string) {
    console.log(s);
}

// Ejecutando el metodo de la funcion
saludaros(imprimirEnConsola);

/*---------------------------------------------------------------*/
// Funciones, call signature (firma de funciones)


// Definicion de la funcion que pasaremos por parametro
type FuncionDescribible = {
    descripcion: string;
    base: number;
    (base: number): number;
};

// Definición de la a ejecutar
function imprimirEnConsola1(fn: FuncionDescribible) {
    console.log(fn.descripcion + fn(fn.base));
}

// creamos una variable del tipo que enviaremos por la firma de la funcion
const cuadradoDeUnNumero: FuncionDescribible = (base) => {
    return base * base;
};

// completamos los valores de la variable
cuadradoDeUnNumero.descripcion = "El cuadrado de 2 es ";
cuadradoDeUnNumero.base = 2;

// ejecutamos el metodo enviando el tipo definido
imprimirEnConsola1(cuadradoDeUnNumero);

// Ejecutamos de nuevo todo el ciclo
const mitadDeUnNumero: FuncionDescribible = (base) => {
    return base / 2;
};

mitadDeUnNumero.descripcion = "La mitad de 10 es ";
mitadDeUnNumero.base = 10;
imprimirEnConsola1(mitadDeUnNumero);


/*---------------------------------------------------------------*/
// Funciones, constructor signature (firma de constructores)
interface Transporte1 {
    nombre: string;
}

class Caballo implements Transporte1 {
    constructor(public nombre: string) {}
}

class Automovil implements Transporte1 {
    constructor(public nombre: string) {}
}

type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
    return new ctr(nombre);
}