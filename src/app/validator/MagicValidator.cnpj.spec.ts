import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorCNPJ } from './MagicValidator.cnpj';

const erro = { valid: false };


describe('MagicValidatorCNPJ', () => {


    it('should return null for a valid CNPJ', () => {

        listaControlCNPJValido().map(function (control) {
            expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(null);
        });

    });

    it('should return null for a valid CNPJ with mask', () => {

        const control = new FormControl();
        control.setValue('22.336.092/0001-18');
        expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(null);

    });

    it('should return invalid object for empty value', () => {

        const control = new FormControl();
        control.setValue('');
        expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(erro);

    });

    it('should return invalid object for null value', () => {

        const control = new FormControl();
        control.setValue(null);
        expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(erro);

    });


    it('should return invalid object for CNPJ less 14 caracter', () => {

        const control = new FormControl();
        control.setValue('22.336.092/0001-1');
        expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(erro);

    });

    it('should return invalid object for invalid CNPJ', () => {

        listaControlCNPJInvalido().map(function (control) {
            expect(MagicValidatorCNPJ.ValidaCNPJ(control)).toEqual(erro);
        });

    });

});

function listaControlCNPJValido() {

    return [
        NewControl('49198634000190'),
        NewControl('36233840000141'),
        NewControl('21987196000120'),
        NewControl('13235416000130'),
        NewControl('59086127000118'),
        NewControl('78773830000149'),
        NewControl('49198634000190'),
        NewControl('65885188000148')
    ];
}

function listaControlCNPJInvalido() {

    return [
        NewControl('49198634000199'),
        NewControl('36233840000148'),
        NewControl('21987196000127'),
        NewControl('13235416000136'),
        NewControl('59086127000115'),
        NewControl('78773830000144'),
        NewControl('49198634000193'),
        NewControl('65885188000142'),
        NewControl('11185188000149'),
        NewControl('77785188000141'),
        NewControl('00000000000000'),
        NewControl('11111111111111'),
        NewControl('22222222222222'),
        NewControl('33333333333333'),
        NewControl('44444444444444'),
        NewControl('55555555555555'),
        NewControl('66666666666666'),
        NewControl('77777777777777'),
        NewControl('88888888888888'),
        NewControl('99999999999999')
    ];
}

function NewControl(value) {
    const control = new FormControl();
    control.setValue(value);
    return control;
}
