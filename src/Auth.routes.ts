import AuthController from "./Auth.controller";
import express from "express"

const router = express.Router();

router.route('/').post(AuthController.registerUser);
router.route('/login').post(AuthController.loginUser);

export default router;