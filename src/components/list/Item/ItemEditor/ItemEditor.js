import React from 'react';
import Day from "./day/Day";

export default function ItemEditor(props) {
    const {collection, readOnly, item} = props;

    return(
        <section className="item">
            {Object.keys(item).map((day, dayIndex) => (
                <Day
                    collection={collection}
                    readOnly={readOnly}
                    item={item}
                    day={day}
                    dayIndex={dayIndex}
                    key={dayIndex}
                />
            ))}
        </section>
    )
}
