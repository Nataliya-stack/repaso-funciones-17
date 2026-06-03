const inputMaxMin = document.getElementById("input");
const btnMaxMin = document.getElementById("btn");
const resultadoMaxMin = document.getElementById("resultado");

const buscarMaxYMin = (arrayNumeros) => {
    const maximo = Math.max(...arrayNumeros);
    const minimo = Math.min(...arrayNumeros);
    
//const buscarMaxYMin = (arrayNumeros) => {
    //let maximo = arrayNumeros[0]; 
    //let minimo = arrayNumeros[0]; 

    //for (let i = 1; i < arrayNumeros.length; i++) {
        //if (arrayNumeros[i] > maximo) {
            //maximo = arrayNumeros[i]; 
        //}
        //if (arrayNumeros[i] < minimo) {
            //minimo = arrayNumeros[i]; 
        //}
    //}
    //return [maximo, minimo];
//};

    return [maximo, minimo];
};

btnMaxMin.addEventListener("click", () => {
    const valorInput = inputMaxMin.value;

    if (valorInput.trim() === "") {
        resultadoMaxMin.textContent = "Por favor, ingrese números.";
        return;
    }

    const arrayOriginal = valorInput.split(/[\s,]+/).filter(Boolean).map(Number);

    if (arrayOriginal.some(isNaN)) {
        resultadoMaxMin.textContent = "Error: utilice solo números (separados por espacio o coma).";
        return;
    }

    const arrayResultado = buscarMaxYMin(arrayOriginal);
    resultadoMaxMin.textContent = `[${arrayResultado[0]}, ${arrayResultado[1]}]`;

    inputMaxMin.value = "";
    inputMaxMin.focus();
});
