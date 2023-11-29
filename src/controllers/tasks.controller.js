import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { taskName, projectId } = req.body;

    const newTask = await Task.create({
      taskName,
      taskDone: false,
      projectId,
    });

    res.json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRowCount = await Task.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "task deleted successfully",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskName, taskDone } = req.body;
    const tasks = await Task.findAll({
      attributes: ["id", "taskName", "taskDone", "projectId"],
      where: {
        id,
      },
    });
    if (tasks.length > 0) {
      tasks.forEach(async (task) => {
        await task.update({
          taskName,
          taskDone,
          projectId,
        });
      });
    }
    return res.json({
      message: "Task updated successfully",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskDone } = req.body;
    const tasks = await Task.findAll({
      attributes: ["id", "taskName", "taskDone", "projectId"],
      where: {
        id,
      },
    });
    if (tasks.length > 0) {
      tasks.forEach(async (task) => {
        await task.update({
          taskDone,
        });
      });
    }
    return res.json({
      message: "Task updated successfully",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
