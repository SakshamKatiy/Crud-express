mongoose = require("mongoose") 
 
mongoose.connect("mongodb://localhost:27017/").then(() => { 
    console.log("connected successfully"); 
}).catch((error) => 
    console.log(error)); 
 
 
Schema = mongoose.Schema({ 
    name: String, 
    mail:String, 
    age:Number 
}) 
 
StudentModel = mongoose.model("Student",Schema) 
// console.log("Model Created") 
 
module.exports=StudentModel