// Função para formatar 1 em 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

//Criar intervalo
const interval = setInterval(() => {
    //Captura o horário atual
    const now = new Date();

    //Formata a data conforme dd/mm/aaaa hh:mm.ss
    const hora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    const data = zeroFill(now.getDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + '.';
    
    //Exibe na tela
    document.getElementById('date').innerHTML = data
    document.getElementById('hours').innerHTML = hora
			}, 1000);
