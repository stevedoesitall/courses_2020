const product = {
    label: 'Notebook',
    price: 10,
    stock: 200,
    rating: 2
}

const transaction = (type, { label, price = 0 } = {}) => {
    console.log(type, label, price)
}

transaction('order')