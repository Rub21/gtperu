//recursos
function load_list_recursos() {
  $('#recursos').empty();
  $.getJSON("/recursos", function(data) {
    var items = [];
    recursoData = data;
    $.each(data, function(key, val) {
      items.push('<li  id="' + key + '">' + val.nombre + '-' +
        '<a  href="#"  onclick="rm_recursos(\'' + val._id + '\',\'' + val.nombre + '\')" href="#" > Eliminar </a>' +
        '<a  href="#"  onclick="up_recursos(\'' + val._id + '\',\'' + val.nombre + '\')" href="#" > Actualizar </a></li>');
    });
    $("<ul/>", {
      "class": "list",
      html: items.join("")
    }).appendTo("#recursos");
  });
}

function rm_recursos(id, nombre) {
  if (confirm('Deceas eliminar : ' + nombre)) {
    $.ajax({
      url: '/recursos/' + id,
      type: 'DELETE'
    });
    load_list_recursos();
  } else {}
}


function up_recursos(id, nombre) {
  var recurso = recursoData.filter(function(val) {
    return val._id === id;
  });
  window.location = "/recurso/#" + id;
}



//hoteles
function load_list_hoteles() {
  $('#hoteles').empty();
  $.getJSON("/hoteles", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      items.push('<li  id="' + key + '">' + val.nombre + '-' + '<a  href="#"  onclick="rm_hoteles(\'' + val._id + '\',\'' + val.nombre + '\')" href="#" > Eliminar </a></li>');
    });
    $("<ul/>", {
      "class": "list",
      html: items.join("")
    }).appendTo("#hoteles");
  });
}

function rm_hoteles(id, nombre) {
  if (confirm('Deceas eliminar : ' + nombre)) {
    $.ajax({
      url: '/hoteles/' + id,
      type: 'DELETE'
    });
    load_list_hoteles();
  } else {}
}


//restaurants
function load_list_restaurants() {
  $('#restaurants').empty();
  $.getJSON("/restaurants", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      items.push('<li  id="' + key + '">' + val.nombre + '-' + '<a  href="#"  onclick="rm_restaurants(\'' + val._id + '\',\'' + val.nombre + '\')" href="#" > Eliminar </a></li>');
    });
    $("<ul/>", {
      "class": "list",
      html: items.join("")
    }).appendTo("#restaurants");
  });
}

function rm_restaurants(id, nombre) {
  if (confirm('Deceas eliminar : ' + nombre)) {
    $.ajax({
      url: '/restaurants/' + id,
      type: 'DELETE'
    });
    load_list_restaurants();
  } else {}
}

//transportes
function load_list_transportes() {
  $('#transportes').empty();
  $.getJSON("/transportes", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      items.push('<li  id="' + key + '">' + val.nombre + '-' + '<a  href="#"  onclick="rm_transportes(\'' + val._id + '\',\'' + val.nombre + '\')" href="#" > Eliminar </a></li>');
    });
    $("<ul/>", {
      "class": "list",
      html: items.join("")
    }).appendTo("#transportes");
  });
}

function rm_transportes(id, nombre) {
  if (confirm('Deceas eliminar : ' + nombre)) {
    $.ajax({
      url: '/transportes/' + id,
      type: 'DELETE'
    });
    load_list_transportes();
  } else {}
}

//complementarios
function load_list_complementarios() {
  $('#complementarios').empty();
  $.getJSON("/complementarios", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      items.push('<li  id="' + key + '">' + val.nombre + '-' + '<a  href="#"  onclick="rm_complementarios(\'' + val._id + '\',\'' + val.nombre + '\')" href="#" > Eliminar </a></li>');
    });
    $("<ul/>", {
      "class": "list",
      html: items.join("")
    }).appendTo("#complementarios");
  });
}

function rm_complementarios(id, nombre) {
  if (confirm('Deceas eliminar : ' + nombre)) {
    $.ajax({
      url: '/complementarios/' + id,
      type: 'DELETE'
    });
    load_list_complementarios();
  } else {}
}

var recursoData = [];

load_list_recursos();
load_list_hoteles();
load_list_restaurants();
load_list_transportes();
load_list_complementarios();