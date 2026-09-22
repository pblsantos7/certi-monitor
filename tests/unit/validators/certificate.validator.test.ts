import { describe, it, expect } from "vitest"
import { validateName, validateIssuer, validateDataEmission, validateDateExpiration } from "../../../src/validators/certificate.validator.js"

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

describe('validateDataEmission', () => {
  it('deve lançar erro quando a data é inválida', () => {
    expect(() => validateDataEmission(new Date('data-invalida'))).toThrow('Data inválida');
  });

  it('deve lançar erro quando a data é futura', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(() => validateDataEmission(tomorrow)).toThrow('Data não pode ser maior do que a de hoje!');
  });

  it('não deve lançar erro quando a data é hoje', () => {
    expect(() => validateDataEmission(new Date())).not.toThrow();
  });

  it('não deve lançar erro quando a data é passada', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(() => validateDataEmission(yesterday)).not.toThrow();
  });
});


describe('validateDateExpiration', () => {
  it('deve lançar um erro quando a data é inválida', () => {
    expect(() => validateDateExpiration(new Date('data-invalida'), new Date('2026-10-08'))).toThrow('Data inválida')
  });

  it('deve lançar erro se a data de expiração for anterior a hoje', () => {
  const dateExpiration = new Date('2026-07-08')
  const dateEmission = new Date('2026-07-07')
  expect(() => validateDateExpiration(dateExpiration, dateEmission)).toThrow('Data de expiração não pode ser anterior a hoje!')
})

  it('deve lançar erro quando data de emissão for maior que a data de expiração', () => {
    const dateEmission = new Date('2026-09-26')
    const dateExpiration = new Date('2026-09-25')
    expect(() => validateDateExpiration(dateExpiration, dateEmission)).toThrow('Data de expiração não pode ser igual ou menor que data de emissão!')
  })

  it('deve lançar erro quando a data de emissão for igual a data de expiração', () => {
    const dateEmission = new Date('2026-09-25')
    const dateExpiration = new Date('2026-09-25')
    expect(() => validateDateExpiration(dateExpiration, dateEmission)).toThrow('Data de expiração não pode ser igual ou menor que data de emissão!')
  })

  
})
