const { response } = require("express");
const {Todo} = require("./models");

const getAllTodos = async (request , response)=> {
    var id = request.query.id_1;
    if(id){
        var allTodos = await Todo.findById(id);
    }
    else{
        var allTodos = await Todo.find();
    }  
    return response.json(allTodos);
};

const createTodo =async (request, response) => {
    console.log(request.body);
    oneTodo =await Todo.create(request.body); 
    return response.json({ status: "Creation Completed"  , oneTodo});
};

const updateTodo =async (request , response) =>{
    var id = request.query.id_1;
    var data = request.body;
    console.log(id , data);
    oneTodo = await Todo.findByIdAndUpdate(id , data);
    return response.json({status: "Updation Completed" ,oneTodo});
};

const deleteTodo = async (request , response) =>{
    var id = request.query.id_1;
    console.log(id);
    oneTodo = await Todo.findByIdAndDelete(id);
    return response.json({status: "Deletion Completed" , oneTodo});
};

const patchTodo =async (request , response) =>{
    var id = request.query.id_1;
    var data = request.body;
    console.log(id , data);
    oneTodo = await Todo.findByIdAndUpdate(id , data);

    return response.json({status: "Patching Completed" , oneTodo});
};


module.exports = { 
    getAllTodos, 
    createTodo, 
    updateTodo, 
    deleteTodo, 
    patchTodo
};


