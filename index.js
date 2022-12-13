const express = require("express");
const parser = require("body-parser")
const { getAllTodos , createTodo , updateTodo , deleteTodo , patchTodo} = require("./src/controllers");
const cors = require("cors");
const mongoose = require("mongoose");


//DB Connect Start

try{
mongoose.connect("mongodb://127.0.0.1:27017/todo_vij");
}
catch(e){
    console.log("Error");
}
mongoose.connection.on("connected" , ()=>{
    console.log("DataBase Connected");
});
mongoose.connection.on("error" , ()=>{
    console.log("DataBase CONNECTED ERROR");
});

//DB Connect End

const server = express();

server.use(cors());
server.use(parser.json());

server.get("/todos", getAllTodos);

server.post("/create-new-todos" , createTodo);

server.put("/update-todo" , updateTodo);

server.delete("/delete-todo" , deleteTodo);

server.patch("/patch-todo" , patchTodo);

server.listen(3000, () => {
    console.log("Server Started at port 3000 PORT");
});
