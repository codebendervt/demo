
const cleanProduct = (data) => {
    let price = data.price / 100;

    return(
    {
        name:data.name,
        desc:data.description,
        price: price,
        stock: data.quantity,
        image: data.image,
        variant:data.variant
    }
    )

}

const productData = (data, id) => {

    let result = {}

    data.products.map((i) => {
        if (i.id == id) {
            result = cleanProduct(i.data)
        }
    })

    return result

}

export default productData;