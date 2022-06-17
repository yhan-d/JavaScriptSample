products = [{id: 1, name: 'Masa', price: 450}
            ,{id: 2, name: 'Sandalye', price: 50}
            ,{id: 3, name: 'Koltuk', price: 750}
            ]

addProduct = products => {
    newProduct = {id: 5, name: 'Kanape', price: 975},
    products = [...products, newProduct]
    console.log(products)
}
addProduct(products)