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
  description: String
});

export default mongoose.model('Todo', Schema);
