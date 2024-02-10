function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
    }else {
        res.innerHtml = 'contando: '
        let i = Number(ini.Value)
        let f = Number(fim.Value)
        let p = Number(passo.Value)

        for(let c = i; c <= f; c += p){
         res.innerHTML += `${c}`  
        }
    }
}

