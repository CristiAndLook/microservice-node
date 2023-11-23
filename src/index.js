import app from "./app.js";
import { sequelize}  from "./config/database.js";

import "./models/Project.js";
import "./models/Task.js";

const init = async () => {
  try {
    await sequelize.sync({ force: true});
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

init();
