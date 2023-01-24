import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Todo } from 'src/app/Todo-Interface';
import { TodoService } from 'src/app/services/todo.service';
import { UiServicesService } from 'src/app/services/ui-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todos: Todo[] = [];
  text: string = '';
  day: string = '';
  showForm!: boolean;
  subscription!: Subscription;

  public todoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    public formBuilder: FormBuilder,
    private uiService: UiServicesService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showForm = value));

    this.todoForm = this.formBuilder.group({
      text: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  }

  onSubmit() {
    console.log(this.todoForm.value);

    const newTodo = this.todoForm.value;

    this.addTodo(newTodo);

    this.text = '';
    this.day = '';
    this.showForm = false;
  }
}
