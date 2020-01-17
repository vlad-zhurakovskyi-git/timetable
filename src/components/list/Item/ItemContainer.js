import React, {Component} from 'react';
import Item from "./Item";


export default class ItemContainer extends Component {
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
        const { collection } = this.props;
        const { readOnly } = this.state;

        return(
            <React.Fragment>
                {collection.map(( item, itemIndex ) =>
                    <Item
                        collection={collection}
                        item={item}
                        itemIndex={itemIndex}
                        editMode={this.editMode}
                        readOnly={readOnly}
                    />
                )}
            </React.Fragment>
        )
    }
}
