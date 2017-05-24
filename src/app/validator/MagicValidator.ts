import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MagicValidatorCPF } from './MagicValidator.cpf';
import { MagicValidatorDate } from './MagicValidator.date';
import { MagicValidatorEmail } from './MagicValidator.email';


export class MagicValidator {


    private static  _validators = {
        cpf: MagicValidatorCPF,
        date: MagicValidatorDate,
        email: MagicValidatorEmail
    };

    public static get validators(){
        return this._validators;
    }

    static NomeValidator(control: FormControl) {

        const re = /[-!"#$%&()*+,./:;<=>?@[\\\]_`{|}~0-9]/;
        const result = !re.test(control.value) ? null : {
            NomeValidator: {
                valid: false
            }
        };
        return result;
    }

    // private static verificaCpfCnpj(valor) {
    //     valor = valor.toString();
    //     valor = valor.replace(/[^0-9]/g, '');

    //     if (valor.length === 11) {
    //         return 'CPF';
    //     } else if (valor.length === 14) {
    //         return 'CNPJ';
    //     } else {
    //         return false;
    //     }
    // }

}
