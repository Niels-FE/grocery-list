import React from 'react';
import GroceryForm from './GroceryForm';
import List from './List';

const GroceryList = ({ items, addToShoppingCart, addToGroceryList, handleKeyPress }) => {

    return (
        <div>
            <GroceryForm
                clickEvent={() => { addToGroceryList() }}
                listenEvent={(e) => { handleKeyPress(e) }}
            />
            <List
                items={items}
                clickEvent={addToShoppingCart}
            />
        </div>
    )

}

export default GroceryList;