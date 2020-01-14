export const TABLE_COLLECTION = 'TABLE_COLLECTION';
export const TABLE_CLASS_TIME = 'TABLE_CLASS_TIME';
export const TABLE_CLASS_ROOM = 'TABLE_CLASS_ROOM';
export const TABLE_LESSON_TITLE = 'TABLE_LESSON_TITLE';

export const setCollection = collection => ({
    type: TABLE_COLLECTION,
    payload: collection
});

export const setClassTime = time => ({
    type: TABLE_CLASS_TIME,
    payload: time
});

export const setClassRoom = room => ({
    type: TABLE_CLASS_ROOM,
    payload: room
});

export const setLessonTitle = title => ({
    type: TABLE_LESSON_TITLE,
    payload: title
});
