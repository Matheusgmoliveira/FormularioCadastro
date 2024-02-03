$(document).ready(function (){
    $('#telefone').mask('(00) 00000-0000')
    $('#CEP').mask('00000-000')
    $('#CPF').mask('000.000.000-00')
    

    $('form').validate({
        rules:{
            telefone:{
                required:true
            },
            CEP:{
                required:true,
                CEP:true,
            },
            CPF:{
                required:true,
                CPF:true
            }
        },
        messages:{
            telefone: 'Por favor insira o seu telefone corretamente',
            CEP: 'Por favor insira o CEP da sua cidade corretamente',
            CPF: 'Por favor insira o seu CPF corretamente'
        },
        submitHandler: function (form) {
            console.log(form);
            
            
            
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos Incorretos`);
            }
        }
    });

    
   
});