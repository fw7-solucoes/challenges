# Challenge 3 - FW7

**Fala meus ousados** 👊, segue o terceiro FW7 _challenge_, nessa semana vamos novamente focar nos métodos do _prototype_ do _Array_, conforme a gente for ficando fera vamos ir abordando outros assuntos.

bora DALEE 🤟

## Informações úteis

- Lembrando que a partir de agora todos os desafios serão realizados em uma única **feat** por **dev**, então só é necessário criar uma _branch_.
  Ex: **feat/roberto**

- Deverá ser usado as bases de dados `db/index.js` para solucionar os desafios, **lembrando que nesses desafios serão necessários importar diferentes bases**

## Challenges

### 1

Deverá ser retornado um _Object_ com as cores que estão disponíveis e as que não estão disponíveis.

Obs: Para isso será necessário importar o _Array_ de **colors** no `db/index.js`.

Resultado esperado:

```
{
  availables: [
    { name: 'Red', isAvailable: true },
    { name: 'Green', isAvailable: true },
    { name: 'Pink', isAvailable: true }
  ],
  unavailables: [
    { name: 'Yellow', isAvailable: false },
    { name: 'Black', isAvailable: false }
  ]
}
```

### 2

Deverá ser retornado um _Array_ com as palavras que são **Palíndromos**. Palíndromos são palavras que podem ser lidas em ambos os lados, exemplo: Ovo

Obs: Para isso será necessário importar o _Array_ de **words** no `db/index.js`.

Resultado esperado:

```
[ 'Ana', 'Ovo', 'Osso', 'Natan' ]
```

### 3

Deverá ser retornado um _Array_ com o nome de cada fruta sem haver frutas repetidas.

Obs: Para isso será necessário importar o _Array_ de **fruits** no `db/index.js`.

Resultado esperado:

```
[ 'Apple', 'Orange', 'Banana', 'Kiwi' ]
```

### 4

Deverá ser inserido o animal **Panda** na posição **1** no _Array_ de animais e deve retornar esse _Array_ com o novo animal inserido. **Importante, nesse exercício deve ser aplicado o conceito de imutabilidade!**

Obs: Para isso será necessário importar o _Array_ de **animals** no `db/index.js`.

Resultado esperado:

```
[ 'Dog', 'Panda', 'Lion', 'Cat', 'Turtle' ]
```

### 5

Deverá ser retornado um _Array_ com os tamanhos agrupados e o total de estoque de um produto.

Obs: Para isso será necessário importar o _Object_ de **product** no `db/index.js`.

Resultado esperado:

```
[
  { size: 'P', stock: 15 },
  { size: 'M', stock: 15 },
  { size: 'G', stock: 39 },
  { size: 'GG', stock: 33 }
]
```

Então galérisss do mau, essa é a semana 3 de desafios, qualquer dúvida é só não me chamar, FLW vou malhar

by [Roberto Umbelino](https://github.com/robertoumbelino)
