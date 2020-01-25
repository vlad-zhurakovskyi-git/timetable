import React, {Component} from 'react';
import Day from "./Day";

export default class DayContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            readOnly: true,
            popupNotes: false
        };

        this.editMode = this.editMode.bind(this);
        this.notesMode = this.notesMode.bind(this);
    }

    editMode() {
        this.setState({
            readOnly: !this.state.readOnly
        })
    }

    notesMode() {
        this.setState({
            popupNotes: !this.state.popupNotes
        })
    }

    render() {
        const {collection, item, day, dayIndex} = this.props;
        const {readOnly, popupNotes} = this.state;

        return(
            <React.Fragment>
                {!item[day].length &&
                <Day collection={collection}
                     readOnly={readOnly}
                     popupNotes={popupNotes}
                     editMode={this.editMode}
                     notesMode={this.notesMode}
                     item={item}
                     day={day}
                     key={dayIndex}
                />
                }
            </React.Fragment>
        )
    }
}
