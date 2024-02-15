import { Router } from "express";
import { getTaskStatus, createTaskStatus } from "../controllers/taskStatus.controllers.js";

const router = Router();

router.get('/tasksStatus', getTaskStatus)
router.post('/tasksStatus', createTaskStatus)

export default router;