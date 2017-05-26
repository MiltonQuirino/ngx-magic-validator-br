import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MagicValidatorCPF } from './MagicValidator.cpf';

const erro = { valid: false };

describe('MagicValidatorCPF', () => {

    it('should return null for a valid CPF', () => {

        listaCPFValido().map(function (control) {
            expect(MagicValidatorCPF.ValidaCPF(control)).toEqual(null);
        });
    });

    it('should validate a valid CPF with mask', () => {

        const control = new FormControl();
        control.setValue('353.838.758-12');
        expect(MagicValidatorCPF.ValidaCPF(control)).not.toEqual(null);

    });

    it('should return invalid object for a invalid CPF', () => {

        listaCPFInvalido().map(function (control) {
            expect(MagicValidatorCPF.ValidaCPF(control)).toEqual(erro);
        });

    });

});

function listaCPFValido() {

    return [
        NewControl('92538416566'),
        NewControl('72756335827'),
        NewControl('64842116390'),
        NewControl('61803421568'),
        NewControl('81921664819'),
        NewControl('67643362882'),
        NewControl('59627896527'),
        NewControl('12895844194'),
        NewControl('08327217275'),
        NewControl('83751375619'),
        NewControl('53754679503'),
        NewControl('96737124259'),
        NewControl('53393487841'),
        NewControl('20501347119'),
        NewControl('16212327432'),
        NewControl('52835857869'),
        NewControl('48840493220'),
        NewControl('63123543269'),
        NewControl('40415674590'),
        NewControl('98628214186'),
        NewControl('68494284894'),

    ];
}

function listaCPFInvalido() {

    return [
        NewControl('12895844196'),
        NewControl('12895844193'),
        NewControl('12895844192'),
        NewControl('12895844191'),
        NewControl('12895844190'),
        NewControl('12895844133'),
        NewControl('92895844194'),
        NewControl('82895844194'),
        NewControl('72895844194'),
        NewControl('7289584419'),
        NewControl('00000000000'),
        NewControl(''),
        NewControl(null)
    ];
}

function NewControl(value) {
    const control = new FormControl();
    control.setValue(value);
    return control;
}
