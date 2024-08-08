import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook, addBookFailure, addBookSuccess } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(addBook, (state) => {return state}),
  on(addBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
  on(addBookFailure, (state, {error}) => {
    console.log(error);
    return state
  }),
  on(removeBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
)
