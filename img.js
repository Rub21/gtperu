var express =   require("express");
var multer  =   require('multer');
var path = require('path');
var app         =   express();



var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).any();

// app.get('/',function(req,res){
//       res.sendFile(__dirname + "/index.html");
// });

app.use(express.static(path.join(__dirname, 'public/admin')));

app.post('/api/hoteles',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});