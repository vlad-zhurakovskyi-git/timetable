import React, {Component} from 'react';
import ItemContainer from "./Item/ItemContainer";

export default class List extends Component {

    render() {
        const { collection } = this.props;

        return(
            <section className="todo-list">
                <div className="item">
                    <ItemContainer collection={collection}/>
                </div>
            </section>
        )
    }
}
