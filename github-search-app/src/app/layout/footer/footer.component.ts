import { Component, OnInit } from '@angular/core';
import { library, AppService } from '@app/services/AppService';
import PageBase from '@shared/PageBase';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends PageBase implements OnInit {
  currentLibrary: library;

  constructor(private appService: AppService) {
    super();

    this.subscribtions.push(appService.execChangeLibrary.subscribe((library) => {
      this.currentLibrary = library;
    }));
  }

  ngOnInit(): void {
    this.currentLibrary = this.appService.currentLibrary;
  }

}
