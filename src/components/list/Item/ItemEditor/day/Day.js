import React from 'react';
import Pair from "../pair/Pair";

export default function Day(props) {
    const {collection, readOnly, item, editMode, day, dayIndex} = props;

    return(
        <div className="day" key={dayIndex}>
            <div className="day__week">{item[day].dayOfTheWeek}</div>

            <Pair
                collection={collection}
                readOnly={readOnly}
                item={item}
                day={day}
            />

            <button onClick={editMode}>{readOnly ? 'Редактировать' : 'Сохранить'}</button>
        </div>
    )
}
