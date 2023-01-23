import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../Todo-Interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiURL = 'http://localhost:8080/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiURL);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiURL, todo);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiURL}/${todo.id}`;

    return this.http.delete<Todo>(url);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiURL}/${todo.id}`;

    return this.http.put<Todo>(url, todo);
  }
}
