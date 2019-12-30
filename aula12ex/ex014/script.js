function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = add_zeros(data.getHours());

    //Imprime a hora atualizando a cada segundo
    setInterval(imprime_hora, 1000);
    
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png';
        document.body.style.background = '#516BA4';
    }
    else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'fototarde.png';
        document.body.style.background = '#d58d71';
        
    }
    else {
        //Boa noite
        img.src = 'fotonoite.png';
        document.body.style.background = '#110a1d';
    }
}

function imprime_hora()
{
    var data = new Date();
    var hora = add_zeros(data.getHours());
    var min = add_zeros(data.getMinutes());
    var seg = add_zeros(data.getSeconds());

    msg.innerHTML = `Agora são ${hora}:${min}:${seg}`;
}

function add_zeros(x)
{
    return x < 10 ? "0" + String(x) : String(x);
}
