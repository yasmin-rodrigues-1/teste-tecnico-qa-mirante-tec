
---

## `cypress/e2e/api/README.md`

```md
# Testes de API - Dog API

## Objetivo
Validar os endpoints da Dog API, garantindo que a API responda corretamente, retorne dados no formato esperado e se comporte adequadamente em cenários positivos e negativos.

## Ferramenta utilizada
- Cypress
- JavaScript

## Arquivo de teste
- `dog-api.cy.js`

## Cenários escritos em BDD
Os cenários estão documentados em:
- `docs/bdd/api-dog-api.feature`

## Endpoints testados
- `GET /breeds/list/all`
- `GET /breed/{breed}/images`
- `GET /breeds/image/random`

## Cenários automatizados
- CT001 - Validar que é possível listar todas as raças disponíveis
- CT002 - Validar que é possível buscar imagens de uma raça válida
- CT003 - Validar que é possível buscar imagens de uma raça inválida
- CT004 - Validar que é possível buscar uma imagem aleatória

## Estratégia adotada
Os testes validam:
- status code HTTP
- estrutura da resposta
- regra de negócio (`status`)
- conteúdo retornado (`message`)
- cenário negativo com raça inválida

## Como executar
Na raiz do projeto, execute:

```bash
npx cypress run --spec "cypress/e2e/api/dog-api.cy.js"
