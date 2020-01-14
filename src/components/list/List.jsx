import React, {Component} from 'react';
import firebase from "firebase";

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            readOnly: true
        };

        this.editMode = this.editMode.bind(this);
    }

    editMode() {
        this.setState({
            readOnly: !this.state.readOnly
        })
    }

    editField(id, day, pair, field, event) {
        const keyUpdate = `${day}.${pair}.${field}`;
        firebase.firestore().collection("time-table").doc(id).update( {
            [keyUpdate]: event.target.value
        });
    }

    render() {
        const { collection } = this.props;
        const { readOnly } = this.state;

        return(
            <section className="todo-list">
                {collection.map(( item, itemIndex ) =>
                    <div className="week" key={itemIndex}>
                        <button onClick={this.editMode}>Редактировать</button>
                        {Object.keys(item).map((day, dayIndex) => (
                            !item[day].length && <div className="day" key={dayIndex}>
                                <div>{item[day].dayOfTheWeek}</div>

                                {Object.keys(item[day]).map((pair, pairIndex) => (
                                    !item[day][pair].length && <div className="pair" key={pairIndex}>
                                        {
                                            Object.keys(item[day][pair]).map((field, fieldIndex) => (
                                                <input onChange={this.editField.bind(this, item.id, day, pair, field)}
                                                       value={item[day][pair][field]}
                                                       readOnly={readOnly}
                                                       key={fieldIndex}
                                                />
                                            ))
                                        }
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </section>
        )
    }
}
