import React from 'react'
import Item from './Item'

export default function List({ listShoe, handleRemoveFromList, handleAddToCart }) {
    console.log("🚀 [ List [ props:", listShoe)
    let renderList = () => {
        return listShoe.map((eachShoe) => {
            return (
                <Item
                    key={eachShoe.id}
                    handleRemoveFromList={handleRemoveFromList}
                    handleAddToCart={handleAddToCart}
                    eachShoe={eachShoe}
                />)

        })
    }
    return (
        <div className="row col-5">{renderList()}</div>
        // <div><a href="#a">a</a></div>
    )
}
