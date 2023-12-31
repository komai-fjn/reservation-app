const { nodeModuleNameResolver } = require("typescript");
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductsSchema = new Schema({
  // author: ObjectId,
  name: {type:String,required:true, max:[60, '最大60文字までです']},
  description: String,
  heading1:String,
  heading2:String,
  heading3:String,
  headingtext1:String,
  headingtext2:String,
  headingtext3:String,
  coverImage:String,
  price:Number,
});

module.exports = mongoose.model('Products', ProductsSchema);
