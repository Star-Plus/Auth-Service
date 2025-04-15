import dbclient from "config/DB";
import User from "./Auth.model";

export default class AuthDAO {

    static async AddUser(user: User){
        try {
            const createdUser = await dbclient.
            query(`INSERT INTO USER (name, email, password) VALUES(${user.name}, ${user.email}, ${user.password})`);

            return createdUser;
        } catch(err){
            throw new Error(err.message);
        }
    }

    static async GetUserByID(id: string) : Promise<User>{
        try {
            const user = await dbclient.
            query(`SELECT * FROM User WHERE id = ${id}`)

            return user.rows[0];
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    static async GetUserByEmail(email: string) : Promise<User>{
        try {
            const user = await dbclient.
            query(`SELECT * FROM User WHERE email = ${email}`)

            return user.rows[0];
        }
        catch(err){
            throw new Error(err.message);
        }
    }

}