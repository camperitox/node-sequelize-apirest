import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';

// Aqui definimos comO queremos que se llame la tabla y los campos que debe tener esa tabla
// Basicamente este es el esquema de la tabla
export const Project = sequelize.define('project', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true, // definimos que es una llave primaria
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    },
})


// Creamos las relaciones entre las tablas

Project.hasMany(Task, {
    foreignKey: 'projectId', 
    sourceKey: 'id'
});

// Acá dentro del hasMany le decimos que la llave foranea de la tabla Task es projectId 
// que va vinculada con la llave primaria de la tabla Project es id de esta forma estan relacionadas muchas tareas con un solo proyecto

Task.belongsTo(Project,{
    foreignKey: 'projectId',
    targetId: 'id'
})