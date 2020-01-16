import React from 'react';
import Pair from "../pair/Pair";

export default function Day(props) {
    const {collection, readOnly, item, day, dayIndex} = props;

    return(
        <React.Fragment>
            {!item[day].length &&
                <div className="day" key={dayIndex}>
                    <div>{item[day].dayOfTheWeek}</div>

                    <Pair
                        collection={collection}
                        readOnly={readOnly}
                        item={item}
                        day={day}
                    />
                </div>
            }
        </React.Fragment>
    )
}
