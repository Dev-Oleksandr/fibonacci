import {Router} from "express";
import controller from "../controllers/controller";

const router = Router()

router.post('/input', controller.input)
router.get('/output', controller.output)

export default router