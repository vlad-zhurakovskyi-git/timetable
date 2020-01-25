import React from 'react';
import Pair from "../pair/Pair";
import NotesContainer from "./notes/NotesContainer";

export default function Day(props) {
    const {
        collection,
        readOnly,
        popupNotes,
        item,
        editMode,
        notesMode,
        day,
        dayIndex
    } = props;

    return(
        <div className={`day ${!readOnly ? 'active' : ''}`} key={dayIndex}>
            <div className="day__week">{item[day].dayOfTheWeek}</div>
            <div className="day__header">
                <div className="day__col">
                    Pair
                </div>
                <div className="day__col">
                    Room
                </div>
                <div className="day__col">
                    Times
                </div>
                <div className="day__col">
                    Subject
                </div>
            </div>

            <Pair
                collection={collection}
                readOnly={readOnly}
                item={item}
                day={day}
            />

            {popupNotes && <NotesContainer
                notesText={item[day].notes}
                day={day}
                week={item.id}
            />}

            <div className="day__footer">
                <button className="day__btn"
                        onClick={editMode}>
                    {readOnly ? 'Edit' : 'Save'}
                </button>

                <button className="day__btn day__btn_notes" onClick={notesMode}>
                    {popupNotes ? 'Save' : 'Notes'}
                </button>
            </div>
        </div>
    )
}
