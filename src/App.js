import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './store/reducers';
import ListContainer from "./components/list/ListContainer";
import './App.css';

const store = createStore(rootReducer);

class App extends Component{
    render() {
      return (
        <div className="App">
            <Provider store={store}>
                <ListContainer />
            </Provider>
        </div>
      );
    }
}

export default App;
