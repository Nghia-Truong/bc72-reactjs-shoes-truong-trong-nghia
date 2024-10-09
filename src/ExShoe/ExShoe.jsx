import React, { useState } from 'react'
import { shoeArr } from './dataShoe'
import List from './List';

export default function ExShoe() {
    console.log(shoeArr)
    const [listShoe, setListShoe] = useState(shoeArr);
    return (
        <div className='row'>
            <List dataShoe={listShoe} />
        </div>
    )
}
