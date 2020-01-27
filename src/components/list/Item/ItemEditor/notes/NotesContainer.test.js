// import  {
//     updateField
// } from './NotesContainer';
//
// const { mockFirebase } = require('firestore-jest-mock');
// const { mockCollection, mockUpdate } = require('firestore-jest-mock/mocks/firestore');
//
// describe('we can query', () => {
//     mockFirebase({
//         database: {
//             week: {
//                 day: {
//                     dayOfTheWeek: 'Monday',
//                     notes: 'test',
//                     pair: {
//                         classNumber: '1',
//                         classRoom: '105-A',
//                         classTime: '8:00',
//                         lessonTitle: 'Русский'
//                     }
//                 }
//             }
//         },
//     });
//
//     test('query with state', async () => {
//         const week = 'week1';
//         const day = 'day';
//         const event = {
//             target: {
//                 value: 'test'
//             }
//         };
//
//         await updateField(week, day, event);
//
//         // Assert that we call the correct firestore methods
//         expect(mockUpdate).toHaveBeenCalledWith('hello');
//     });
// });
//
//
