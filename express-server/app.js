// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import bb from 'express-busboy';

// import routes
import todoRoutes from './routes/todo.server.route';

// define our app using express
const app = express();


const frontEndDir = '/Users/Carlos/Repositorios/ReactApp/react-redux-client/public'
// express-busboy to parse multipart/form-data
// bb.extend(app);

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());
app.use(fileUpload());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', express.static(__dirname + '/public')); 
app.use('/public', express.static(__dirname + '/public'));


// set the port
const port = process.env.PORT || 3001;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TLR-APP', {
  useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();



// API Routes
app.use('/api', todoRoutes);



// API Upload images
app.post('/api/upload', (req,res) => {

  if (!req.files) {
    console.log(req.files)    
    return res.status(400).send('No files were uploaded.');
  }        

  var file;
  var fileExtension;  
  var i = 0  
  
  let customerVIM = req.body.vimNumber

  var pathArray = []  

  //Create folder to customer VIM# files
  var fs = require('fs');
  var dir = `/Users/Carlos/Repositorios/ReactApp/react-redux-client/public/${customerVIM}/`;

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }  

  //Loop for files
  for (var key in req.files) {    
    
    file = req.files[key];
    fileExtension = file.name.split('.').pop();         

    //file.mv(`${__dirname}/public/${req.body.filename[i]}.${fileExtension}`, function(err) {
    file.mv(`/Users/Carlos/Repositorios/ReactApp/react-redux-client/public/${customerVIM}/${req.body.filename[i]}.${fileExtension}`, function(err) {
    
      if (err) {
        console.log(err);
        console.log(file)
        return res.status(500).send(err);
      }
      
      console.log('File uploaded!');             
      
    });

    //pathArray.push(`${__dirname}/public/${req.body.filename[i]}.${fileExtension}`)
    pathArray.push(`${customerVIM}/${req.body.filename[i]}.${fileExtension}`)    

    i = i + 1
  }

  return res.json({'success':true,'message':'File added successfully',pathArray});      

});
  

// API Main
app.get('/', (req,res) => {
  return res.end('Api working');
})


// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});



// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
