import React, { useState } from 'react'
import { shoeArr } from './dataShoe'
import List from './List';
import Cart from './Cart';

export default function ExShoe() {
    const [listShoe, setListShoe] = useState(shoeArr);
    const [cart, setCart] = useState([])
    let handleRemoveFromList = (id) => {
        console.log("🚀 [ handleRemoveFromList [ id:", id)
        let newListShoe = listShoe.filter((shoe) => {
            return shoe.id !== id;
        })
        setListShoe(newListShoe)
    }

    let handleAddToCart = (eachShoe) => {
        let cloneCart = [...cart]

        let index = cloneCart.findIndex((item) => (item.id == eachShoe.id))
        if (index == -1) {
            let data = { ...eachShoe, total: 1 }
            cloneCart.push(data)
        } else {
            cloneCart[index].total++
        }
        setCart(cloneCart)
    }

    let handleIncreaseDecrease = (id, option) => {
        let cloneCart = [...cart]
        let index = cloneCart.findIndex((item) => (item.id == id))
        cloneCart[index].total = cloneCart[index].total + option
        // if (cloneCart[index].total <= 0) {
        //     cloneCart.splice(index, 1)
        // }
        setCart(cloneCart)

    }

    let handleRemoveFromCart = (id) => {
        let newCartList = cart.filter((shoe) => {
            return shoe.id !== id;
        })
        setCart(newCartList)
    }

    return (
        <div className='row align-items-start'>
            <List listShoe={listShoe} handleRemoveFromList={handleRemoveFromList} handleAddToCart={handleAddToCart} />
            <Cart cartData={cart}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleIncreaseDecrease={handleIncreaseDecrease} />
        </div>
    )
}