import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { TaskStatus } from "./TaskStatus.js"; // Asegúrate de importar el modelo TaskStatus adecuadamente

export const Task = sequelize.define('task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: false
});

// Definir la asociación entre Task y TaskStatus
Task.belongsTo(TaskStatus, {
    foreignKey: 'statusId',
    targetKey: 'id'
});
