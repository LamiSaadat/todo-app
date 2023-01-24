import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiServicesService } from 'src/app/services/ui-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  subscription!: Subscription;
  showForm!: boolean;

  constructor(private uiService: UiServicesService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showForm = value));
  }

  ngOnInit() {}

  toggleForm() {
    this.uiService.toggleForm();
  }
}
