// script.js
function exibirMensagem() {
    var nome = window.prompt('Qual o seu nome?');
    if (nome !== null && nome.trim() !== "") {
        window.alert('Olá, ' + nome + '! É um prazer!');
    } else {
        window.alert('ok!');
    }
}

// Chamando a função exibirMensagem() automaticamente ao carregar a página
exibirMensagem();

function atualizarHora() {
    var agora = new Date();
    var diaSemana = obterDiaSemana(agora.getDay());
    var diaMes = agora.getDate().toString().padStart(2, '0');
    var mes = obterNomeMes(agora.getMonth());
    var ano = agora.getFullYear();
    var hora = agora.getHours().toString().padStart(2, '0');
    var minutos = agora.getMinutes().toString().padStart(2, '0');
    var segundos = agora.getSeconds().toString().padStart(2, '0');

    var mensagemHora;
    if (hora < 12) {
        mensagemHora = 'Bom Dia!';
    } else if (hora < 18) {
        mensagemHora = 'Boa Tarde!';
    } else {
        mensagemHora = 'Boa Noite!';
    }
	
    var spanHora = document.getElementById("hora-atual");
    spanHora.textContent = `.....Olá! Hoje é ${diaSemana}, ${diaMes} de ${mes} de ${ano}, ${hora}:${minutos}:${segundos} h. ${mensagemHora}  Valorize a vida!`;
}

function obterDiaSemana(numeroDia) {
    var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[numeroDia];
}

function obterNomeMes(numeroMes) {
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];
}

// Chamando a função atualizarHora() automaticamente ao carregar a página
atualizarHora();

function virarCard(card) {
  card.classList.toggle("virado");
}

function verificar(){
	var date=new Date()
	var ano=date.getFullYear()
	var fano=document.getElementById('txtano')
	var res=document.querySelector('div#res')
	if (fano.value.length == 0 || Number(fano.value) > ano) {
		window.alert('[ERRO] Verifique os dados e tente novamente!')
	} else {
		var fsex = document.getElementByName('radsex')
		var idade = ano - Number(fano.value)
		var gênero = ''
		var img = document.createElement('img')
		res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
	}
}