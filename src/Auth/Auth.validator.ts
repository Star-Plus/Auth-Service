import Joi from "joi";

export default class AuthValidator {

    static ValidateCreateUser(body: any){
        return Joi.object({
            name: Joi.string().min(3).max(200).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(300).pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")).required()
        }).validate(body)
    }
    
}