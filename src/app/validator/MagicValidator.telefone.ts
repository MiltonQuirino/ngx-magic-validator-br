import { FormControl } from '@angular/forms';
import { MagicValidatorUtil } from './MagicValidator.util';

export class MagicValidatorTelefone extends MagicValidatorUtil {

    static TelefoneValidator(control: FormControl) {

        if (MagicValidatorUtil.IsNullOrEmpty(control.value)) {
            return { valid: false };
        }

        const re = /^[0-9]{10}$|^[0-9]{11}$/;

        console.log(re.test(control.value));

        return re.test(MagicValidatorUtil.RemoveCaracter(control.value)) ? null : {
            valid: false
        };
    }

}
