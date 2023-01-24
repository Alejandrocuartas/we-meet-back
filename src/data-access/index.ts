import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.POSTGRES_HOST);

export default sequelize;