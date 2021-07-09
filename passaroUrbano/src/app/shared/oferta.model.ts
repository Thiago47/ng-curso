export class Oferta {
      public id!: number
      //Observe este '!' modificador.
      //Esta é a "afirmação de atribuição definitiva"
      public categoria!: string
      public titulo!: string
      public descricao_oferta!: string
      public anunciante!: string
      public valor!: number
      public destaque!: boolean
      public imagens!: Array<any>
}
