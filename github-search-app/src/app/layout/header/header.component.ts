import { Component, OnInit } from '@angular/core';
import { AppService, library } from '@app/services/AppService';
import { Subscription } from 'rxjs';
import PageBase from '@shared/PageBase';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends PageBase implements OnInit {
  currentLibrary: library;
  currentLibraryFormControl = new FormControl(1);

  constructor(private appService: AppService) {
    super();

    this.subscribtions.push(appService.execChangeLibrary.subscribe((library) => {
      this.currentLibrary = library;
      this.currentLibraryFormControl.setValue(library);
    }));
  }

  ngOnInit(): void {
    this.currentLibrary = this.appService.currentLibrary;
    this.currentLibraryFormControl.setValue(this.appService.currentLibrary);
  }

  handleLibraryChange(event) {
    const newValue = event.value || event.target.value;
    this.appService.libraryChange(newValue);
  }
}
