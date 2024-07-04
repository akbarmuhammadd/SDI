import express from "express";
import {
    getEmployes,
    getEmployeById,
    createEmploye,
    updateEmploye,
    deleteEmploye
} from "../controllers/Employe.js";
import { verifyUser } from "../middlewares/AuthUser.js";

const router = express.Router();

router.get('/employes', verifyUser, getEmployes);
router.get('/employes/:id', verifyUser, getEmployeById);
router.post('/employes', verifyUser, createEmploye);
router.patch('/employes/:id', verifyUser, updateEmploye);
router.delete('/employes/:id', verifyUser, deleteEmploye);

export default router;