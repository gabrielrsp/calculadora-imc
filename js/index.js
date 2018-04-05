(function(){
    /**
     * 
     * @param {String} str 
     */
    function validacaoInputFloat(str){
        str = str.replace(/[,]/g,".");
        str = str.replace(/[^0-9.]/g,"");
        
        let dotindex = str.search(/[.]/g);

        if(dotindex > -1){
            let casasDecimais = str.substr(dotindex);
            str = str.substr(0,dotindex);
            casasDecimais = casasDecimais.replace(/[.]/g,"");
            str = str + '.' + casasDecimais;
        }
        
        return str;
    } 


    function aplicarFloatRegex(event){
        event.target.value = validacaoInputFloat(event.target.value);
    }


    let view = {
        init: function(){
            this.configRegexInputAltura();
            this.configRegexInputPeso();
            this.configurarEventoCalculoImc();
        },

        configurarEventoCalculoImc: function (){
            document.getElementById('altura').addEventListener('keyup',function(){
                controller.calcularImc();
            });
    
            document.getElementById('peso').addEventListener('keyup',function(){
                controller.calcularImc();
            });
        },

        configRegexInputAltura: function configRegexInputAltura(){
            document.getElementById('altura').addEventListener('keyup',aplicarFloatRegex);
        },

        configRegexInputPeso: function configRegexInputPeso(){
            document.getElementById('peso').addEventListener('keyup',aplicarFloatRegex);  
        },
    

        mostrarResultado: function(value, situacao){
            document.getElementById('resultado').innerText = value;
            document.getElementById('situacao').innerText = situacao;  
        },
        
        getAltura: function getAltura(){
            return parseFloat(document.getElementById('altura').value);
        },

        getPeso: function getPeso(){
            return parseFloat(document.getElementById('peso').value);
        },

    }
    

    let controller = {
        init: function(){
            view.init();
        },

        calcularImc: function(){
            let altura = view.getAltura();
            let peso = view.getPeso();

            if(!altura || !peso || typeof altura !== 'number' || typeof peso !== 'number'){
                view.mostrarResultado("","");
                return;
            }
               

            let imc = IMC(peso,altura);
            imc = Math.round(imc * 100) / 100;
            view.mostrarResultado(imc,SituacaoIMC(imc));
        }
    }



    controller.init();

})(Materialize,IMC,SituacaoIMC)