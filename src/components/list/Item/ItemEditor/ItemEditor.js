import React from 'react';
import DayContainer from "./day/DayContainer";

export default function ItemEditor(props) {
    const {collection, item} = props;

    return(
        <section className="item">
            {Object.keys(item).map((day, dayIndex) => (
                <DayContainer
                    collection={collection}
                    item={item}
                    day={day}
                    dayIndex={dayIndex}
                    key={dayIndex}
                />
            ))}
        </section>
    )
}
