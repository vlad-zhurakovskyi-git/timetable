import React from 'react';
import Input from "../../../../input/Input";

export default function Field(props) {
    const {collection, readOnly, item, week, day, pair} = props;

    return(
        <React.Fragment>
            {Object.keys(item[day][pair]).map((field, fieldIndex) => (
                <div key={fieldIndex} className="day__col">

                    <Input
                        collection={collection}
                        week={week}
                        day={day}
                        pair={pair}
                        field={field}
                        value={item[day][pair][field]}
                        readOnly={readOnly}
                    />
                </div>
            ))}
        </React.Fragment>
    )
}
