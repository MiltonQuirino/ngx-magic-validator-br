import { FormControl } from '@angular/forms';
import { MagicValidatorUtil } from './MagicValidator.util';

export class MagicValidatorCPF extends MagicValidatorUtil {

  static ValidaCPF(control: FormControl) {

        if (MagicValidatorUtil.IsNullOrEmpty(control.value)) {
            return { valid: false };
        }

        const cpf = MagicValidatorUtil.RemoveCaracter(control.value);

        if (cpf.length !== 11) {
            return { valid: false };
        }

        let Soma = 0, Resto = 0, i = 1;

        if (cpf.toString() === '00000000000') {
            return { valid: false };
        }

        for (i = 1; i <= 9; i++) {
            Soma = Soma + +cpf.substring(i - 1, i) * (11 - i);
        }

        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) {
            Resto = 0;
        }

        if (Resto !== +cpf.substring(9, 10)) {
            return { valid: false };
        }

        Soma = 0;

        for (i = 1; i <= 10; i++) {
            Soma = Soma + (+cpf.substring(i - 1, i)) * (12 - i);
        }


        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) {
            Resto = 0;
        }

        if (Resto !== +cpf.substring(10, 11)) {
            return { valid: false };
        }

        return null;
    }
}