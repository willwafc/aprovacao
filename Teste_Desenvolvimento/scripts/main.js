let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');


function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
	if(!meuNome || meuNome === null) {
    defineNomeUsuario();
	} else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Bem-vindo ao Sistema de Aprovação On-Line, ' + meuNome;
	}
};

meuBotao.onclick = function() { defineNomeUsuario();
}
	