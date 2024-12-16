// Object Types (tipos de objetos)

// De froma anonima
function sayHello2(persona: {nombre: string , edad: number}) {
    return ` Hola ${persona.nombre} `;
}

console.log(sayHello2({nombre: 'Juan Perez', edad: 46}));

// Mediante una interface
interface Person {
    name: string;
    age: number;
}

function hello(person: Person) {
    return `Hello ${person.name}`;
}

const p = {
    name: 'Marta Flores',
    age: 35
}

console.log(hello(p));