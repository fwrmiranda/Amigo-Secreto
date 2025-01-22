let amigos = [];

function adicionarAmigo(){
  let nomeDoAmigo = document.getElementById("amigo");
  let nome = nomeDoAmigo.value.trim();
 
  if(nome == ""){
    alert("Por favor, insira um nome.");
    return;
  } else {
    amigos.push(nome);
    limparCampo();
  mostrarNomesDosAmigos();
  }
}

function mostrarNomesDosAmigos(){
  let listaAmigos = document.getElementById('listaAmigos');

  listaAmigos.innerHTML = "";

  let conteudo = '';

  for (let i = 0; i < amigos.length; i++){
      conteudo += "<li><strong>" + amigos[i] + "</strong></li>";
  }

  listaAmigos.innerHTML = conteudo;
}

function sortearAmigo(){
  if(amigos.length == 0){
    alert("Não há amigos para sortear!");
    return;
  } else{
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoEscolhido = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (`O amigo escolhido foi ${amigoEscolhido}.`);
  }
}

function limparCampo(){
  nomeDoAmigo = document.querySelector("input");
  nomeDoAmigo.value = "";
}












