import {describe, it, expect} from "vitest"
import {validateName, validateIssuer, validateDataEmission, validateDateExpiration} from "../../../src/validators/certificate.validator.js"

describe('validateName', () => {
  it('deve lançar erro quando o nome está vazio', () => {
    expect(() => validateName('')).toThrow('Nome está vazio!');
  });

  it('deve lançar erro quando o nome só tem espaços', () => {
    expect(() => validateName('   ')).toThrow('Nome está vazio!');
  });

  it('não deve lançar erro quando o nome é válido', () => {
    expect(() => validateName('Abc')).not.toThrow();
  });
});


describe('validateIssuer', () => {
  it('deve lançar erro quando o nome está vazio', () => {
    expect(() => validateIssuer('')).toThrow('Emissor está vazio!');
  });

  it('deve lançar erro quando o nome só tem espaços', () => {
    expect(() => validateIssuer('   ')).toThrow('Emissor está vazio!');
  });

  it('não deve lançar erro quando o nome é válido', () => {
    expect(() => validateIssuer('Abc')).not.toThrow();
  });
});
