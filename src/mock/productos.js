export const products = [
    {
        id: 1,
        title: 'Reach',
        price: 2000,
        stock: 3,
        category: 'kites',
        img: 'https://res.cloudinary.com/ddkcsyjhx/image/upload/v1667171245/fotos%20react/reach-verde-1_ytabgn.png',
    },
    {
        id: 2,
        title: 'Orbit',
        price: 2200,
        stock: 4,
        category: 'kites',
        img: 'https://res.cloudinary.com/ddkcsyjhx/image/upload/v1667171061/fotos%20react/Kite_Orbit_2022_Rojo_5_zlr1e4.png',
    },
    {
        id: 3,
        title: 'Carve',
        price: 2150,
        stock: 17,
        category: 'kites',
        img: 'https://res.cloudinary.com/ddkcsyjhx/image/upload/v1667171219/fotos%20react/Kite_Carve_2022_North_Santa_Tabla_vueq2r.png',
    },
    {
        id: 4,
        title: 'Astra',
        price: 900,
        stock: 10,
        category: 'tablas',
        img: 'https://res.cloudinary.com/ddkcsyjhx/image/upload/v1667171230/fotos%20react/3_qxjybk.jpg',
    },
    {
        id: 5,
        title: 'Focus',
        price: 1100,
        stock: 5,
        category: 'tablas',
        img: 'https://res.cloudinary.com/ddkcsyjhx/image/upload/v1667171208/fotos%20react/1_tmgu6o.png',
    },
    {
        id: 6,
        title: 'Prime',
        price: 700,
        stock: 7,
        category: 'tablas',
        img: 'https://res.cloudinary.com/ddkcsyjhx/image/upload/v1667171212/fotos%20react/2_r3ol9w.png',
    },
];

export const getProducts = (categoryName) => {
    return new Promise((res) => {
     const prodFiltrados =  products.filter((prod) => prod.category === categoryName) 
     const ref = categoryName ? prodFiltrados :products;
     setTimeout(() => {
           res(ref);
       }, 500);
   });
 };