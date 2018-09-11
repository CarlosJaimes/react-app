import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  vimNumber: String,
  customerName: String,  
  carMake: String,
  carModel: String,
  carYear: String,
  keyType: String,
  transponderType: String,    
  description: String,
  path1: String,
  path2: String,
  path3: String
});

export default mongoose.model('Todo', Schema);
