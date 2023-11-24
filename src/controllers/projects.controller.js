import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const { projectName, projectPriority, projectDescription } = req.body;

  const newProject = await Project.create({
    projectName,
    projectPriority,
    projectDescription,
  });

  res.json(newProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
