import React from 'react';
import List from './List';
import RemoveButton from './RemoveButton';

const ShoppingCartList = ({ items, removeFromShoppingCart }) => {

    return (
        <div className="grid justify-center">
            <h2 className="text-xl text-center font-bold">Shopping cart</h2>
            <RemoveButton
                clickEvent={() => { removeFromShoppingCart() }}
            />
            <List
                items={items}
            />
        </div>
    )

}

export default ShoppingCartList;