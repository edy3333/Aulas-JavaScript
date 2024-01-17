var idade = 28
console.log(`voce tem ${idade} anos`);
if(idade < 16){
console.log('nao vota! desculpe');
}else if(idade < 18 || idade > 65 ){
    console.log('voto opconal');
}else{
    console.log('voto obrigatório');
}
