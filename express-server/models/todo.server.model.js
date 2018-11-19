import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  vimNumber: {
    type: String,
    unique: true,
    require: true
  },    
  customerName: String,  
  carMake: String,
  carModel: String,
  carYear: String,
  keyType: String,
  transponderType: String,
  pinNumber: String,
  keyCode: String,    
  description: String,
  path: [String]
});

export default mongoose.model('Todo', Schema);
