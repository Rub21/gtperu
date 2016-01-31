
/*jQuery.validator.setDefaults({
 debug: true,
 success: "valid"
 });*/
$(document).ready(function() {
    $("#form-r").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion:{ required: true},
            historia: {},
            fecha: {maxlength: 100},
            distancia: {maxlength: 100},
            costo_de_ingreso: {maxlength: 100},
            horario_de_atencion: {maxlength: 100},
            temperatura: {maxlength: 100},
            altitud: {maxlength: 100},
            video: {maxlength: 100},
            como_llegar: {},
            lat: {required: true, number: true},
            lon: {required: true, number: true},
        },
        messages: {
            lat: "Por favor, ingrese numeros",
            lon: "Por favor, ingrese numeros"
        }

    });
    $("#form-h").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            correo_electronico: {email: true, maxlength: 100},
            precio_de_habitacion: {required: true},
            formas_de_pago: {maxlength: 100},
            lat: {required: true, number: true},
            lon: {required: true, number: true},
            file1: {required: true}

        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            correo_electronico: "Ingrese correo electronico correcto,menos de 100 caracteres",
            precio_de_habitacion: "Ingrese el campo",
            formas_de_pago: "Ingrese dato correcto, menos de 100 caracteres",
            lat: "Ingrese numeros",
            lon: "Ingrese numeros",
            file1: "Ingrese una imagen"
        }

    });
    $("#form-re").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true, maxlength: 200},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            horario_de_atencion: {required: true, maxlength: 100},
            especialidad: {maxlength: 100},
            precio_promedio: {maxlength: 100},
            formas_de_pago: {maxlength: 100},
            lat: {required: true, number: true},
            lon: {required: true, number: true}
        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            horario_de_atencion: "Ingrese el campo",
            especialidad: "Ingrese menos de 100 caracteres",
            precio_promedio: "Ingrese menos de 100 caracteres",
            formas_de_pago: "Ingrese menos de 100 caracteres",
            lat: "Por favor, ingrese numeros",
            lon: "Por favor, ingrese numeros"
        }

    });
    $("#form-t").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true, maxlength: 200},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            horario_de_atencion: {required: true, maxlength: 100},
            horario_de_salida: {required: true, maxlength: 100},
            destinos: {required: true},
            lat: {required: true, number: true},
            lon: {required: true, number: true}
        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            horario_de_atencion: "Ingrese el campo",
            horario_de_salida: "Ingrese el campo",
            destinos: "Ingrese menos de 100 caracteres",
            lat: "Por favor, ingrese numeros",
            lon: "Por favor, ingrese numeros"
        }

    });
    $("#form-c").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true, maxlength: 200},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            horario_de_atencion: {required: true, maxlength: 100},
            lat: {required: true, number: true},
            lon: {required: true, number: true}
        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            horario_de_atencion: "Ingrese el campo",
            lat: "Por favor, ingrese numeros",
            lon: "Por favor, ingrese numeros"
        }

    });
});
