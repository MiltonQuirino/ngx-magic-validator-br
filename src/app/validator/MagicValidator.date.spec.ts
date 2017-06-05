import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorDate } from './MagicValidator.date';

describe('MagicValidatorDate', () => {

    it('should return null for a date less to 18 years ago format pt-br ', () => {

        const control = new FormControl();
        control.setValue('05/11/1986');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual(null);

    });

    it('should return null for a date less to 18 years ago format en', () => {

        const control = new FormControl();
        control.setValue('1986-11-05');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual(null);

    });

    it('should return object for a date great to 18 years format en', () => {

        const control = new FormControl();
        control.setValue('2008-11-05');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual({ valid: false });

    });

    it('should return invalid object for a date great to 18 years format pt-br', () => {

        const control = new FormControl();
        control.setValue('05/11/2005');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual({ valid: false });

    });

    it('should return invalid object for a date null', () => {

        const control = new FormControl();
        control.setValue(null);
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual({ valid: false });

    });

    it('should return invalid object for a date empty', () => {

        const control = new FormControl();
        control.setValue('');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual({ valid: false });

    });

    it('should return invalid object for a date invalid', () => {

        const control = new FormControl();
        control.setValue('99999999');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual({ valid: false });

    });

});
