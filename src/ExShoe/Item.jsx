import React from 'react'

export default function Item({ eachShoe, handleRemoveFromList, handleAddToCart }) {
    return (
        <div className="col-3" key={eachShoe.id}>
            <img src={eachShoe.image} className="w-100" />
            <button className="btn btn-success" onClick={() => { handleAddToCart(eachShoe) }}>Add</button>
            <button className="btn btn-dark" onClick={() => { handleRemoveFromList(eachShoe.id) }}>Delete</button>
        </div>
    )
}
