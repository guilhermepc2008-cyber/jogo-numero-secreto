let linhaNumerosSorteados = []

let numerosecreto = gerarnumero();
function exibir(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2} );
}



exibir('h1', 'Jogo do número secreto');
exibir('p', 'Dígite um número de 1 a 100');

let tentativas = 0;
let pontos = 1000;
let pp = 0;

function verificarChute() {

  let chute = document.querySelector('input').value;
  {
    if (chute == numerosecreto) {
      exibir("h1", " Você acertou!");
      tentativas++;
      let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa";
      exibir("p", `Parabéns!! Você descobriu o número secreto em ${tentativas} ${palavratentativa} com ${pontos}`)
      document.getElementById("reiniciar").removeAttribute("disabled");
      document.getElementById("atvd").disabled = true;

    }
    else if (chute > numerosecreto) {
      exibir("p", "O número secreto é menor");
      tentativas++;
      limparcampo();
     pp = 10 * (chute - numerosecreto);
     pontos -= Math.abs(pp);



    } else {
      exibir("p", "O número secreto é maior");
      tentativas++;
      limparcampo();
      pp = 10 * (chute - numerosecreto);
     pontos -= Math.abs(pp);
      
    }

  }


}

function limparcampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function gerarnumero() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeElementos = linhaNumerosSorteados.length;

if(quantidadeElementos == 10){
  linhaNumerosSorteados = [];
}

  if (linhaNumerosSorteados.includes(numeroEscolhido)){
    return gerarnumero()
  }else {
    linhaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

 function reiniciartudo()  {
exibir('h1', 'Jogue mais uma vez');
exibir("p", "Chute um número de 1 a 10");
limparcampo();
pontos = 1000;
tentativas = 0;
numerosecreto = gerarnumero();

document.getElementById("reiniciar").disabled = true;
document.getElementById("atvd").disabled = false;  
}


