import { enderecoPorCep } from '../../src/cep'

test('envia cep e deve retornar o endereco certo ', async() => {
  const cep = '86606-634';
  const endereco = await enderecoPorCep(cep);

  expect(endereco.bairro).toBe('Conjunto Habitacional Santiago');

})