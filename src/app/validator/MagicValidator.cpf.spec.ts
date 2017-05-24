import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorCPF } from './MagicValidator.cpf';

describe('SampleComponent', () => {

    it('should return null for a valid CPF', () => {

        const control = new FormControl();
        control.setValue('35383875832');
        expect(MagicValidatorCPF.ValidaCPF(control)).toEqual(null);

    });

    it('should return object for a invalid CPF', () => {

        const control = new FormControl();
        control.setValue('44483875810');
        expect(MagicValidatorCPF.ValidaCPF(control)).toEqual({valid: false});

    });

    it('should validate a valid CPF with mask', () => {

        const control = new FormControl();
        control.setValue('353.838.758-12');
        expect(MagicValidatorCPF.ValidaCPF(control)).not.toEqual(null);

    });


});
