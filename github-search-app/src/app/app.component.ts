import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/services/AppService';
import PageBase from '@shared/PageBase';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends PageBase implements OnInit {
  title = 'github-search-app';

  constructor(private appService: AppService) {
    super();

    this.subscribtions.push(appService.execChangeLibrary.subscribe((library) => {
      this.updateBodyClassForLibrary(library);
    }));
  }

  ngOnInit(): void {
    this.updateBodyClassForLibrary(this.appService.currentLibrary);
  }

  updateBodyClassForLibrary(library: string) {
    document.body.classList.remove('material');
    document.body.classList.remove('bootstrap');
    document.body.classList.add(library);
  }
}
