import { PrismaClient } from "@prisma/client/extension";
import User from "Auth.model";

const prisma = new PrismaClient();

export default class AuthDAO {

    static async AddUser(user: User){
        try {
            const createdUser = await prisma.user.create({
                data: user,
            });

            return createdUser;
        } catch(err){
            throw new Error(err.message);
        }
        finally{
            await prisma.$disconnect();
        }
    }

    static async GetUserByID(id: string) : Promise<User>{
        try {
            const user = await prisma.user.findUnique({
                where: {id: id}
            })

            return user;
        }
        catch(err){
            throw new Error(err.message);
        }
        finally {
            await prisma.$disconnect();
        }
    }

    static async GetUserByEmail(email: string) : Promise<User>{
        try {
            const user = await prisma.user.findUnique({
                where: {email: email}
            })

            return user;
        }
        catch(err){
            throw new Error(err.message);
        }
        finally {
            await prisma.$disconnect();
        }
    }

}