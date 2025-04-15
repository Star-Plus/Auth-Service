import AuthController from "Auth.controller";
import express from "express"

const router = express.Router();

router.route('/').post(AuthController.registerUser)

export default router;