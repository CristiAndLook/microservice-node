import { DataTypes } from "sequelize";
import { sequelize}  from "../config/database.js";

import { Task}  from "./Task.js";

export const Project = sequelize.define(
    "Project",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        projectName: {
        type: DataTypes.STRING,
        },
        projectPriority: {
        type: DataTypes.INTEGER,
        },
        projectDescription: {
        type: DataTypes.STRING,
        }
    },
    {
        tableName: "projects",
        timestamps: true,
    }
    );

Project.hasMany(Task, {
    foreignKey: "projectId",
    sourceKey: "id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Task.belongsTo(Project, {
    foreignKey: "projectId",
    tarjectKey: "id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


