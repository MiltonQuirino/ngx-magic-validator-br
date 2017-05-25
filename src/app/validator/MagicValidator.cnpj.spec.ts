import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorCNPJ} from './MagicValidator.cnpj';

describe('MagicValidatorCNPJ', () => {

    it('should return null for a valid CNPJ', () => {

        const control = new FormControl();
        control.setValue('46061662000172');
        expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(null);

    });

    it('should return null for a valid CNPJ with mask', () => {

        const control = new FormControl();
        control.setValue('22.336.092/0001-18');
        expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(null);

    });

});
