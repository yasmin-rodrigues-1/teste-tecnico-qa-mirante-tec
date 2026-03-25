# Teste Técnico QA - Mirante

## Objetivo
Este repositório contém a solução do teste técnico de QA, contemplando três frentes de validação:

- Automação Web
- Automação de API
- Testes de Performance

## Tecnologias utilizadas
- Cypress
- JavaScript
- Apache JMeter
- Git / GitHub

## Estrutura do projeto

```text
cypress/
  e2e/
    web/
      blog-search.cy.js
      README.md
    api/
      dog-api.cy.js
      README.md

docs/
  bdd/
    web-blog-search.feature
    api-dog-api.feature

jmeter/
  carga/
    teste-carga.jmx
  pico/
    teste-pico.jmx
  evidencias/
    carga-summary-report.png
    carga-thread-group.png
    pico-summary-report.png
    pico-thread-group.png
  README.md
