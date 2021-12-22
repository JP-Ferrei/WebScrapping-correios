import Endereco from './models/Endereco';

const puppeteer = require('puppeteer');

const enderecoPorCep = async (cep:string) :Promise<Endereco> => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
 
	await page.goto('https://buscacepinter.correios.com.br/app/endereco/index.php');

	await page.type('#endereco', cep);
	await page.click('#btn_pesquisar');

  const hr = await page.waitForResponse(async (response) => {
    if (response.url() =='https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php'){

      const res = await response.json();
      return res
		}
  })

  const res = await hr.json();
	await browser.close();

  if(res.mensagem == 'DADOS NAO ENCONTRADOS'){
    throw new Error('Cep não valido')
  }

  const endereco = new Endereco(res.dados[0])
 
  return endereco
};

export {
  enderecoPorCep
}