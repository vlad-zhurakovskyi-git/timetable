import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Item from "./Item/Item";

export default class List extends Component {

    tabPanel(collection) {
        return(
            <React.Fragment>
                <TabPanel>
                    {collection.map(( item, itemIndex ) =>
                        <div key={itemIndex}>
                            {item.id === 'week1' && <Item
                                collection={collection}
                                item={item}
                                itemIndex={itemIndex}
                            />}
                        </div>
                    )}
                </TabPanel>

                <TabPanel>
                    {collection.map(( item, itemIndex ) =>
                        <div key={itemIndex}>
                            {item.id === 'week2' && <Item
                                collection={collection}
                                item={item}
                                itemIndex={itemIndex}
                            />}
                        </div>
                    )}
                </TabPanel>
            </React.Fragment>
        )
    }

    render() {
        const { collection, editMode, readOnly } = this.props;

        return(
            <section className="list">
                <Tabs>
                    <TabList>
                        <Tab>Первая неделя</Tab>
                        <Tab>Вторая неделя</Tab>
                    </TabList>

                    {this.tabPanel(collection, editMode, readOnly)}
                </Tabs>
            </section>
        )
    }
}
