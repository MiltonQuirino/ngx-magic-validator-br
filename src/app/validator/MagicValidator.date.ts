import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MagicValidatorUtil } from './MagicValidator.util';

export class MagicValidatorDate extends MagicValidatorUtil {

    static MaiorDeIdade(control: FormControl) {

        if (MagicValidatorUtil.IsNullOrEmpty(control.value)) {
            return { valid: false };
        }

        const birthday = moment(control.value);

        if (!birthday.isValid()) {
            return { valid: false };
        }

        const menorIdade = moment();
        menorIdade.year(menorIdade.year() - 18);

        if (birthday.isAfter(menorIdade)) {
            return { valid: false };
        } else {
            return null;
        }
    }
}
