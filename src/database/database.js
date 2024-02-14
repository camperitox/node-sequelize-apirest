import Sequelize from 'sequelize';

export const sequelize = new Sequelize ('node_project', 'postgres', '1234',{
    host: 'localhost',
    dialect: 'postgres',
})

