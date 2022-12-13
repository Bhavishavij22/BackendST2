const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo_name:String , 
    description:String,
    iscompleted:Boolean
});

const Todo = mongoose.model("Todo" , todoSchema);


module.exports=  { Todo }; 