function parimp(n){
    if(n%2==0){
        return "par"
    }else{
        return "impar"
    }
}
let res = parimp(11)
console.log(res);

//OUTRO EXEMPLO DE FUNÇÃO//
function soma (n1,n2){
    return n1*n2
}
console.log(soma(3,3));

//FUNÇÃO DENTRO DE VARIAVEL //
let v = function(x){
    return x*3
}
console.log(v(30));

//EXEMPLO DE COMO FAZER FATORIAL DE 5! //
function fatorial(n){
    let fat = 1 ;
    for(let c=n; c>1; c--){
        fat*=c
    }
    return fat
}
console.log(fatorial(5));