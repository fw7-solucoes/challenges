const colors = [
  { name: 'Red', isAvailable: true },
  { name: 'Green', isAvailable: true },
  { name: 'Yellow', isAvailable: false },
  { name: 'Pink', isAvailable: true },
  { name: 'Black', isAvailable: false }
]

const words = ['Ana', 'Computador', 'Ovo', 'Osso', 'Livro', 'Natan']

const fruits = ['Apple', 'Orange', 'Banana', 'Kiwi', 'Apple', 'Kiwi']

const animals = ['Dog', 'Lion', 'Cat', 'Turtle']

const product = {
  colors: [
    {
      name: 'Red',
      sizes: [
        { size: 'P', stock: 10 },
        { size: 'M', stock: 6 },
        { size: 'G', stock: 9 },
        { size: 'GG', stock: 13 }
      ]
    },
    {
      name: 'Green',
      sizes: [
        { size: 'P', stock: 5 },
        { size: 'M', stock: 9 },
        { size: 'G', stock: 30 },
        { size: 'GG', stock: 20 }
      ]
    }
  ]
}

module.exports = {
  colors,
  words,
  fruits,
  animals,
  product
}
