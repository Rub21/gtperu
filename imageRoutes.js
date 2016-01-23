var multer  = require('multer');
var parseUploads = multer({
  dest: './public/img/profile/',
  rename: function (fieldname, filename) {
    return fieldname;
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
  limits: {
    files: 1
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path)
    imageUploaded=true;
  }
});
