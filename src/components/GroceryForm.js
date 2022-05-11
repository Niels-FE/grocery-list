import React from 'react';

function GroceryForm({ clickEvent, listenEvent }) {
    return (
        <section className="grid justify-center">
            <label className="font-bold grid">
                <span className="text-xl text-center">Shopping list</span>
                <input
                    onKeyPress={(e) => { listenEvent(e) }}
                    className="w-34 text-sm border-2 rounded mt-4 p-3"
                    type="text"
                    id="groceryList"
                    name="groceryList"
                    placeholder="Add a grocery item"
                ></input></label>
            <button
                className="mt-8 w-34 rounded bg-gray-100 p-3"
                type="button"
                onClick={() => { clickEvent() }}
            >Add
            </button>

        </section>
    )
}
export default GroceryForm;