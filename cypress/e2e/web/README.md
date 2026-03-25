# Testes Web - Blog do Agi

## Objetivo
Validar a funcionalidade de busca do Blog do Agi, cobrindo cenários positivos e negativos.

## Ferramenta utilizada
- Cypress
- JavaScript

## Arquivo de teste
- `blog-search.cy.js`

## Cenários escritos em BDD
Os cenários estão documentados em:
- `docs/bdd/web-blog-search.feature`

## Cenários automatizados
- CT001 - Validar busca de um termo válido
- CT002 - Validar busca de um termo inexistente
- CT003 - Validar busca sem informar termo
- CT004 - Validar busca com caracteres numéricos

## Estratégia adotada
Foi escolhida a funcionalidade de busca por ser um fluxo simples, relevante e de fácil validação para o usuário final.  
A automação foi estruturada com reutilização de funções para abertura da busca e execução das pesquisas, reduzindo repetição de código e facilitando manutenção.

## Como executar
Na raiz do projeto, execute:

```bash
npx cypress run --spec "cypress/e2e/web/blog-search.cy.js"
