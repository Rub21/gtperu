var xhr = require('xhr');
var path = require('path');
var fs = require('fs');

var record = document.querySelector('#button');
record.addEventListener('click', function(e) {
  e.preventDefault();
  var hotel = {};
  hotel.nombre = document.getElementById('nombre-h').value;
  hotel.categoria = document.getElementById('categoria-h').value;
  hotel.descripcion = document.getElementById('descripcion-h').value;
  hotel.direcion = document.getElementById('direcion-h').value;
  hotel.telefono = document.getElementById('telefono-h').value;
  hotel.sitio_web = document.getElementById('sitio_web-h').value;
  hotel.correo_electronico = document.getElementById('correo_electronico-h').value;
  hotel.precio_de_habitacion = document.getElementById('precio_de_habitacion-h').value;
  hotel.formas_de_pago = document.getElementById('formas_de_pago-h').value;
  hotel.geometry = {
    type: 'Point',
    coordinates: [parseFloat(document.getElementById('lat').value), parseFloat(document.getElementById('lon').value)],
    latitud: 0.0,
    longitud: 0.0,
    idproducto: null
  };
  hotel.images = [];
  var numimages = document.getElementById('numimages').getElementsByClassName('file_upload');
  for (i = 0; i < numimages.length; i++) {
    hotel.images.push(document.getElementById('file_img' + (i + 1)).value);
  }
  hotel.bServiciosAdicional = [];
  var numservices = document.getElementById('servicios_addicionales').getElementsByClassName('servicios');
  for (i = 0; i < numservices.length; i++) {
    hotel.bServiciosAdicional.push(document.getElementById('type-service' + (i + 1) + '-h').value);
  }
  console.log(hotel);
  xhr({
    uri: 'http://localhost:3000/api/hoteles',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      json: hotel
    })
  }, function(err, res, body) {
    if (err) return logError(err)
    alert('donne');
  });

}, false);