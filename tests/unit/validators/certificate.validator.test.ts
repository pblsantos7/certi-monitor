import {describe, it, expect} from "vitest"
import {validateName} from "../../../src/validators/certificate.validator.js"

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