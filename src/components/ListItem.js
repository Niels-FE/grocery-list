import React from "react";

function ListItem({ item, clickEvent }) {
    if (item.count) {
        return (
            <li
                className="bg-blue-100 p-3 my-3"
                key={item.id}
            >
                {item.title} {item.count}
            </li>
        )
    } else {
        return (
            <li
                className="bg-red-100 p-3 my-3"
                onClick={() => { clickEvent(item) }}
                key={item.id}
            >
                {item.title}
            </li>
        )
    }
}

export default ListItem;