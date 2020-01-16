import React from 'react';
import Input from "../input/Input";

export default function Item(props) {
    const {collection, editMode, readOnly} = props;

    return(
        <section className="item">
            {collection.map(( item, itemIndex ) =>
                <div className={`week ${item.id}`} key={itemIndex}>
                    <button onClick={editMode}>Редактировать</button>

                    {Object.keys(item).map((day, dayIndex) => (
                        !item[day].length && <div className="day" key={dayIndex}>
                            <div>{item[day].dayOfTheWeek}</div>

                            {Object.keys(item[day]).map((pair, pairIndex) => (
                                !item[day][pair].length && <div className="pair" key={pairIndex}>

                                    {Object.keys(item[day][pair]).map((field, fieldIndex) => (
                                        <div key={fieldIndex}>
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
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}
