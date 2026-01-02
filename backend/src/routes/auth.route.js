import { Router } from "express";

const router = Router();

router.get("/signup", (req, res) => {
  res.send("signup endpoint");
});

router.get("/login", (req, res) => {
  res.send("login endpoint");
});

router.get("/logout", (req, res) => {
  res.send("logout endpoint");
});

export default router;
