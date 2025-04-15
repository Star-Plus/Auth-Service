import AuthService from "Auth.service";
import AuthValidator from "Auth.validator";
import CreateUserRequestDTO from "DTOs/CreateUserRequest.dto";
import { Request, RequestHandler, Response } from "express";

export default class AuthController{

    static registerUser : RequestHandler = async (req, res)=>{
        const {error} = AuthValidator.ValidateCreateUser(req.body);

        if (error){
            res.status(404).json(error.message[0]);
            return;
        }

        const createdUser = await AuthService.RegisterUser(new CreateUserRequestDTO(req.body));

        res.status(201).json(createdUser);
    }

}