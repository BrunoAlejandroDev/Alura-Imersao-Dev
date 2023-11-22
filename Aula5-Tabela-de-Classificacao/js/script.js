/*
Desafios:
    Adicionar jogadores
    Personalizar tabela
*/

// Construindo um objeto para cada jogador
let paulo = {
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

let rafa = {
    nome: 'Rafa',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

let bruno = {
    nome: 'Bruno',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

// pegando a tabela de jogadores
let tabela = document.querySelector('#tabelaJogadores');

function atualizarTabela(){
    tabela.innerHTML = `
        <tr>
            <td>${paulo.nome}</td>
            <td>${paulo.vitoria}</td>
            <td>${paulo.empate}</td>
            <td>${paulo.derrota}</td>
            <td>${paulo.pontos}</td>
            <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
            <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
        </tr>
    `;
}
atualizarTabela();

function adicionarVitoria(jogador){
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    console.log(jogador)
    atualizarTabela()
}

function adicionarEmpate(jogador){
    jogador.empate++;
    jogador.pontos++;
    atualizarTabela()
}

function adicionarDerrota(jogador){
    jogador.derrota++;
    atualizarTabela();
}