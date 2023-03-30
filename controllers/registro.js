$(document).ready(() => {
    // Ocultar formularios
    $('#voluntarios, #aceptar').hide();
    $('#empresas, #aceptar').hide();
    $("#btn_aceptar").prop("disabled", true);
  
    // Detectar el cambio en el grupo de radios
    $('input[type="radio"][name="type"]').change(mostrar);
  
    $('input[type="radio"][name="condiciones"]').change(function() {
      if ($("#condiciones").is(':checked')) {
        $("#btn_aceptar").prop("disabled", false);
      }
    });
  
    $("#btn_limpiar").click(()=>{
        $("#empresas")[0].reset();
        $("#voluntarios")[0].reset();
        $("#btn_aceptar").prop("disabled", true);
        $("#condiciones").prop('checked', false);
    });
  
    $('#btn_aceptar').click(() => {
        if ($('#empresa').is(':checked')) {
          console.log('va');
          empresas.validate();
        } else if ($('#voluntario').is(':checked')) {
          let voluntario = validar_voluntario();
        }
    });
});
  
  function mostrar() {
    if ($('#empresa').is(':checked')) {
        $('#empresas').show();
        $('#aceptar').show();
        $('#voluntarios').hide();
    } else if ($('#voluntario').is(':checked')) {
        $('#voluntarios').show();
        $('#aceptar').show();
        $('#empresas').hide();
    }
  }
  
  