import mongoose from "mongoose";



const studentschema= mongoose.Schema({
  
  name:String,
  rollno:Number,
  phoneno:Number,
  branch:String
 
});
const Student=mongoose.model('Student',studentschema);
export default Student;
