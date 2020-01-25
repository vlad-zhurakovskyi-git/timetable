import React from 'react';
import ItemEditor from "./ItemEditor/ItemEditor";

export default function Item(props) {
    const {collection, item, itemIndex} = props;

    return(
        <div className={`week ${item.id}`} key={itemIndex}>
            <ItemEditor
                collection={collection}
                item={item}
            />
        </div>
    )
}
