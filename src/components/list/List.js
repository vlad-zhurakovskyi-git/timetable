import React, {Component} from 'react';
import ItemContainer from "./Item/ItemContainer";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

export default class List extends Component {

    render() {
        const { collection } = this.props;

        return(
            <section className="list">
                <div className="list__wrapper">
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            123
                        </TabPanel>
                        <TabPanel>
                            321
                        </TabPanel>
                    </Tabs>

                    <ItemContainer collection={collection}/>
                </div>
            </section>
        )
    }
}
