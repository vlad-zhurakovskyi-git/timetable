import React, {Component} from 'react';
import List from "./List";
import firebase from "firebase";
import { setCollection, setClassTime, setClassRoom, setLessonTitle } from '../../store/timeTable/actions';
import { connect } from "react-redux";

class ListContainer extends Component{
    componentDidMount() {
        const {setCollection} = this.props;

        firebase
            .firestore()
            .collection("time-table")
            .onSnapshot(( snapshot ) => {
            const week = snapshot.docs.map(( doc ) => ({
                id: doc.id,
                ...doc.data()
            }));

            setCollection(week);
        });
    }

    render() {
        const { collection } = this.props;

        return(
            <List
                collection={collection}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        collection: state.timeTable.collection,
    }
};

const mapDispatchToProps = {
    setCollection,
    setClassTime,
    setClassRoom,
    setLessonTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
