import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) =>{
    try {
        const projects = await Project.findAll()
        res.json(projects);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getProject = async (req, res) =>{
    const {id} = req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        res.json(project);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const createProject = async (req, res) =>{
    const {name, priority, description} = req.body;
    try {
        const newProject = await Project.create({
            name,
            description,
            priority
        })
        res.json(newProject);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateProject = async (req, res) =>{
    const {id} = req.params;
    const {name, priority, description} = req.body;
    try {
    const project = await Project.findByPk(id); //Buscamos el proyecto por su id
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();
        res.json(project);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteProject = async (req, res) =>{
    const {id} = req.params; //Aqui recibimos los parametros que se mandan por la ruta
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        await project.destroy();
        res.json({
            message: `El proyecto ha sido eliminado`
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getProjectTasks = async (req, res) =>{
    const {id} = req.params;
    try {
        const tasks = await Task.findAll({
            where: {
                projectId: id
            }
        })
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}