Funcionalidade: Busca de artigos no Blog do Agi

  CT001 - Validar busca de um termo válido

        Dado que o usuário acessa o Blog do Agi
        Quando realiza uma busca por um termo válido
        Então o sistema deve exibir resultados relacionados ao termo pesquisado

  CT002 - Validar busca um termo inexistente

        Dado que o usuário acessa o Blog do Agi
        Quando realiza uma busca por um termo inexistente
        Então o sistema deve informar que não encontrou resultados ou exibir estado equivalente

  CT003 - Validar busca sem informar termo

        Dado que o usuário acessa o Blog do Agi
        Quando tenta realizar uma busca sem preencher o campo
        Então o sistema deve manter o comportamento padrão da busca sem quebrar a navegação

  CT004 - Validar busca com caracteres númericos

        Dado que o usuário acessa o Blog do Agi
        Quando realiza uma busca com caracteres númericos
        Então o sistema deve tratar a pesquisa corretamente sem apresentar erro