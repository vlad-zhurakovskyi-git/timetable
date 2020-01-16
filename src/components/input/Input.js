import React from 'react';
import firebase from "firebase";

function editField(week, day, pair, field, event) {
    const keyUpdate = `${day}.${pair}.${field}`;

    firebase.firestore().collection("time-table").doc(week).update( {
        [keyUpdate]: event.target.value
    });
}

function checkField(field) {
    if(field === 'classNumber') {
        return 'class'
    }

    if(field === 'classRoom') {
        return  'room'
    }

    if(field === 'classTime') {
        return  'time'
    }

    if(field === 'lessonTitle') {
        return  'subject'
    }
}

export default function Input(props) {

    const {value, readOnly, key, week, day, pair, field} = props;

    return(
        <input onChange={editField.bind(null, week, day, pair, field)}
               value={value}
               readOnly={readOnly}
               key={key}
               className={checkField(field)}
        />
    )
}
