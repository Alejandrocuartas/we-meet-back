import { DataTypes } from "sequelize";
import sequelize from "../data-access";

const User = sequelize.define("User", {
    username: DataTypes.STRING,
});

export default User;