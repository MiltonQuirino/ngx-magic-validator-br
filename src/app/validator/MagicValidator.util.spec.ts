import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorUtil } from './MagicValidator.util';

const erro = { valid: false };

describe('MagicValidatorUtil', () => {

    it('should return null for a email valid .com.br', () => {

        expect(MagicValidatorUtil.RemoveCaracter('a!b@c%()*')).toEqual('');

    });

    it('should return true for a string with min length', () => {

        expect(MagicValidatorUtil.minLenght('abcd', 3)).toEqual(true);

    });

    it('should return false for a string with less then minlength', () => {

        expect(MagicValidatorUtil.minLenght('ab', 3)).toEqual(false);

    });

    it('should return true for a string with max length', () => {

        expect(MagicValidatorUtil.minLenght('abcd', 4)).toEqual(true);

    });

    it('should return null for a string with max length', () => {

        expect(MagicValidatorUtil.maxLength('abcdee', 4)).toEqual(false);

    });

    it('should return true for a string less maxlength', () => {

        expect(MagicValidatorUtil.maxLength('abc', 4)).toEqual(true);

    });

    it('should return true for a string is empty', () => {

        expect(MagicValidatorUtil.IsNullOrEmpty('')).toEqual(true);

    });

    it('should return true for null', () => {

        expect(MagicValidatorUtil.IsNullOrEmpty(null)).toEqual(true);

    });

    it('should return false for a string', () => {

        expect(MagicValidatorUtil.IsNullOrEmpty('xxx')).toEqual(false);

    });

});


function NewControl(value) {
    const control = new FormControl();
    control.setValue(value);
    return control;
}
