import dbclient from "./config/DB";
import User from "./Auth.model";
import { InternalServerError } from "./utils/SPError";

export default class AuthDAO {

    static async AddUser(user: User){
        try {
            const createdUser = await dbclient.
            query(`insert into "User" (name, email, password) values('${user.name}', '${user.email}', '${user.password}') returning *`);

            return createdUser.rows[0];
        } catch(err){
            throw new InternalServerError(err.message);
        }
    }

    static async GetUserByID(id: string) : Promise<User>{
        try {
            const user = await dbclient.
            query(`SELECT * FROM "User" WHERE id = '${id}'`)

            return user.rows[0];
        }
        catch(err){
            throw new InternalServerError(err.message);
        }
    }

    static async GetUserByEmail(email: string) : Promise<User>{
        try {
            const user = await dbclient.
            query(`SELECT * FROM "User" WHERE email = '${email}'`)

            return user.rows[0];
        }
        catch(err){
            throw new InternalServerError(err.message);
        }
    }

}