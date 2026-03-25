Funcionalidade: Validação da Dog API

  CT001 - Validar que é possivel listar todas as raças disponíveis

        Dado que o usuário realiza uma requisição para listar todas as raças
        Quando a API processa a requisição
        Então deve retornar status 200
        E o campo status deve ser "success"
        E o campo message deve conter a lista de raças

  CT002 - Validar que é possivel buscar imagens de uma raça válida

        Dado que o usuário realiza uma requisição para buscar imagens da raça "hound"
        Quando a API processa a requisição
        Então deve retornar status 200
        E o campo status deve ser "success"
        E o campo message deve conter uma lista de imagens

  CT003 - Validar que é possivel buscar imagens de uma raça inválida

        Dado que o usuário realiza uma requisição para buscar imagens da raça "qa123"
        Quando a API processa a requisição
        Então deve retornar um erro
        E o campo status deve ser "error"

   CT004 - Validar que é possivel buscar uma imagem aleatória

        Dado que o usuário realiza uma requisição para buscar uma imagem aleatória
        Quando a API processa a requisição
        Então deve retornar status 200
        E o campo status deve ser "success"
        E o campo message deve conter uma URL de imagem