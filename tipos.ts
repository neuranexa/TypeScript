// Tipo booleano
let isTrue= true;
console.log(`Booleano: ${isTrue}`);

/*---------------------------------------------------------------*/
// Todos los tipos de number 4, 4.000, 00.1
let entero: number = 6;
console.log(`Entero: ${entero}`);
let decimal: number = 5.45;
console.log(`Decimal: ${decimal}`);
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

/*---------------------------------------------------------------*/
// Tipo string
let marca: string = 'Toyota';
let modelo: string = "Prius";
console.log(`Vehiculo -> Marca: ${marca} - Modelo: ${modelo}`);

/*---------------------------------------------------------------*/
// Arrays
let listaDeNumeros: number[] = [1,2,3,4,5];
console.log( `ArrayUno: ${listaDeNumeros}` );
// No admite tipo string
//listaDeNumeros.push('a');
let listaDeNumerosDos: Array<number> = [1,2,3,4,5];
console.log( `ArrayDoa: ${listaDeNumerosDos}` );

/*---------------------------------------------------------------*/
// Tupla en los array
let futbolista: [string, number];
futbolista = ['Jesus Finol', 33];
console.log( `Futbolista: ${futbolista}` );
console.log( `Nombre del futbolista: ${futbolista[0]}` );
console.log( `Edad del futbolista: ${futbolista[1]}` );
// Error accediendo a un posicion que no existe
//console.log( `Edad del futbolista: ${futbolista[2]}` );


/*---------------------------------------------------------------*/
// Tipo enum
// Cuando hacemos "Toyota = 100" asignamos una posicion de inicio distinta a la asignada 
enum MarcaDeCoches {
    Toyota = 100,
    Chevrolet,
    Ford
}

// Mostrar la posicion en la que se encuentra el coche
let pirus: MarcaDeCoches = MarcaDeCoches.Toyota;
console.log( `La posiscion de la marca del coches es la: ${ pirus}` );

// Imprimir el nombre del coche
console.log( `Nombre de la marca: ${MarcaDeCoches[100]}` );

/*---------------------------------------------------------------*/
// Tipado any
// No se recomienda usar
let variableSinTipo: any = 'Hola mundo';
console.log( `Valor actual:  ${variableSinTipo}` );
variableSinTipo = 100;
console.log( `Ahora el valor es:  ${variableSinTipo}` );

/*---------------------------------------------------------------*/
// Tipo unknown
// Se usa en los casos en los que no sabemos que valor tendremos ne un propiedad
let valorDesconocido: unknown = 4;
console.log( `Valor actual: ${valorDesconocido}` );
valorDesconocido = true;
console.log( `Nuevo valor: ${valorDesconocido}` );


/*---------------------------------------------------------------*/
// Tipo void
// creamos la funcion
function saludar(): void {
    console.log('Hola mundo');
}

// Ejecutamos la funcion
saludar();

/*---------------------------------------------------------------*/
//Tipos, null y undefined (null e indefinido)
// puede tener cualquiera de los dos valore "undefined | string"
let variableSinDefinir: undefined | string = undefined;
let variableNula: null | number = null;


/*---------------------------------------------------------------*/
// Tipos, never (nunca)
// esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// Ejecuta la funcion
//error('Ejecutando la funcion');

function fallo(): never {
    throw Error('Reportar fallo');
}

// ejecutar la funcion
//fallo();

// esta funcion no finaliza ya que posee un loop infinito
function loopInfinito(): never {
    while (true) {}
}

// Ejecutar la funcion
//loopInfinito();


/*---------------------------------------------------------------*/
// Tipos, objects (objetos)

declare function crear(o: object): void;

//crear({ prop: 0 });
//crear(null);
//crear(undefined);
//crear([]);

// false es un tipo primitivo, por lo cual se generara un error
//crear(false);


/*---------------------------------------------------------------*/
// Tipos, unions (uniones)
// Recibe un parametro de tipo numero o string
function print(id: number | string ){
    
    if(typeof id === 'string'){
        console.log(`El id string es ${ id.toUpperCase() }`);
    }else if(typeof id === 'number'){
        console.log(`El id number es ${ id.toFixed(2) }`);
    }else {
        console.log(`He enviado un ID invalido`);
    }   
}

// ejecutamos la funcion con los distintos tipo
print(1);
print("this_is_my_id")

// No permite enviar un valor booleano
//imprimir(true);


/*---------------------------------------------------------------*/
//Tipos, type assertion (confirmación de tipos)
let algunValor: unknown = 'Este es un string';
let longitudDelString: number = (algunValor as string).length;

// Esta es otra froma de hacer un cast
let otroValor: unknown = 'Otro valor';
let longitudOtroValor: number = (<string>otroValor).length;

/*---------------------------------------------------------------*/
// Tipos, functions (funciones)

// * Anotaciones para los parámetros de una función
function saludar2(nombre: string) {
    console.log(`El nombre es: ${nombre}`);
}

// Ejecutar la funcion
saludar2('Jesus Finol');


// * Tipos de valor de retorno de la función
function elevarAlCuadrado(base: number): number {
    return base * base;
}

// Ejecutar la funcion
let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log( `El resultado es: ${numeroAlCuadrado}` );

// * Funciones anónimas 
const nombre: string[]  = ['Juan', 'Pedro', 'Luis'];

// Forma completa
nombre.forEach( function(s) {
    console.log(s.toUpperCase());
})

// Forma reducida
nombre.forEach( s => console.log(s.toUpperCase()));

/*---------------------------------------------------------------*/
// Tipos, aliases (alias)
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenadas(punto: Punto){
    console.log( `El punto x es: ${punto.x} ` );
    console.log( `El punto y es: ${punto.y} ` );
}

// Ejecutar la funcion anonima
// Espera una estructura del tipo alias 'Punto'
imprimirCoordenadas(
    { 
        x: 2, 
        y: 8
    }
);

type textEnMayuscula = string;
function convertirMayusculas(texto: string): textEnMayuscula {
    return texto.toUpperCase();
}

// Ejecutar funcion que retorna alias
let aliasResult: string = convertirMayusculas('Hola mundo');
console.log( `El resultado del alias es: ${aliasResult}` );

/*---------------------------------------------------------------*/
// Tipos, interfaces (interfaces)

function imprimirEtiqueta(etiqueta: {label: string}) {
    console.log( `Este es el valor de mi label: ${etiqueta.label}` );
}

// Ejecutamos la funcion
let miEtiqueta = {numero: 10, label: 'Etiqueta uno'};
imprimirEtiqueta(miEtiqueta);


// Haciendo el mismo ejemplo pero con una inteface 
interface Etiqueta {
    label: string;
}

// Definiendo funcion
function imprimirTipado(etiqueta: Etiqueta) {
    console.log( `Mostrando valor desde la interfaz: ${etiqueta.label}` );
}

// Ejecutando funcion
let labelUno: Etiqueta = { label: 'El valos del label' };
imprimirTipado(labelUno);

// Propiedades opcionales de las interfaces

interface Cuadrado {
    color?: string;
    ancho: number;
}

function valoresOpcionales(cuadrado: Cuadrado) {
    console.log( `Color: ${cuadrado.color} - Ancho: ${cuadrado.ancho} `);
}

// Ejecutamos la funcion
let miCuadro: Cuadrado = { ancho: 30 };
valoresOpcionales(miCuadro);

// Propiedades de solo lectura de las interfaces
interface Punto1 {
    readonly x: number;
    readonly y: number;
}

let punto1: Punto1 = { x: 10, y: 30 };
// Error porque la propiedad es de solo lectura
//punto1.x = 50;

let ro: ReadonlyArray<number> = [1,2,3,4,5];
// No se agrega porque es solo lectura
//ro.push(6);

/*---------------------------------------------------------------*/
//Tipos, interfaces vs types (interfaces vs tipos)

interface Transporte {
    nombre: string;
}

type Figura = {
    nombre: string;
}

// ¿Cómo extender una interface?
interface Auto extends Transporte {
    ruedas: number;
}

//¿Cómo extender un type?
type Cuadrado1 = Figura & {
    lados: 4;
}

//¿Cómo agregar mas propiedades a una interface previamente definida?
interface Transporte {
    peso: number;
}


/*---------------------------------------------------------------*/
//Tipos, lierales (literals)
// Solo acepta los tipos definidos

enum EstadoCivil {
    soltero,
    casado
}

function imprimirEstadoCivil(estadoCivil: EstadoCivil) {
    console.log(`El estado civil es: ${EstadoCivil[estadoCivil]}`);
}

// Ejecutar funcion
let estado: EstadoCivil = EstadoCivil.soltero; 
imprimirEstadoCivil(estado);