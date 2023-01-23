import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiServicesService {
  private showForm: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleForm(): void {
    this.showForm = !this.showForm;
    console.log(this.showForm);
    this.subject.next(this.showForm);
  }

  onToggle(): Observable<any> {
    console.log(this.showForm);
    return this.subject.asObservable();
  }
}
