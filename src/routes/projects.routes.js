import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject, getOneProject } from "../controllers/projects.controller.js";

const router = new Router();

router.get("/", getProjects);

router.get("/api/v1/projects", getProjects);

router.post("/api/v1/projects", createProject);

router.get("/api/v1/projects/:id", getOneProject);

router.put("/api/v1/projects/:id", updateProject);

router.delete("/api/v1/projects/:id", deleteProject);

export default router;
