export function aleatorio(lista) {
    // Função para pegar um item aleatório de uma lista
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

// Geração de nomes aleatórios
export function gerarNomeAleatorio() {
    const nomes = [
        "Alice", "Bruno", "Carla", "Diego", "Eduarda", 
        "Fernando", "Gabriela", "Henrique", "Isabela", "João"
    ];
    return aleatorio(nomes); // Pega um nome aleatório da lista
}