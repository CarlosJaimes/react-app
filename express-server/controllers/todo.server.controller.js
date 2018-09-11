// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';
import rimraf from 'rimraf';

//import models
import Todo from '../models/todo.server.model';

export const getTodos = (req,res) => {
  Todo.find().exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todos fetched successfully',todos});
  });
}

export const addImage = (req, res, next)  => {

  if (!req.files) {
    console.log(req.files)    
    return res.status(400).send('No files were uploaded.');
  }    
 
  let imageFile = req.files.file;    

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      console.log(imageFile)
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });
}

export const addTodo = (req,res) => {
  console.log(req.body);
  const newTodo = new Todo(req.body);
  newTodo.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todo added successfully',todo});
  })
}

export const updateTodo = (req,res) => {
  Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Updated successfully',todo});
  })
}

export const getTodo = (req,res) => {
  Todo.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}

export const deleteTodo = (req,res) => {
  Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    //Delete customer VIM # folder files
    var dir = `/Users/Carlos/Repositorios/ReactApp/react-redux-client/public/${todo.vimNumber}/`;    

    rimraf(dir, function (error) { 
      if (error) {
        console.log(error)
      } else {
        console.log('done'); 
      }    
    });

    return res.json({'success':true,'message':todo.todoText+' deleted successfully',todo});
  })
}
