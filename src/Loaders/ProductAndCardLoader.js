import { getStoredCart } from "../utilities/fakedb"

export const productsAndCartLoader = async () => {
    // get products data
    const productsData = await fetch("products.json")
    const products = await productsData.json()
    // console.log(products)

    //---> get cart 
    const savedCart = getStoredCart(); // -----> data load korteche local storage theke---function ta ache fake db theke| 

    //----> console.log(savedCart);

    const initialCart = [];  //ei object e khuje paowa product glar object e quantity set kore push kora hobe

    for (const id in savedCart) {      //-----> (obeject er moddhe joto gula id ache seta deo)
        const addedProduct = products.find(product => product.id === id) //products theke prettek ta product ekta asho ar check koro amr id sathe same kina ... 
        if (addedProduct) {
            const quantity = savedCart[id];
            // console.log(id, quantity)
            addedProduct.quantity = quantity
            initialCart.push(addedProduct);
        }


    }

    return {
        products, initialCart
    };
};