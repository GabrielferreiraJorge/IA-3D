const nomes = ["Jansei", "Maria", "Vitoria", "Anna", "Carolina", "Dyhaycom"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)