import React from 'react';
import Field from "../field/Field";

export default function Pair(props) {
    const {collection, readOnly, item, day} = props;

    return(
        <React.Fragment>
            {Object.keys(item[day]).map((pair, pairIndex) => (
                !item[day][pair].length && <div className="pair" key={pairIndex}>

                    <Field
                        collection={collection}
                        readOnly={readOnly}
                        item={item}
                        day={day}
                        pair={pair}
                    />
                </div>
            ))}
        </React.Fragment>
    )
}
