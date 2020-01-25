import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Item from "./Item/Item";

function tabPanel(collection) {
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

export default function List(props) {

    const { collection, editMode } = props;

    return(
        <section className="list">
            <Tabs>
                <TabList>
                    <Tab>First week</Tab>
                    <Tab>Second week</Tab>
                </TabList>

                {tabPanel(collection, editMode)}
            </Tabs>
        </section>
    )

}
