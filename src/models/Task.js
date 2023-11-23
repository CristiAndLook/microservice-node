import { DataTypes } from "sequelize";
import { sequelize}  from "../config/database.js";

export const Task = sequelize.define(
    "Task",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        taskName: {
        type: DataTypes.STRING,
        },
        taskDone: {
        type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: "tasks",
        timestamps: true,
    }
    );