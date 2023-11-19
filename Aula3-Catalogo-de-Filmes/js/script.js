// Criando uma lista (array) para armazenar os filmes
// let listaFilmes = ['https://images.justwatch.com/poster/190107318/s718/questao-de-tempo.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/78/52/20295598.jpg', 'https://br.web.img2.acsta.net/medias/nmedia/18/92/40/19/20215532.jpg'];

// Inserindo os filmes dentro do array de filmes de forma individual
// listaFilmes[0] = 'https://images.justwatch.com/poster/190107318/s718/questao-de-tempo.jpg'
// listaFilmes[1] = 'https://br.web.img3.acsta.net/medias/nmedia/18/90/78/52/20295598.jpg'
// listaFilmes[2] = 'https://br.web.img2.acsta.net/medias/nmedia/18/92/40/19/20215532.jpg'

// Percorrendo o array para mostrar os filmes no site
// for(let i = 0; i < listaFilmes.length; i++){
//     document.write('<img src=' + listaFilmes[i] + '>')
// }

// criando arrays para armazenar os nomes e URLs dos filmes
let nomesFilmes = ['Questão de Tempo', 'As vantagens de ser invisível', 'O diário da princesa'];
let urlsFilmes = ['https://images.justwatch.com/poster/190107318/s718/questao-de-tempo.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/78/52/20295598.jpg', 'https://br.web.img2.acsta.net/medias/nmedia/18/92/40/19/20215532.jpg'];

// função para adicionar novo filme à lista se a URL terminar com ".jpg"
function adicionarFilme(nome, url) {
    if (url.endsWith('.jpg')) {
        nomesFilmes.push(nome);
        urlsFilmes.push(url);
        document.write('<p>Filme: ' + nome + '</p><img src=' + url + '>');
    } else {
        console.log('URL inválida. O filme deve ter uma URL terminada em ".jpg".');
    }
}

// percorrendo os arrays para mostrar os filmes no site
for(let i = 0; i < nomesFilmes.length; i++){
    document.write('<p>Filme: ' + nomesFilmes[i] + '</p><img src=' + urlsFilmes[i] + '>');
}

// adicionando novos filmes
adicionarFilme('This is us', 'https://br.web.img3.acsta.net/pictures/17/09/27/19/21/2415587.jpg')