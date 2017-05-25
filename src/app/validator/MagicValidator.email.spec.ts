import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorEmail } from './MagicValidator.email';

describe('MagicValidatorEmail', () => {

    it('should return null for a email valid .com.br', () => {

        const control = new FormControl();
        control.setValue('miltonquirino.br@gmail.com.br');
        expect(MagicValidatorEmail.EmailValidator(control)).toEqual(null);

    });

    it('should return null for a email valid .com', () => {

        const control = new FormControl();
        control.setValue('miltonquirino.br@gmail.com');
        expect(MagicValidatorEmail.EmailValidator(control)).toEqual(null);

    });

    it('should return object for a email without @', () => {

        const control = new FormControl();
        control.setValue('miltonquirino.br.gmail.com');
        expect(MagicValidatorEmail.EmailValidator(control)).toEqual({ valid: false });

    });

    it('should return object for a email without domain', () => {

        const control = new FormControl();
        control.setValue('miltonquirino.br');
        expect(MagicValidatorEmail.EmailValidator(control)).toEqual({ valid: false });

    });



});
