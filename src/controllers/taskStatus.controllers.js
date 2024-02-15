import { TaskStatus } from "../models/TaskStatus.js";

export const getTaskStatus = async (req, res) =>{
    try {
        const taskStatus = await TaskStatus.findAll();
        res.json(taskStatus);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createTaskStatus = async (req, res) =>{
    try {
        const {name} = req.body;
        const newTaskStatus = await TaskStatus.create({
            name
        })
        res.json(newTaskStatus);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}