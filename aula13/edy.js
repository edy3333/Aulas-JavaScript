function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML `Idade Calculda ${res}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
             //criança  
             img.setAttribute('src', 'babyH.png') 
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src', 'jovemH.png') 
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'jovemH.png') 
            }else{
                //idoso
                img.setAttribute('src', 'velhoH.png') 
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança   
                img.setAttribute('src', 'babyM.png') 
               }else if(idade < 21 ){
                   //jovem
                   img.setAttribute('src', 'jovemM.png') 
               }else if(idade < 50){
                   //adulto
                   img.setAttribute('src', 'jovemM.png') 
               }else{
                   //idoso
                   img.setAttribute('src', 'velhaM.png') 
               }
        }
        res.innerHTML `Dectamos ${genero} com ${idade} anos.`
        res.style.textAling = 'center'
        res.appendChild(img)
    }
}