import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export class MagicValidatorUtil {

    static IsNullOrEmpty(data) {
        if (!data || data.length === 0) {
            return true;
        }
        return false;
    }

    static RemoveCaracter(data): string {
        const re = /[-!"#$%&()*+,./:;<=>?@[\\\]_`{|}~a-zA-Z]/g;
        return data.replace(re, '');
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
