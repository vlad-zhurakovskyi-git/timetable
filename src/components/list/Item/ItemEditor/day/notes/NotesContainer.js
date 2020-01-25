import React, {Component} from 'react';
import Notes from "./Notes";
import firebase from "firebase";

export default class NotesContainer extends Component{
    editField(event, week, day) {
        const keyUpdate = `${day}.notes`;
        console.log(keyUpdate)

        firebase.firestore().collection("time-table").doc(week).update( {
            [keyUpdate]: event.target.value
        });
    }
    render() {
        const {day, week, notesText} = this.props;

        console.log(notesText);

        return(
            <Notes
                editField={this.editField.bind(this, week, day)}
                notesText={notesText}
            />
        )
    }
}