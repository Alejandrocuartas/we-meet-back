import { Router } from "express"; 

import { createUserController } from "../controllers";

const router = Router();

router.post("/user/create", createUserController);

export default router;