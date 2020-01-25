import React from 'react';
import Day from "./Day";

export default function DayContainer(props) {
    const {collection, readOnly, item, editMode, day, dayIndex} = props;

    return(
        <React.Fragment>
            {!item[day].length &&
                <Day collection={collection}
                   readOnly={readOnly}
                   editMode={editMode}
                   item={item}
                   day={day}
                   key={dayIndex}
                />
            }
        </React.Fragment>
    )
}
