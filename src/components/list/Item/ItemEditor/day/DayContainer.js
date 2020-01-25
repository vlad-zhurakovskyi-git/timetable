import React, {Component} from 'react';
import Day from "./Day";

export  default  class DayContainer extends Component{
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

    render() {
        const {collection, item, day, dayIndex} = this.props;
        const {readOnly} = this.state;

        return(
            <React.Fragment>
                {!item[day].length &&
                <Day collection={collection}
                     readOnly={readOnly}
                     editMode={this.editMode}
                     item={item}
                     day={day}
                     key={dayIndex}
                />
                }
            </React.Fragment>
        )
    }
}
