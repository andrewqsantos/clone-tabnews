const calculadora = require("../models/calculadora.js");

describe("calculadora", () => {
  it("somar 2 + 2 deveria retornar 4", () => {
    const resultado = calculadora.somar(2, 2);
    expect(resultado).toBe(4);
  });

  it("somar 5 + 100 deveria retornar 105", () => {
    const resultado = calculadora.somar(5, 100);
    expect(resultado).toBe(105);
  });

  it("somar 'banana' + 100 deveria retornar 'Erro' ", () => {
    const resultado = calculadora.somar("banana", 100);
    expect(resultado).toBe("Erro");
  });

  it("somar 100 + 'fabiano' deveria retornar 'Erro' ", () => {
    const resultado = calculadora.somar(100, "fabiano");
    expect(resultado).toBe("Erro");
  });

  it("somar 'fabiano' + 'banana' deveria retornar 'Erro'", () => {
    const resultado = calculadora.somar("fabiano", "banana");
    expect(resultado).toBe("Erro");
  });

  it("somar null + null deveria retornar 'Erro'", () => {
    const resultado = calculadora.somar();
    expect(resultado).toBe("Erro");
  });
});
