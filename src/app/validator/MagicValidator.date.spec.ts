import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorDate } from './MagicValidator.date';

describe('SampleComponent', () => {

    fit('should return null for a date less to 18 years ago format pt-br ', () => {

        const control = new FormControl();
        control.setValue('05/11/1986');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual(null);

    });

    fit('should return null for a date less to 18 years ago format en', () => {

        const control = new FormControl();
        control.setValue('1986-11-05');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual(null);

    });

    fit('should return object for a date great to 18 years ago format en', () => {

        const control = new FormControl();
        control.setValue('2008-11-05');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual({valid: false});

    });

     fit('should return object for a date great to 18 years ago format pt-br', () => {

        const control = new FormControl();
        control.setValue('05/11/2005');
        expect(MagicValidatorDate.MaiorDeIdade(control)).toEqual({valid: false});

    });


});
