import { ErrorFormMessage } from '../interfaces/error-form-message.interface';
import { AuthValidation } from '../interfaces/auth-validation.inteface';

export class CustomInput {
    label: string;
    errorMsg: ErrorFormMessage;
    name:string;
    validations?: AuthValidation;
    type?:string;
    pattern?:string;
}
