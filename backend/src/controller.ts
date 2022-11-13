import { Router } from "express";

const controller = Router();

controller.get("/users-list", async (req, res) => {
  res.send({ msg: "deu bom" });
});

export { controller };
