import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/Todo-Interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  todos: Todo[] = [];
  completed: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getTodos().subscribe((res) => this.todos.push(...res));
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
    console.log(todo.completed);

    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo(todo: Todo) {
    this.todoService
      .deleteTodo(todo)
      .subscribe(
        () => (this.todos = this.todos.filter((item) => item.id !== todo.id))
      );
  }
  // addTodo(todo: Todo) {
  //   this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  // }
}
