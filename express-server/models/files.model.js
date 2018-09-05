import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  fileName: String,
  path: String,    
});

export default mongoose.model('files', Schema);
