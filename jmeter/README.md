# Testes de Performance - JMeter

## Objetivo
Validar o comportamento da aplicação no cenário de compra de passagem aérea, considerando os critérios de aceitação definidos no desafio técnico.

## Ferramenta utilizada
- Apache JMeter 5.6.3
- Java 11

## Estrutura
- `carga/teste-carga.jmx`: script do teste de carga
- `pico/teste-pico.jmx`: script do teste de pico
- `evidencias/`: prints dos resultados obtidos

## Cenário avaliado
Compra de passagem aérea com sucesso.

## Critério de aceitação
- 250 requisições por segundo
- Percentil 90 inferior a 2 segundos

## Teste de carga
Foi executado um teste com aumento controlado de usuários para avaliar a estabilidade da aplicação sob carga.

### Resultado observado
- 0% de erros
- tempo médio de resposta dentro de um intervalo aceitável
- vazão abaixo do critério esperado

## Teste de pico
Foi executado um teste com aumento brusco de usuários para simular uma condição de pico.

### Resultado observado
- 0% de erros
- aplicação estável durante a execução
- vazão abaixo do critério de aceitação

## Conclusão
A aplicação apresentou estabilidade durante as execuções, sem falhas, porém não atingiu o critério de 250 requisições por segundo no ambiente utilizado.

É importante considerar que os testes foram executados em ambiente local, o que limita a capacidade de geração de carga. Para uma validação mais próxima do critério proposto, seria recomendado o uso de execução distribuída ou infraestrutura em nuvem.

## Evidências
As evidências das execuções estão disponíveis na pasta `evidencias/`.
