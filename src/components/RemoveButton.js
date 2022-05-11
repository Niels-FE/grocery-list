import React from "react";

function RemoveButton({ clickEvent }) {
    return (
        <button
            className="mt-8 w-34 rounded bg-gray-100 py-2 px-4"
            type="button"
            onClick={() => { clickEvent() }}
        >
            Clear shoppingcart
        </button>
    )
}

export default RemoveButton