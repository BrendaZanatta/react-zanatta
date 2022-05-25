export const listadoProdutos=[
    {
        id:1,
        title:'Torta Matilda',
        price: 1200,
        price: 1200,
        stock: 5,
        category: 'productos',
        imageUrl: '/img1.jpg',
    },
    {
        id:2,
        title: 'Cheescake',
        price: 1300,
        price: 1300,
        stock: 5,
        category: 'productos',
        imageUrl: '/img2.jpg',
    },
    {
        id:3,
        title: 'Torta Oreo',
        price: 1500,
        price: 1500,
        stock: 5,
        category: 'productos',
        imageUrl: '/img3.jpg',
    },
    {
        id:4,
        title: 'Torta Brownie',
        price: 1800,
        price: 1800,
        stock: 5,
        category: 'productos',
        imageUrl: '/img4.jpg',
    },
    {
        id:5,
        title: 'Torta Rogel',
        price: 1900,
        price: 1900,
        stock: 5,
        category: 'productos',
        imageUrl: '/img5.jpg',
    },
    {
        id:6,
        title: 'Lemon Pie',
        price: 1550,
        price: 1550,
        stock: 5,
        category: 'productos',
        imageUrl: '/img6.jpg',
    },   
    {
        id:7,
        title: 'Letter Cake',
        price: 1600,
        price: 1600,
        stock: 5,
        category: 'productos',
        imageUrl: '/img7.jpg',
    },
    {
        id:8,
        title: 'Drip Cake',
        price: 2000,
        price: 2000,
        stock: 5,
        category: 'productos',
        imageUrl: '/img8.jpg',
    }
]

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? listadoProdutos.filter(prod => prod.category === categoryId) : listadoProdutos)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(listadoProdutos.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}