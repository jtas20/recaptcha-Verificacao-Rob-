var botao = document.querySelector('#botao');

function VerifyHuman(){
    var response = grecaptcha.getResponse();

    if(response.length == 0){
        var botao = document.querySelector('#botao');
        botao.textContent = 'erro';
    }else{
        var botao = document.querySelector('#botao');
        botao.textContent = 'Sucesso';
    }

}