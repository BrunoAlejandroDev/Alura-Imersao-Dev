// array para armazenar a URL dos filmes
let arrayFilmes = []

// criando a função "adicionarFilme"
function adicionarFilme(){
    // pegando os elementos HTML
    let campoFilme = document.querySelector('#filme').value;
    let filmeAdicionado = document.querySelector('#listaFilmes');

    // colocando os filmes no array
    arrayFilmes.push(campoFilme)
    console.log(arrayFilmes);

    // Limpando a lista antes de adicionarmos os filmes novamente
    filmeAdicionado.innerHTML = '';

    // Iterando sobre o array e inserindo os filmes no HTML
    for(let i = 0; i < arrayFilmes.length; i++){
        filmeAdicionado.innerHTML += `<img src = "${arrayFilmes[i]}">`
    }

    // Apagando o valor do campo input cada vez que o filme for adicionado
    document.querySelector('#filme').value = '';
}