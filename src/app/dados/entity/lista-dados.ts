import { DadosAssociados } from './dados-associados';
import { DadosDesassociados } from './dados-desassociados';

export interface ListaDados {
    DadosAssociados: DadosAssociados[];
    DadosDesassociados: DadosDesassociados[];
}