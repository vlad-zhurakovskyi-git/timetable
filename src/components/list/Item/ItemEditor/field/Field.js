import React from 'react';
import Input from "../../../../input/Input";

export default function Field(props) {
    const {collection, readOnly, item, day, pair} = props;


    return(
        <React.Fragment>
            {Object.keys(item[day][pair]).map((field, fieldIndex) => (
                <div key={fieldIndex}>
                    {field}

                    <Input
                        collection={collection}
                        week={item.id}
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
