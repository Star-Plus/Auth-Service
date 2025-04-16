import LoginCredentialsRequestDTO from "./DTOs/LoginCredentialsRequest.dto";
import AuthDAO from "./Auth.dao";
import User from "./Auth.model";
import CreateUserRequestDTO from "./DTOs/CreateUserRequest.dto";
import Encrypting from "./utils/Encrypting";
import { NotFoundError, UnauthorizedError } from "./utils/SPError";
import jwt from "jsonwebtoken"

export default class AuthService {

    static async RegisterUser(data: CreateUserRequestDTO){
        const user = new User();

        user.email = data.email;
        user.name = data.name;
        user.password = Encrypting.encryptPassword(data.password);

        const createdUser = AuthDAO.AddUser(user);

        return createdUser;
    }

    static async AuthenticateUser(data: LoginCredentialsRequestDTO){
        try {
            
            const user = await AuthDAO.GetUserByEmail(data.email);
            if (!user){
                throw new NotFoundError(`User email ${data.email} not found`);
            }

            const originalPassword = Encrypting.decryptPassword(user.password);

            if (originalPassword != data.password){
                throw new UnauthorizedError("Wrong credentials");
            }

            const accessToken = jwt.sign({
                user: user.id,
            }, process.env.JWT_SECRET_KEY)      
            
            return accessToken;

        } catch(err){
            throw err;
        }
    }
}