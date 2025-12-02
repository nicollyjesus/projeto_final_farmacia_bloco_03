import type Produto from './Produto';

export default interface Categoria {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  produtos?: Produto[] | null;
}