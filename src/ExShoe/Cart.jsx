import { render } from '@testing-library/react'
import React from 'react'
import { Button, message, Popconfirm } from 'antd';

export default function Cart({ cartData, handleRemoveFromCart, handleIncreaseDecrease }) {
    let renderTbody = () => {
        return cartData.map(cartItem => {
            return (
                <tr key={cartItem.id}>
                    <td>{cartItem.name}</td>
                    <td><img src={cartItem.image} alt="" width={100} /></td>
                    <td>{cartItem.price}</td>
                    <td>
                        {cartItem.total == 1 ? (
                            <Popconfirm
                                title="Delete the task"
                                description="Are you sure to delete this task?"
                                onConfirm={() => { handleRemoveFromCart(cartItem.id) }}
                                onCancel={() => { }}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className='btn btn-dark'>-</Button>
                            </Popconfirm>) : (
                            <button className='btn btn-dark' onClick={() => { handleIncreaseDecrease(cartItem.id, -1) }}>-</button>)}

                        <span className='mx-3'>{cartItem.total}</span>
                        <button className='btn btn-dark' onClick={() => { handleIncreaseDecrease(cartItem.id, +1) }}>+</button>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={() => { handleRemoveFromCart(cartItem.id) }}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className='col-7'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTbody()}
                </tbody>
            </table>
        </div>
    )
}
