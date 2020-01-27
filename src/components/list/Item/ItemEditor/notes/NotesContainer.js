import React, {Component} from 'react';
import Notes from "./Notes";
import firebase from "firebase";

export function updateField(week, day, event) {
    const keyUpdate = `${day}.notes`;

    firebase.firestore().collection("time-table").doc(week).update( {
        [keyUpdate]: event.target.value
    });
}

export default class NotesContainer extends Component{
    render() {
        const {day, week, notesText} = this.props;

        return(
            <Notes
                editField={updateField.bind(this, week, day)}
                notesText={notesText}
            />
        )
    }
}
