import cryptoJs from "crypto-js"

export default class Encrypting {
    
    private static passwordHash: string = process.env.PASSWORD_HASH || "StarPlusGames";

    static encryptPassword(password: string) : string{
        return cryptoJs.AES.encrypt(password, Encrypting.passwordHash).toString();
    }

    static decryptPassword(encryptedPassword: string) : string {
        return cryptoJs.AES.decrypt(encryptedPassword, Encrypting.passwordHash).toString(cryptoJs.enc.Utf8);
    }
}