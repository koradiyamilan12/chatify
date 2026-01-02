import { Router } from "express";

const router = Router();

router.get("/send", (req,res)=>{
  res.send("message send success")
})

export default router