import Sequelize from "sequelize";

export const sequelize = new Sequelize("microservices", "root", "root", {
  host: "localhost",
  dialect: "postgres",
});


