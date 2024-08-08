import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../models/book';
import { addBook, removeBook } from '../books/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>){
    this.books$ = store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string){
    this.store.dispatch(addBook({id, title, author}))
  }

  removeBook(bookId: string){
    this.store.dispatch(removeBook({bookId}))
  }

}
