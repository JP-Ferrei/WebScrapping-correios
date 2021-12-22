import supertest from 'supertest'
import {app} from '../../src/server'

describe('Cep',  () => {

  it('deve retorar 200 ao chamar a rota de cep', async() => {

    const cep = '86606-634'
    const respose = await supertest(app)
    .get(`/cep/${cep}`)
    .expect(200);

  })
})