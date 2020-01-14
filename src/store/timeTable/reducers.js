import { TABLE_COLLECTION, TABLE_CLASS_TIME, TABLE_CLASS_ROOM, TABLE_LESSON_TITLE } from "./actions";

const defaultState = {
    collection: [],
};

export const timeTableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TABLE_COLLECTION:
            return {
                ...state,
                collection: action.payload
            };
        case TABLE_CLASS_TIME:
            return {
                ...state,
                time: action.payload
            };
        case TABLE_CLASS_ROOM:
            return {
                ...state,
                room: action.payload
            };
        case TABLE_LESSON_TITLE:
            return {
                ...state,
                title: action.payload
            };
        default: return state;
    }
}
