import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {AppService} from '../app.servie'
@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {
  ngOnInit(){}
  


  switchLang;
  browserLang;
  title = 'my-apps';
  constructor(private translate: TranslateService,service:AppService) {
    translate.setDefaultLang('en');
  }
  
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  languageChanged(){
    this.translate.use(this.browserLang.match(/de|en/)? this.browserLang:'en')
  }
  
  selectedLanguage(lang){
   
   
  
  }

}
