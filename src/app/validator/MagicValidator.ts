import { FormControl } from '@angular/forms';
import * as moment from 'moment';

// function validateEmail(c: FormControl) {

//     const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     return EMAIL_REGEXP.test(c.value) ? null : {
//         validateEmail: {
//             valid: false
//         }
//     };
// }

export class MagicValidator {

    static EmailValidator(control: FormControl) {
        /* tslint:disable */
        let re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        /* tslint:enable */

        return re.test(control.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }

    static NomeValidator(control: FormControl) {

        const re = /[-!"#$%&()*+,./:;<=>?@[\\\]_`{|}~0-9]/;
        const result =  !re.test(control.value) ? null : {
            NomeValidator: {
                valid: false
            }
        };
        return result;
    }

    static MaiorDeIdade(control: FormControl) {

        const data = moment(control.value);
        //continuar
        //console.log(x);

        //
        moment.locale('pt-BR');

        const today = new Date();
        const year = today.getFullYear() - 18;

        const menorIdade = new Date(year, today.getMonth(), today.getDate()).toISOString().substr(0, 10);

        if (control.value == null) {
            return { valid: false };
        }
        const dayInput = control.value.substring(0, 2);
        const monthInput = control.value.substring(3, 5);
        const yearInput = control.value.substring(6, 10);

        const dateString = yearInput + '-' + monthInput + '-' + dayInput;

        const birthday = moment(dateString);

        if (!birthday.isValid()) {
            return { valid: false };
        }

        if (birthday.isAfter(menorIdade)) {
            return { valid: false };
        } else {
            return null;
        }
    }

    private static verificaCpfCnpj(valor) {
        valor = valor.toString();
        valor = valor.replace(/[^0-9]/g, '');

        if (valor.length === 11) {
            return 'CPF';
        } else if (valor.length === 14) {
            return 'CNPJ';
        } else {
            return false;
        }
    }

    private static minLenght(data, min) {
        if (data.length > min) {
            return true;
        }
        return false;
    }

    private static maxLength(data, max) {
        if (data.length < max) {
            return true;
        }
        return false;
    }



}
