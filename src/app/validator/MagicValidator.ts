import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MagicValidatorCPF } from './MagicValidator.cpf';
import { MagicValidatorDate } from './MagicValidator.date';
import { MagicValidatorEmail } from './MagicValidator.email';
import { MagicValidatorCNPJ } from './MagicValidator.cnpj';
import { MagicValidatorTelefone } from './MagicValidator.telefone';

export class MagicValidator {


    private static  _validators = {
        cpf: MagicValidatorCPF,
        date: MagicValidatorDate,
        email: MagicValidatorEmail,
        cnpj: MagicValidatorCNPJ,
        telefone: MagicValidatorTelefone
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


}
