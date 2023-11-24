import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject, getOneProject } from "../controllers/projects.controller.js";

const router = new Router();
const endpoint = '/api/v1/projects';


router.get("/", getProjects);

router.get(`${endpoint}`, getProjects);

router.post(`${endpoint}`, createProject);

router.get(`${endpoint}/:id`, getOneProject);

router.put(`${endpoint}/:id`, updateProject);

router.delete(`${endpoint}/:id`, deleteProject);

export default router;
