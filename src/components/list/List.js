import React, {Component} from 'react';
import ItemContainer from "./Item/ItemContainer";

export default class List extends Component {

    render() {
        const { collection } = this.props;

        return(
            <section className="todo-list">
                <ItemContainer collection={collection}/>
            </section>
        )
    }
}
