import { React, Component } from 'react';
import ListItem from "./ListItem";

const List = ({ items, clickEvent }) => {
    return (
        <ul>
            {items.map((item) => {
                return <ListItem
                    key={item.id}
                    item={item}
                    clickEvent={clickEvent}
                />
            })}
        </ul>
    )
}

export default List;