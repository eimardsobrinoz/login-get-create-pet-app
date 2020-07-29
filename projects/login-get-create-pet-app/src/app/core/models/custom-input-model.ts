import { ErrorFormMessage } from '../interfaces/errors/error-form-message.interface';
import { AuthValidation } from '../interfaces/auth/auth-validation.inteface';


export class CustomInput {
    label: string;
    errorMsg: ErrorFormMessage;
    name:string;
    validations?: AuthValidation;
    type?:string;
    pattern?:string;
}
