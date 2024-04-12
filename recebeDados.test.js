
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "Marcelo Gomes" e o RA "033127"', () => {
    const nome = "Marcelo Gomes";
    const RA = "033127";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});