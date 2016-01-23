function enable_check(id) {
    $('#chek_lat_lon-' + id).click(function() {
        if ($("#chek_lat_lon-" + id).is(':checked')) {
            $("#lat-" + id).removeAttr("readonly");
            $("#lon-" + id).removeAttr("readonly");
        } else {
            $("#lat-" + id).attr('readonly', 'readonly');
            $("#lon-" + id).attr('readonly', 'readonly');
        }
    });
}

function add_imagen_description(id) {
    var counter = 2;
    $('#del_file-' + id).hide();
    $('img#add_file-' + id).click(function() {
        $('#file_tools-' + id).before('<div class="well file_upload" id="f' + counter + '">' +
            '<input name="file' + counter + '" type="file" id="file_img' + counter + '-' + id + '" required>' + //forma ejemplo  file_img1-r
            '<input type="text" name="title_img' + counter + '" value=""  id="title_img' + counter + '-' + id + ' " placeholder="Nombre de Imagen ' + counter + '"/>' +
            ' <textarea class="span7" name="description_img' + counter + '" rows="2" cols="25"  id="description_img' + counter + '-' + id + '" placeholder="Descripcion de la imagen ' + counter + '"></textarea>' +
            '</div>');
        $('#del_file-' + id).fadeIn(0);
        counter++;
    });
    $('img#del_file-' + id).click(function() {
        if (counter == 3) {
            $('#del_file-' + id).hide();
        }
        counter--;
        $('#f' + counter).remove();
    });
}

function add_imagen(id) {
    var counter = 2;
    $('#del_file-' + id).hide();
    $('img#add_file-' + id).click(function() {
        $('#file_tools-' + id).before(
            '<div class="well file_upload" id="f' + counter + '">' +
            '<input name="file' + counter + '" type="file" id="file_img' + counter + '-' + id + '" required>' + //forma ejemplo  file_img1-r
            '</div>');
        $('#del_file-' + id).fadeIn(0);
        counter++;
    });
    $('img#del_file-' + id).click(function() {
        if (counter == 3) {
            $('#del_file-' + id).hide();
        }
        counter--;
        $('#f' + counter).remove();
    });
}

function clean_filed(id) {
    $('#clear-' + id).click(function() {

        $(':input', '#form-' + id)
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
    });

}


$(function() {

    //check for anable field
    $('#chek_lat_lon').click(function() {
        if ($("#chek_lat_lon").is(':checked')) {
            $("#lat").removeAttr("readonly");
            $("#lon").removeAttr("readonly");
        } else {
            $("#lat").attr('readonly', 'readonly');
            $("#lon").attr('readonly', 'readonly');
        }
    });

    //add imagen 
    var counter = 2;
    $('#del_file').hide();
    $('img#add_file').click(function() {
        $('#file_tools').before(
            '<div class="well file_upload" id="f' + counter + '">' +
            '<input name="file' + counter + '" type="file" id="file_img' + counter + '' + '" required>' + //forma ejemplo  file_img1-r
            '</div>');
        $('#del_file').fadeIn(0);
        counter++;
    });
    $('img#del_file').click(function() {
        if (counter == 3) {
            $('#del_file').hide();
        }
        counter--;
        $('#f' + counter).remove();
    });
    //add servicios adicionales
    // SERVICIO
    var counter_service = 2;
    //agregamos el un IMPUT  para contparasar a java
    // $('#service_tools-h').append('<input type="text"  name="num-services" id="num-services-h" value="' + (counter_service - 1) + '"  style="width: 0px; height: 0px; padding:0;" />')
    // $('#del_service-h').hide();

    $('#add_service-h').click(function() {
        $('#service_tools-h').before('\
            <div class="well" id="service' + counter_service + '">' +
            '<div class="row-fluid ">' +
            '<div class="span4">Tipo de Servicio ' + counter_service + '</div>' +
            '<div class="span4">' +
            '<input  class= "servicios" type="text"  name="type-service' + counter_service + '" value=""  align="left" id="type-service' + counter_service + '-h"  placeholder="Nombre del servicios " required/>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');

        $('#del_service-h').fadeIn(0);
        counter_service++;

        //poniendo el valor del contador en el div
        $('#num-services-h').attr('value', counter_service - 1);
    });

    $('#del_service-h').click(function() {
        if (counter_service == 3) {
            $('#del_service-h').hide();
        }
        counter_service--;
        $('#service' + counter_service).remove();
        //poniendo el valor del contador en el div
        $('#num-services-h').attr('value', counter_service - 1);

    });

    //selecionar medios de transporte
    var selectedValues = [];

    function get_select() {
        selectedValues = [];
        $("#destino :selected").each(function() {
            selectedValues.push($(this).val());
        });
        $("#selected").html("");

        //alert(selectedValues);
        items = "";
        for (i = 0; i < selectedValues.length; i++) {

            items = items + " <input type = 'text' name = 't" + i + "' value = '" + selectedValues[i] + "' />";
        }
        //  $("#selected").html(items);
        num = "<input type='text' name='num_selected' value='" + selectedValues.length + "'/>"
        document.getElementById('selected').innerHTML = items + num;
    };

    $('.pasar').click(function() {

        !$('#origen option:selected').remove().appendTo('#destino');
        get_select();

    });
    $('.quitar').click(function() {
        !$('#destino option:selected').remove().appendTo('#origen');
        get_select();

    });
    $('.pasartodos').click(function() {
        $('#origen option').each(function() {
            $(this).remove().appendTo('#destino');
            get_select();
        });
    });
    $('.quitartodos').click(function() {
        $('#destino option').each(function() {
            $(this).remove().appendTo('#origen');
            get_select();
        });
    });


    $("#destino").click(function() {
        get_select();
    });



    //SELECION DE FECHAS
    /* var now = new Date();
     now = now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear();
     $('#fecha').datepicker({
         dateFormat: 'dd/mm/yy', // formato de fecha que se usa en España
         dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'], // días de la semana
         dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'], // días de la semana (versión super-corta)
         dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'], // días de la semana (versión corta)
         firstDay: 1, // primer día de la semana (Lunes)
         maxDate: new Date(), // fecha máxima
         minDate: '-2y',
         monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], // meses
         monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // meses
         navigationAsDateFormat: true,
     });*/



});