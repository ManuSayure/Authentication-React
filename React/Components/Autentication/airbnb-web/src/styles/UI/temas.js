import { fundoClaro, 
        conteudoClaro, 
        textoFundoClaro, 
        fundoEscuro,
        conteudoEscuro,
        textoFundoEscuro,
        sombraClara,
        sombraEscura,} from './variaveis';

export const temaClaro = {
    body:   fundoClaro,
    inside: conteudoClaro,
    text:   textoFundoClaro,
    sombra: sombraClara,
    filter:'',

};
export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: 'invert(100%)',

}