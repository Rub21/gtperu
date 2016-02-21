var recursoData = [];
var type;

function loadData(t) {
  type = t;
  $.getJSON("/" + type, function(data) {
    recursoData = data;
  }).done(function() {
    //tabla 
    jQuery('#toolbar').empty();
    jQuery("#toolbar").jqGrid({
      data: recursoData,
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
    var recurso = recursoData.filter(function(val) {
      return rowData._id === val._id;
    });
    fillForm(recurso[0]);
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
  // document.getElementById('idproducto').value = obj.idproducto;
  // document.getElementById('idrecurso').value = obj.idrecurso;
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