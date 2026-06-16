function reverter(array) {
    let novoArray = [];
    
    // Percorre o array original de trás para frente
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }
    
    return novoArray;
}

console.log(reverter([1, 2, 3, 4, 5])); // Exibe: [5, 4, 3, 2, 1]
