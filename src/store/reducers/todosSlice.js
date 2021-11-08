import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [
            {
                id: 1,
                title: 'Viec 1',
                completed: false
            },
            {
                id: 2,
                title: 'Viec 2',
                completed: false
            },
            {
                id: 3,
                title: 'Viec 3',
                completed: false
            }
        ]
    },
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.allTodos.unshift(action.payload)
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            }
        }
    }
})
//Reducer
const todosReducer = todosSlice.reducer
export default todosReducer
export const todosSelector = state => state.todosReducer.allTodos
export const {addTodo} = todosSlice.actions