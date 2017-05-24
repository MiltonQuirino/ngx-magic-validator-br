import { FormControl } from '@angular/forms';
import { MagicValidatorUtil } from './MagicValidator.util';

export class MagicValidatorEmail extends MagicValidatorUtil {

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
    
}
