import app from './app.js';
import { sequelize } from './database/database.js';
import './models/Project.js';
import './models/Task.js';
import './models/TaskStatus.js';

async function main() {
    try {
        await sequelize.sync({force:false})// esto crea las tablas si no existen aun 
        app.listen(3000)
        console.log('Server on port 3000')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();