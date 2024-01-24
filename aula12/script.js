function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 23
//var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
if (hora > 0 <= 12){
//console.log("bom dia");
img.src = 'dia.png'
}else if(hora > 12 <=  18){
    //console.log("boa tarde");
    img.src = 'tarde.png'
}else if(hora > 18 <= 23  ){
    //console.log("boa nite");
    img.src = 'noite.png'
}
}

