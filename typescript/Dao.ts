import { DaoInterface2 } from './DaoInterface2';

export class Dao<T> implements DaoInterface2<T>{
    nomeTabela: string = ''

    inserir(object: T): boolean{
        console.log('lógica de insert')
        return true
    }
    atualizar(object: T): boolean{
        console.log('lógica de update')
        return true
    }
    remover(id: number): T{
        console.log('lógica delete')
        return Object()
    }
    selecionar(id: number): T{
        console.log('lógica select')
        return Object()
    }
    selecionarTodos(): [any]{
        console.log('lógica getALL')
        return [Object()]
    }
}