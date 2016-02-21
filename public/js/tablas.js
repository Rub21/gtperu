var recursoData = [];
$.getJSON("/recursos", function(data) {
  recursoData = data;
}).done(function() {
  //tabla 
  jQuery("#toolbar").jqGrid({
    data: recursoData,
    datatype: "local",
    height: 255,
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
      width: 60
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
    caption: "Toolbar Searching"
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
  } else
    alert("No rows are selected");
}