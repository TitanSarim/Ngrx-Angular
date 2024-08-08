import {createAction, props} from '@ngrx/store';
import { Book } from '../models/book';

export const addBook = createAction('[Book] Add Book', props<Book>());
export const addBookSuccess = createAction('[Book] Add Book Success', props<Book>())
export const addBookFailure = createAction('[Book] Add Book Failed', props<{error: any}>())
export const removeBook = createAction('[Book] Remove Book', props<{bookId: string}>());
