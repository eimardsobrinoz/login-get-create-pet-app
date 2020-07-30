import { ErrorFormMessage } from '../interfaces/errors/error-form-message.interface';
import { FormValidation } from '../interfaces/auth/form-validation.inteface';


export class CustomInput {
    inputId: string;
    label: string;
    errorMsg: ErrorFormMessage;
    name:string;
    validations?: FormValidation;
    type?:string;
    pattern?:string;
}
