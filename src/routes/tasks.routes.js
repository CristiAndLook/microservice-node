import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask, getOneTask } from "../controllers/tasks.controller.js";

const router = new Router();
const endpoint = "/api/v1/tasks";

router.get("/");

router.get(`${endpoint}`, getTasks);

router.post(`${endpoint}`, createTask);

router.get(`${endpoint}/:id`, getOneTask);

router.put(`${endpoint}/:id`, updateTask);

router.delete(`${endpoint}/:id`, deleteTask);

export default router;
