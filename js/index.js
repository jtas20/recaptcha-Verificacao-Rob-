var botao = document.querySelector('#botao');

function VerifyHuman(){
    var response = document.querySelector('.g-recaptcha');
    var response = g-recaptcha.getResponse();

    if(response == 0){
        var botao = document.querySelector('#botao');
        botao.textContent = 'erro';
    }else{
        var botao = document.querySelector('#botao');
        botao.textContent = 'Sucesso';
    }

}