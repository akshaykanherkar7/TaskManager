const TaskModel = require("../Models/taskModel");
const UserModel = require("../Models/userModel");

const addTask = async (req, res) => {
    const { taskName, isCompleted, userId } = req.body;
    try{
        const newTask = await TaskModel({taskName: taskName, isCompleted: isCompleted, userId: userId});
        return res.status(201).send({message: 'Task created successfully', data: newTask});
    }
    catch(err){
        return res.status(500).send({message: err.message });
    }
}

const getAllTasks = async (req, res) => {
    const { userId } = req.body;
    const userDetails = await UserModel.findOne({_id: userId});
    try{
        if(userDetails.role === 'admin'){
            const allTasks = await TaskModel.findAll();
            return res.status(200).send(allTasks);
        }
        else if(userDetails.role === "user")
        {
            const userTasks = await TaskModel.findAll({userId: userId});
            return res.status(200).send(userTasks);
        }
        else
        {
            return res.status(404).send({message: 'Tasks Not Found'});
        }
    }
    catch(err){
        return res.status(404).send({message: err.message});
    }
}

const updateTask = async (req, res) => {
    const {taskId} = req.params;
    const {userId} = req.body;
    const userDeails = await UserModel.findOne({_id: userId});
    try{
        if(userDeails.role === 'admin'){
            const updatedTask = await TaskModel.findOneAndUpdate({taskId: taskId}, req.body);
            return res.status(200).send({message: "Task updated successfully", task: updatedTask});
        }
        else if(userDeails.role === 'user'){
            const updatedTask = await TaskModel.findOneAndUpdate({taskId: taskId}, req.body);
            return res.status(200).send({message: "Task updated successfully", task: updatedTask});
        }
        else{
            return res.status(404).send({message: 'Tasks Not Found'});
        }
    }
    catch(err){
        return res.status(404).send({message: err.message});
    }
}

const deleteTask = async (req, res) => {
    const {userId} = req.body;
    const {taskId} = req.params;
    const userDetails = await UserModel.findOne({_id: userId});
    try{
        if(userDetails.role === 'admin'){
            const deletedTask = await TaskModel.findByIdAndDelete({_id: taskId});
            return res.status(200).send({message: "Task deleted successfully", task: deletedTask});
        }
        else if(userDetails.role === 'user'){
            const deletedTask = await TaskModel.findByIdAndDelete({_id: taskId});
            return res.status(200).send({message: "Task deleted successfully", task: deletedTask});
        }
        else{
            return res.status(404).send({message: 'Tasks Not Found'});
        }
    }
    catch(err){
        return res.status(404).send({message: err.message});
    }
}

module.exports = { addTask, getAllTasks, updateTask, deleteTask };