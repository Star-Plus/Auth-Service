import UserResponse from "./DTOs/UserResponse.dto";
import AuthService from "./Auth.service";
import AuthValidator from "./Auth.validator";
import CreateUserRequestDTO from "./DTOs/CreateUserRequest.dto";
import { RequestHandler } from "express";
import LoginCredentialsRequestDTO from "DTOs/LoginCredentialsRequest.dto";

export default class AuthController{

    static registerUser : RequestHandler = async (req, res)=>{
        const {error} = AuthValidator.ValidateCreateUser(req.body);

        if (error){
            res.status(404).json(error.message[0]);
            return;
        }

        const createdUser = await AuthService.RegisterUser(new CreateUserRequestDTO(req.body));

        res.status(201).json(new UserResponse(createdUser));
    }

    static loginUser : RequestHandler = async (req, res)=>{
        try {
            const accessToken = await AuthService.AuthenticateUser(new LoginCredentialsRequestDTO(req.body));
            res.status(200).json({accessToken})
        }
        catch(err){
            res.status(err.status).json({error: err.message});
        }
    }

}