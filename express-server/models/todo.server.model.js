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
  carYear: Number,
  keyType: String,
  transponderType: String,    
  description: String,
  filename1: String,
  filename2: String,
  filename3: String,
  path1: String,
  path2: String,
  path3: String
});

export default mongoose.model('Todo', Schema);
