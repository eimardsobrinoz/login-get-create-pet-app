import { CustomSelect } from './../../models/custom-select-model';
import { CustomInput } from '../../models/custom-input-model';

export class FormFormat {
    inputsControls: CustomInput[];
    btnLabel:string;
    selectControls?: CustomSelect[];
    upload?: boolean;
}
