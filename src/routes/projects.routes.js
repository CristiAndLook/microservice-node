import { Router } from "express";
import { getProjects, createProject } from "../controllers/projects.controller.js";

const router = new Router();

router.get("/", getProjects);

router.get("/api/v1/projects", getProjects);

router.post("/api/v1/projects", createProject);

router.get("/api/v1/projects/:id");

router.put("/api/v1/projects/:id");

router.delete("/api/v1/projects/:id");

export default router;
