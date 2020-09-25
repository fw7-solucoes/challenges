# Challenge 4 - FW7

**Bom dia família!** 👊 Segue o quarto FW7 _challenge_. Nessa semana, o desafio será um pouco diferente... Iremos simular um fluxo de aplicação de descontos e os valores totais resultantes.

VAMO PRA CIMA TIME! 🤟

## Informações úteis

- Cada participante irá fazer a sua versão e publicar em seu _github_.

- Deverá ser usado as bases de dados `db/index.js` para solucionar os desafios.

## Challenges

### 1

Deverá ser retornada a mesma estrutura ordenada pelo **_order_** de cada cliente.

Obs.: As ordenações variam para cada cliente
Dica: utilize console.dir( **_OBJECT_** , { depth: null }) para ver o resultado inteiro no console (sem abreviações como [Object] )

Resultado esperado:

```
[
  {
    name: 'first client',
    orderValue: 2345.12,
    discounts: [
      { type: 'amountCondition', order: 1, values: [ 7.19, 5 ] },
      { type: 'paymentCondition', order: 2, values: [ 8.32 ] },
      { type: 'afterNegotiationCondition', order: 3, values: [ 4.5 ] }
    ]
  },
  {
    name: 'second client',
    orderValue: 3360.05,
    discounts: [
      { type: 'afterNegotiationCondition', order: 0, values: [] },
      { type: 'amountCondition', order: 1, values: [ 5 ] },
      { type: 'paymentCondition', order: 2, values: [ 3.5 ] }
    ]
  },
  {
    name: 'third client',
    orderValue: 4960.51,
    discounts: [
      { type: 'paymentCondition', order: 0, values: [] },
      { type: 'amountCondition', order: 1, values: [ 10.2, 5.6 ] },
      { type: 'afterNegotiationCondition', order: 2, values: [ 0 ] }
    ]
  }
]
```

### 2

Deverá ser retornado um array com o nome e a porcentagem resultante de cada pedido. Quando existir mais de um desconto, aplicar a regra de desconto sobre desconto.

Obs.: Descontos com ordem 0 _Não deverão_ ser considerados.
Resultado esperado:

PS: Algoritmo para calcular desconto percentual: percentualResultante = (100 - desc1) \* (100 - desc2) / 100

```
[
  {
    name: 'first client',
    orderValue: 2345.12,
    resultantDiscount: 77.19627670800001
  },
  {
    name: 'second client',
    orderValue: 3360.05,
    resultantDiscount: 91.675
  },
  {
    name: 'third client',
    orderValue: 4960.51,
    resultantDiscount: 84.77120000000001
  }
]
```

### 3

Deverá ser armazenado o total com desconto e retornado o nome do cliente que tem o maior valor de desconto (em reais).

Resultado esperado:

```
third client
```

### 4

Calcular qual é o desconto médio e quanto isso representa (em R\$) sobre o valor total de todos os pedidos.

Resultado esperado:

```
Averege discount => 14.452507763999995%
Represents R$ 1343.0314546926948 from total
```

### 5

Calcular quantas vezes cada condição de desconto foi utilizada.

Resultado esperado:

```
{
  paymentCondition: 2,
  amountCondition: 5,
  afterNegotiationCondition: 2
}
```

É isso ae galerinha, essa é a nossa quarta semana de desafios já. Se tiverem alguma dúvida, podem imprimir e colocar na nossa caixa de dúvidas ao lado do galão de água. **ABRAÇO!!**

by [Vinicius Axt](https://github.com/viniaxt)
