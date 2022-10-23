import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(data) {
                return {
                    payload: {
                        ...data,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact: (state, action) => state.filter(contact => contact.id !== action.payload)
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;