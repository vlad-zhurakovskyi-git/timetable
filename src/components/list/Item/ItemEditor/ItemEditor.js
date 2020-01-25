import React from 'react';
import DayContainer from "./day/DayContainer";

export default function ItemEditor(props) {
    const {collection, readOnly, item, editMode} = props;

    return(
        <section className="item">
            {Object.keys(item).map((day, dayIndex) => (
                <div>
                    <DayContainer
                        collection={collection}
                        readOnly={readOnly}
                        item={item}
                        day={day}
                        dayIndex={dayIndex}
                        key={dayIndex}
                        editMode={editMode}
                    />
                </div>
            ))}
        </section>
    )
}
