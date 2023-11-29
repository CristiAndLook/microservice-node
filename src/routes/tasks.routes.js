import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask, getOneTask, updateTaskStatus } from "../controllers/tasks.controller.js";

const router = new Router();
const endpoint = "/api/v1/tasks";

router.get(`${endpoint}`, getTasks);

router.post(`${endpoint}`, createTask);

router.get(`${endpoint}/:id`, getOneTask);

router.put(`${endpoint}/:id`, updateTask);

router.put(`${endpoint}/status/:id`, updateTaskStatus);

router.delete(`${endpoint}/:id`, deleteTask);

export default router;
