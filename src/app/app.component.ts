import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public info: any;

  
  constructor(private translate: TranslateService) {
   

  }

  ngOnInit() {
 
      

    }


}

