
export default class Endereco {
  uf: string;
  localidade: string;
  locNoSem: string;
  locNu: string;
  localidadeSubordinada: string;
  logradouroDNEC: string;
  logradouroTextoAdicional: string;
  logradouroTexto: string;
  bairro: string;
  baiNu: string;
  nomeUnidade: string;
  cep: string;
  tipoCep: string;
  numeroLocalidade: string;
  situacao: string;
  faixasCaixaPostal: any[];
  faixasCep: any[];

  constructor(model :Endereco){
    if(!model) return;
    
    this.uf= model.uf ;
    this.localidade= model.localidade ;
    this.locNoSem= model.locNoSem ;
    this.locNu= model.locNu ;
    this.localidadeSubordinada= model.localidadeSubordinada ;
    this.logradouroDNEC= model.logradouroDNEC ;
    this.logradouroTextoAdicional= model.logradouroTextoAdicional ;
    this.logradouroTexto= model.logradouroTexto ;
    this.bairro= model.bairro ;
    this.baiNu= model.baiNu ;
    this.nomeUnidade= model.nomeUnidade ;
    this.cep= model.cep ;
    this.tipoCep= model.tipoCep ;
    this.numeroLocalidade= model.numeroLocalidade ;
    this.situacao= model.situacao ;
    this.faixasCaixaPostal= model.faixasCaixaPostal ;
    this.faixasCep= model.faixasCep ;
  }
}