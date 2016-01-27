//recursos
function load_list_recursos() {
  $('#recursos').empty();
  $.getJSON("/api/recursos", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      items.push('<li  id="' + key + '">' + val.nombre + '-' + '<a  href="#"  onclick="rm_recursos(\'' + val._id + '\',\'' + val.nombre + '\')" href="#" > Eliminar </a></li>');
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
      url: '/api/recursos/' + id,
      type: 'DELETE'
    });
    load_list_recursos();
  } else {}
}


//hoteles
function load_list_hoteles() {
  $('#hoteles').empty();
  $.getJSON("/api/hoteles", function(data) {
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
      url: '/api/hoteles/' + id,
      type: 'DELETE'
    });
    load_list_hoteles();
  } else {}
}


//restaurants
function load_list_restaurants() {
  $('#restaurants').empty();
  $.getJSON("/api/restaurants", function(data) {
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
      url: '/api/restaurants/' + id,
      type: 'DELETE'
    });
    load_list_restaurants();
  } else {}
}

//transportes
function load_list_transportes() {
  $('#transportes').empty();
  $.getJSON("/api/transportes", function(data) {
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
      url: '/api/transportes/' + id,
      type: 'DELETE'
    });
    load_list_transportes();
  } else {}
}


load_list_recursos();
load_list_hoteles();
load_list_restaurants();
load_list_transportes();