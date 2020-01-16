import React from 'react';
import ItemEditor from "./ItemEditor/ItemEditor";

export default function Item(props) {
    const {collection, editMode, readOnly} = props;

    return(
        <section className="item">
            {collection.map(( item, itemIndex ) =>
                <div className={`week ${item.id}`} key={itemIndex}>
                    <button onClick={editMode}>Редактировать</button>

                    <ItemEditor
                        collection={collection}
                        editMode={editMode}
                        item={item}
                        readOnly={readOnly}
                    />
                </div>
            )}
        </section>
    )
}
