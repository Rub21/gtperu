function decode_utf8(s) {
    return decodeURIComponent(escape(s));
}

function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
}


function tildes_unicode(str) {
    str = str.replace('á', '\u00e1');
    str = str.replace('é', '\u00e9');
    str = str.replace('í', '\u00ed');
    str = str.replace('ó', '\u00f3');
    str = str.replace('ú', '\u00fa');

    str = str.replace('Á', '\u00c1');
    str = str.replace('É', '\u00c9');
    str = str.replace('Í', '\u00cd');
    str = str.replace('Ó', '\u00d3');
    str = str.replace('Ú', '\u00da');

    str = str.replace('ñ', '\u00f1');
    str = str.replace('Ñ', '\u00d1');
    return str;
}

function replace_word(str) {
    str = str.replace('á', 'a');
    str = str.replace('é', 'e');
    str = str.replace('í', 'i');
    str = str.replace('ó', 'o');
    str = str.replace('ú', 'u');

    str = str.replace('Á', 'A');
    str = str.replace('É', 'E');
    str = str.replace('Í', 'I');
    str = str.replace('Ó', 'O');
    str = str.replace('Ú', 'U');

    str = str.replace('ñ', 'n');
    str = str.replace('Ñ', 'N');
    return str;
}

$(function() {

    var sitios_arqueologicos = ['Conjunto Arqueológico', 'Sitio Arqueológico', 'Camino', 'Andenes', 'Sistema de Riego'];
    var arquitectura_colonial = ['Templo', 'Casona', 'Museos'];
    var sitio_historicos = ['Santuario Histórico', 'Casa de la capitulación', 'Puente colonial'];
    var cultura_viva = ['Fiesta Tradicional', 'Artesanía', 'Música', 'Danza', 'Otros'];
    var paisaje_natural = ['Valle', 'Mirador', 'Agua termal', 'Laguna', 'Bosque de Piedra', 'Bosque Natural', 'Catarata', 'Nevado', 'Río', 'Cerro', 'Reserva Nacional', 'Santuario Natural', 'Cañón'];
    $('#categoria-r').change(function() {
        var filter = $(this).val();
        var parent = document.getElementById("tipo-r"); //select
        var options = '';
        $("#tipo-r option").remove();
        var cat = $(this).val();
        if (cat === tildes_unicode('Sitios Arqueológicos')) {
            _.each(sitios_arqueologicos, function(value, key) {
                parent.innerHTML += '<option>' + tildes_unicode(sitios_arqueologicos[key]) + '</option>';
            });
            $('#direcion_recurso').text("Distancia al recurso");
        } else if (cat === 'Arquitectura Colonial') {
            _.each(arquitectura_colonial, function(value, key) {
                parent.innerHTML += '<option>' + tildes_unicode(arquitectura_colonial[key]) + '</option>';
            });
            $('#direcion_recurso').text(tildes_unicode("Dirección"));
        } else if (cat === 'Sitios Historicos') {
            _.each(sitio_historicos, function(value, key) {
                parent.innerHTML += '<option>' + tildes_unicode(sitio_historicos[key]) + '</option>';
            });
            $('#direcion_recurso').text("Distancia al recurso");
        } else if (cat === 'Cultura Viva') {
            _.each(cultura_viva, function(value, key) {
                parent.innerHTML += '<option>' + tildes_unicode(cultura_viva[key]) + '</option>';
            });
            $('#direcion_recurso').text("Distancia al recurso");
        } else if (cat === 'Paisaje Natural') {
            _.each(paisaje_natural, function(value, key) {
                parent.innerHTML += '<option>' + tildes_unicode(paisaje_natural[key]) + '</option>';
            });
            $('#direcion_recurso').text("Distancia al recurso");
        }
    });


    // function format_field_for_curlturaviva() {
    //     $('.fecha').css("display", "block");
    //     // $('#fecha').rules("add", "required");
    //     $("#fecha").prop("required", true);
    //    $('.corredor').css("display", "none");
    //     $('.costo_de_ingreso').css("display", "none");
    //     $('.horario_de_atencion').css("display", "none");

    // }

    // function format_field_for_all() {
    //     $('.fecha').css("display", "none");
    //     $("#fecha").prop("required", false);
    //     $('.corredor').css("display", "block");
    //     $('.costo_de_ingreso').css("display", "block");
    //     $('.horario_de_atencion').css("display", "block");
    // }


});