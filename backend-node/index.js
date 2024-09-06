import express from "express";
import agendaRoutes from "./routes/agendas.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", agendaRoutes);

app.listen(8800);