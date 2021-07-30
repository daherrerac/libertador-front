$(document).ready(function(){

    var selectedID;
    var selectedInput; 
    var textSelect;              
    $('.dropdown-toggle').click(function()
    {
        selectedID = $(this).attr('id');
    });

    var newOp = $('.dropdown-menu > li');
        newOp.click(function() {   
            event.preventDefault();  
            $(this).addClass('selected');    
            textSelect = $(this).text();
            $('.dropdown-toggle'+ '#'+selectedID).val(textSelect);
            $('input.dropdown-toggle'+ '#'+selectedID).removeClass('font-gray');   
                                        
        });


    $('.col').click(function()
    {
        selectedInput = "#"+ $(this).attr('id');
        if(($(selectedInput + " input").val()) =="" && ($(selectedInput+"-error").length)){
            $(selectedInput  + " small.note").hide();
        }
        else if(($(selectedInput + " input").val()) !="" && ($(selectedInput+"-error").length)){
            $(selectedInput  + " small.note").hide();
        }
        else if (($(selectedInput + " input").val()) =="" && !($(selectedInput+"-error").length)){
            $(selectedInput  + " small.note").show();                        
        }
        if($(selectedInput+"-error").length && ($(selectedInput+"-error").is(":visible"))){
            $(selectedInput + " label.etiqueta").addClass("error-l");                
        }else{
            $(selectedInput + " label.etiqueta").removeClass("error-l");                
        }
    });
    
    
    
    $( "input" ).keyup(function() {
        if(($(selectedInput + " input").val())!=""){
            $(selectedInput  + " small.note").hide();
        }
        if($(selectedInput+"-error").length && ($(selectedInput+"-error").is(":visible"))){
            $(selectedInput + " label.etiqueta").addClass("error-l");                
        }else{
            $(selectedInput + " label.etiqueta").removeClass("error-l");                
        }
    });
    
    $('#formv1').bind('submit', function(event) {
        $('#tdocumento').rules('add', {diferent: true});
        $('#ciudad').rules('add', {diferent: true});
        $('#tsolicitud').rules('add', {diferent: true});
        event.preventDefault();
    });

    var formsList = [
        "formv1"
    ];

    for(let i of formsList){
        $(`#${i}`).validate({            
                        
            rules: {
                nombres: {
                    required: true,
                    minlength: 3,
                    maxlength: 15,
                    lettersonly: true
                },     
                apellidos: {
                    required: true,
                    minlength: 4,
                    maxlength: 15,
                    lettersonly: true
                }, 
                ndocumento:{
                    required: true,
                    minlength: 4,
                    digits: true
                },                
                celular: {
                    required: true,
                    minlength: 4,
                    digits: true
                },                                                   
                email: {
                    required: true,
                    email: true,
                    minlength: 4,
                    maxlength: 35
                },
                aceptaterminos: {
                    required: true
                },
                tdocumento:{
                    required:true,                                      
                },
                ciudad:{
                    required:true,                    
                },
                tsolicitud:{
                    required:true,                    
                }          
            },
            invalidHandler: function(event, validator) {
                $("#errorModal").modal('show');
            },
            submitHandler: function(form) {                
                $("#successModal").modal('show');
            }	            		
        });
    }
    
    
    // Extra methods validate
	jQuery.validator.addMethod("lettersonly", function (value, element){
		return this.optional(element) || /^[a-z _.,]+$/i.test(value);
    }, "Solo se permiten letras");
    jQuery.validator.addMethod("diferent", function (value, element){
        return this.optional(element) || !(/^\bSeleccione\b$/.test(value));
    }, "Seleccione una opción"); 
    
    jQuery.extend(jQuery.validator.messages, {
        maxlength: jQuery.validator.format("Máximo {0} caracteres."),
        minlength: jQuery.validator.format("Mínimo {0} caracteres."),
        required:  jQuery.validator.format("Campo Obligatorio."),
        email:     jQuery.validator.format("Ingrese un E-mail válido."),
        digits:    jQuery.validator.format("Ingrese solo números.")
    });   

    $('#formv1').bind('submit', function(event) {
        $('#tdocumento').rules('remove', {diferent: true});
        $('#ciudad').rules('remove', {diferent: true});
        $('#tsolicitud').rules('remove', {diferent: true});
        event.preventDefault();
    });
    

    $('#formFileMultiple').FancyFileUpload({        
          params : {        
            action :'fileuploader'        
          },        
          maxfilesize : 8390000        
        });
    $(".ff_fileupload_dropzone").html('Seleccionar archivos'); 
    $(".ff_fileupload_dropzone").click(function(){
        $(".rbox.dark-border").show();
        if(!($("ff_fileupload_queued").length)){
            $(".form-group .sin-documentos").hide();
        }
    });
    $(".ff_fileupload_remove_file").click(function(){
        if(!($("ff_fileupload_queued").length)){
            $(".rbox.dark-border").hide();
            $(".form-group .sin-documentos").show();
        }
    });
});

$(document).click(function() {
    $(".ff_fileupload_remove_file").click(function(){
        if(!($("ff_fileupload_queued").length)){
            $(".rbox.dark-border").hide();
            $(".form-group .sin-documentos").show();
        }
    });
}); 