
let nomes = [];

function adicionar(){
    let campoNome = document.getElementById('nome-amigo');
    // validação para não permitir campo vazio.
    if(campoNome.value == ''){
        alert('É necessario informar um nome!');
        return;
    }

    let nome = campoNome.value;
    // validação para não permitir nomes repetidos.
    if(nomes.includes(nome)){
        alert('Nome já adicionado!');
        return;
    }

    let listaNomes = document.getElementById('lista-amigos');
    // adicionando os nomes no array.
    nomes.push(nome);
    
    if (listaNomes.textContent == '') {
        listaNomes.textContent = nome;
    } else {
        listaNomes.textContent = listaNomes.textContent + ', ' + nome;
    }
    campoNome.value = '';
}

console.log(nomes);

function sortear(){
    // validação para definir quantidade minima de participantes.
    if (nomes.length <= 3) {
        alert('Adicione no minimo 4 pessoas');
        return;
    }
    embaralhar(nomes);
    let listaSorteio = document.getElementById('lista-sorteio');
    
    for(i = 0; i < nomes.length; i++){
        if(i == nomes.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomes[i] + '--->' + nomes[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomes[i] + '--->' + nomes[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista){
    for(let i = lista.length; i ; i--){
        const indiceAleatorio = Math.floor(Math.random() * i);
        // atribuição via destructuring
        [lista[i - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[i - 1]];
    }
}

function reiniciar(){
    nomes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';


}

