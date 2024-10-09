import React from 'react'

export default function List(listShoe) {
    console.log("🚀 [ List [ props:", listShoe)
    let { dataShoe } = listShoe
    let renderList = () => {
        return dataShoe.map((eachShoe, index) => {
            return (
                <div className="col-3" key={index}>
                    <img src={eachShoe.image} className="w-100" />
                    <p>{eachShoe.name}</p>
                    <button className="btn btn-dark">Add To Cart</button>
                </div>)
        })
    }
    return (
        <div className="row col-5">{renderList()}</div>
    )
}
