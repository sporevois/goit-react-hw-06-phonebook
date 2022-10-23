import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
    key: 'contcts',
    storage,
}
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions;
