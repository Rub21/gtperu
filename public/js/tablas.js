var productoData = [];
var type;

function loadData(t) {
  type = t;
  $.getJSON("/" + type, function(data) {
    productoData = data;
  }).done(function() {
    //tabla 
    jQuery('#toolbar').empty();
    jQuery("#toolbar").jqGrid({
      data: productoData,
      datatype: "local",
      height: 350,
      width: 'auto',
      colNames: [
        'Nombre',
        'Categoria',
        'Id'
      ],
      colModel: [{
        name: 'nombre',
        index: 'nombre',
        width: 140
      }, {
        name: 'categoria',
        index: 'categoria',
        width: 140
      }, {
        name: '_id',
        index: '_id',
        width: 50
      }],
      rowNum: 50,
      rowTotal: 2000,
      rowList: [20, 30, 50],
      loadonce: true,
      mtype: "GET",
      rownumbers: true,
      rownumWidth: 40,
      gridview: true,
      pager: '#ptoolbar',
      sortname: 'item_id',
      viewrecords: true,
      sortorder: "asc",
      caption: "Producto turistico "
    });

    jQuery("#toolbar").jqGrid('navGrid', '#ptoolbar', {
      del: false,
      add: false,
      edit: false,
      search: false
    });
    jQuery("#toolbar").jqGrid('filterToolbar', {
      stringResult: true,
      searchOnEnter: false
    });
  });
}


function updateRow() {
  var grid = $("#toolbar");
  var rowId = grid.jqGrid('getGridParam', 'selrow');
  var rowData = grid.getRowData(rowId);
  if (rowData) {
    var producto = productoData.filter(function(val) {
      return rowData._id === val._id;
    });
    fillForm(producto[0]);
  } else
    alert("Selecione una fila");
}


function removeRow() {
  var grid = $("#toolbar");
  var rowId = grid.jqGrid('getGridParam', 'selrow');
  var rowData = grid.getRowData(rowId);
  if (confirm('Deceas eliminar : ' + rowData.nombre)) {
    $.ajax({
      url: type + '/' + rowData._id,
      type: 'DELETE'
    });
    // console.log(type);
    grid.trigger("reloadGrid");

    loadData(type);
  } else {}
}

function fillForm(obj) {

  switch (type) {
    case 'recursos':
    fillFormRecurso(obj);
    break;
    case 'restaurants':
    fillFormRestaurants(obj);
    break;
    case 'hoteles':
    fillFormHoteles(obj);
    break;
    case 'transportes':
    fillFormTransportes(obj);
    break;
     case 'complementarios':
    fillFormComplementarios(obj);
    break;
  }


}

function fillFormRecurso(obj) {
  document.getElementById('nombre').value = obj.nombre;
  document.getElementById('categoria').value = obj.categoria;
  document.getElementById('tipo').value = obj.tipo;
  document.getElementById('descripcion').value = obj.descripcion;
  document.getElementById('costo_ingreso').value = obj.costo_ingreso;
  document.getElementById('horario_atencion').value = obj.horario_atencion;
  document.getElementById('temperatura').value = obj.temperatura;
  document.getElementById('altitud').value = obj.altitud;
  document.getElementById('video').value = obj.video;
  document.getElementById('como_llegar').value = obj.como_llegar;
  document.getElementById('latitud').value = obj.latitud;
  document.getElementById('longitud').value = obj.longitud;
}


function fillFormRestaurants(obj) {
  document.getElementById('nombre').value = obj.nombre;
  document.getElementById('categoria').value = obj.categoria;
  document.getElementById('tipo').value = obj.tipo;
  document.getElementById('descripcion').value = obj.descripcion;
  document.getElementById('direccion').value = obj.direccion;
  document.getElementById('telefono').value = obj.telefono;
  document.getElementById('sitio_web').value = obj.sitio_web;
  document.getElementById('horario_atencion').value = obj.horario_atencion;
  document.getElementById('especialidad').value = obj.especialidad;
  document.getElementById('precio_promedio').value = obj.precio_promedio;
  document.getElementById('formas_pago').value = obj.formas_pago;
  document.getElementById('latitud').value = obj.latitud;
  document.getElementById('longitud').value = obj.longitud;
}
function fillFormHoteles(obj) {
  document.getElementById('nombre').value = obj.nombre;
  document.getElementById('categoria').value = obj.categoria;
  document.getElementById('descripcion').value = obj.descripcion;
  document.getElementById('direccion').value = obj.direccion;
  document.getElementById('telefono').value = obj.telefono;
  document.getElementById('sitio_web').value = obj.sitio_web;
  document.getElementById('correo_electronico').value = obj.correo_electronico;
  document.getElementById('precio_habitacion').value = obj.precio_habitacion;
  document.getElementById('formas_pago').value = obj.formas_pago;
  document.getElementById('latitud').value = obj.latitud;
  document.getElementById('longitud').value = obj.longitud;
}
function fillFormTransportes(obj) {
  document.getElementById('nombre').value = obj.nombre;
  document.getElementById('descripcion').value = obj.descripcion;
  document.getElementById('tipo').value = obj.tipo;
  document.getElementById('direccion').value = obj.direccion;
  document.getElementById('telefono').value = obj.telefono;
  document.getElementById('sitio_web').value = obj.sitio_web;
  document.getElementById('horario_atencion').value = obj.horario_atencion;
  document.getElementById('horario_salida').value = obj.horario_salida;
  document.getElementById('destinos').value = obj.destinos;
  document.getElementById('latitud').value = obj.latitud;
  document.getElementById('longitud').value = obj.longitud;
}
function fillFormComplementarios(obj) {
  document.getElementById('nombre').value = obj.nombre;
  document.getElementById('tipo').value = obj.tipo;
  document.getElementById('descripcion').value = obj.descripcion;
  document.getElementById('direccion').value = obj.direccion;
  document.getElementById('telefono').value = obj.telefono;
  document.getElementById('sitio_web').value = obj.sitio_web;
  document.getElementById('horario_atencion').value = obj.horario_atencion;
  document.getElementById('latitud').value = obj.latitud;
  document.getElementById('longitud').value = obj.longitud;
}