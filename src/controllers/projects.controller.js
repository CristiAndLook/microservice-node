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

export const getOneProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRowCount = await Project.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Project deleted successfully",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { projectName, projectPriority, projectDescription } = req.body;
    const projects = await Project.findAll({
      attributes: [
        "id",
        "projectName",
        "projectPriority",
        "projectDescription",
      ],
      where: {
        id,
      },
    });
    if (projects.length > 0) {
      projects.forEach(async (project) => {
        await project.update({
          projectName,
          projectPriority,
          projectDescription,
        });
      });
    }
    return res.json({
      message: "Project updated successfully",
      data: projects,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
