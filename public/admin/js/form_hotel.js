$(function() {
  $('#button').click(function() {

    var data = {
      "test": "1234"
    };
    $.ajax({
      type: "POST",
      url: "http://localhost:8000/hotel",
      data: data,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      processData: false,
      success: function(data) {
        alert(data);
      },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });
  });
});