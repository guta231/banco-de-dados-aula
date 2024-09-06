import express from "express";
import {
    getAgendas,
    addAgenda,
    updateAgenda,
    deleteAgenda
} from "../controllers/agenda.js";

const router = express.Router();

router.get("/", getAgendas);

router.post("/", addAgenda);

router.put("/:codigo", updateAgenda);

router.delete("/:codigo", deleteAgenda);

export default router;