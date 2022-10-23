import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                 state.contacts.push(action.payload);
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
        deleteContact(state, action) {
            const index = state.contacts.findIndex(({id}) => id === action.payload);
            state.contacts.splice(index, 1);
        },
    },
})

const persistConfig = {
    key: 'contacts',
    storage,
}
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions;
