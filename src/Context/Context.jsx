import { createContext,useContext,useReducer } from "react";
import { faker } from '@faker-js/faker';
import { CartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(20)].map(() =>(
        {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price:faker.commerce.price(),
            image: faker.image.avatar(), 
            // inStock:faker.random.arrayElements([0,3,5,6,7]),
            fastDelivery:faker.datatype.boolean(),
            // ratings:faker.random.arrayElements([1,2,3,4,5])
        }
    ))

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    })

    return <Cart.Provider value={{ state,dispatch }} > {children} </Cart.Provider>
}

export default Context;

export const CartState=() =>{
    return useContext(Cart);
}