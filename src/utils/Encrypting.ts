import cryptoJs from "crypto-js"

export default class Encrypting {
    
    private static passwordHash: string = process.env.PasswordHash || "StarPlusGames";

    static encryptPassword(password: string) : string{
        return cryptoJs.AES.encrypt(password, Encrypting.passwordHash).toString();
    }
}