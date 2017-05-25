import { FormControl } from '@angular/forms';
import { MagicValidatorUtil } from './MagicValidator.util';

export class MagicValidatorCNPJ extends MagicValidatorUtil {

    static ValidaCNPJ(control: FormControl) {

        if (MagicValidatorUtil.IsNullOrEmpty(control.value)) {
            return { valid: false };
        }

        const cnpj = MagicValidatorUtil.RemoveCaracter(control.value);

        if (cnpj.length !== 14) {
            return { valid: false };
        }

        if (cnpj === '00000000000000' ||
            cnpj === '11111111111111' ||
            cnpj === '22222222222222' ||
            cnpj === '33333333333333' ||
            cnpj === '44444444444444' ||
            cnpj === '55555555555555' ||
            cnpj === '66666666666666' ||
            cnpj === '77777777777777' ||
            cnpj === '88888888888888' ||
            cnpj === '99999999999999') {
            return { valid: false };
        }

        let tamanho = cnpj.length - 2;
        let numeros: string = cnpj.substring(0, tamanho);
        const digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        let i = tamanho;

        for (i; i >= 1; i--) {
            soma += (+numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== +digitos.charAt(0)) {
            return { valid: false };
        }


        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (i = tamanho; i >= 1; i--) {
            soma += +numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== +digitos.charAt(1)) {
            return { valid: false };
        }
        return null;

    }
}
