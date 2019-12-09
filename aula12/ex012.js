var agora = new Date()
var hora = agora.getHours()
var saudacao
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
   saudacao = 'Bom dia!'
}
else if (hora <= 18) {
    saudacao = 'Boa tarde!'
}
else {
    saudacao = 'Boa noite!'
}
console.log(saudacao)