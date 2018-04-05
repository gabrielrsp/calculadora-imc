/**
 * 
 * @param {number} massa
 * @param {Number} altura
 * @description Dado a massa em kg e a altura em cm, essa função retorna
 * o indice de massa corporal
 */
function IMC (massa,altura){
    if(typeof massa !== 'number' || typeof altura !== 'number'){
        console.error('Funcao IMC espera dois parametros numericos');
        return NaN;
    }
    altura = altura / 100;
    return massa / (Math.pow(altura,2));
}


/**
 * 
 * @param {Number} imc
 * @description Dado um imc essa função retorna a situação da pessoa
 * 
 */
function SituacaoIMC(imc){

    if(typeof imc !== 'number'){
        console.error('Funcão SituacaoIMC espera um parametro numerico.');
        return;
    }

    if (imc < 17)
        return "Muito abaixo do peso"
            
    if( imc >= 17 && imc <= 18.49)
        return "Abaixo do peso"
        
    if( imc >= 18.5 && imc <= 24.99)
        return "Peso normal"
        
    if( imc >= 25 && imc <= 29.99)
        return "Acima do peso"
        
    if( imc >= 30 && imc <= 34.99)
        return "Obesidade 1"
        
    if( imc >= 35 && imc <= 39.99)
        return "Obesidade 2 (severa)"
        
    if( imc > 39)
        return "Obesidade 3 (Mórbida)" 
        
}