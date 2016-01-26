$.getJSON("/api/recursos", function(data) {
  var items = [];
  $.each(data, function(key, val) {
    console.log(val);
    items.push('<li  id="' + key + '">' + val.nombre + '-' + '<a  href="#"  onclick="rm(\'' + val._id + '\')" href="#" >' + val._id + ' </a></li>');
  });
  $("<ul/>", {
    "class": "list",
    html: items.join("")
  }).appendTo("body");
});

function rm(id) {
  alert(id);
  $.ajax({
    url: '/api/recursos/'+id,
    type: 'DELETE'
  });
}