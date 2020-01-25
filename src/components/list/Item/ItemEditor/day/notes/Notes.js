import React from 'react';

export default function Notes(props) {
    const {notesText, editField} = props;

    return(
        <div className="notes">
            <textarea
                className="notes__textarea"
                placeholder="Расскажи мне, как твои дела сегодня?"
                value={notesText}
                onChange={editField}
            />
        </div>
    )
}
