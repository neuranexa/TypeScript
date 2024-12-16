interface Computador {
    os: 'windows' | 'linux' | 'mac';
    monitor?: string;
    memoria: number;
    procesador: 'intel' | 'amd'; 
} 

console.log('--------------------------------------------------');
console.log('>>> Iteracion uno <<<');
console.log('--------------------------------------------------');

function print(computdor: Computador) {
    console.log(`Sistema operativo: ${computdor.os}`);
    console.log(`Memoria: ${computdor.memoria}`);
    console.log(`Processdor: ${computdor.procesador}`);
}

// Propiedades con valores que acepta - solo los definidos
const miComputador: Computador = {
    os: 'linux',
    memoria: 32,
    procesador: 'intel'
};

// ejecutar funcion
print(miComputador);

console.log('--------------------------------------------------');
console.log('>>> Iteracion dos <<<');
console.log('--------------------------------------------------');

// Propiedades con valores que acepta - solo los definidos
const miComputador2: Computador = {
    os: 'linux',
    memoria: 32,
    monitor: 'Asus Gamming',
    procesador: 'intel'
};

// ejecutar funcion
print(miComputador2);