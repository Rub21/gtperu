var recursoData = [];
$.getJSON("/recursos", function(data) {
  recursoData = data;
}).done(function() {
  //tabla 
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

function getSelectedRow() {
  var grid = $("#toolbar");
  var rowId = grid.jqGrid('getGridParam', 'selrow');
  var rowData = grid.getRowData(rowId);
  if (rowData) {
    var recurso = recursoData.filter(function(val) {
      return rowData._id === val._id;
    });
    console.log(recurso);
    fillForm(recurso);
  } else
    alert("No rows are selected");
}

function fillForm(obj) {
  console.log(obj);
  $('#idproducto').val(obj.idproducto);
  $('#idrecurso').val(obj.idrecurso);
  $('#nombre').val(obj.nombre);
  $('#categoria').val(obj.categoria);
  $('#tipo').val(obj.tipo);
  $('#descripcion').val(obj.descripcion);
  $('#costo_de_ingreso').val(obj.costo_de_ingreso);
  $('#horario_atencion').val(obj.horario_atencion);
  $('#temperatura').val(obj.temperatura);
  $('#altitud').val(obj.altitud);
  $('#video').val(obj.video);
  $('#como_llegar').val(obj.como_llegar);
  $('#latitud').val(obj.latitud);
  $('#longitud').val(obj.longitud);
}