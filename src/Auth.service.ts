import AuthDAO from "Auth.dao";
import User from "Auth.model";
import CreateUserRequestDTO from "DTOs/CreateUserRequest.dto";
import Encrypting from "utils/Encrypting";

export default class AuthService {

    static async RegisterUser(data: CreateUserRequestDTO){
        const user = new User();

        user.email = data.email;
        user.name = data.name;
        user.password = Encrypting.encryptPassword(data.password);

        const createdUser = AuthDAO.AddUser(user);

        return createdUser;
    }

    static async GetUserByID(id: string){
        return AuthDAO.GetUserByID(id);
    }
}