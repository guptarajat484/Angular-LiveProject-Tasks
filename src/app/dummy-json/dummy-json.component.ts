import { Component, OnInit } from '@angular/core';
import demodata from '../../assets/dummy_json/dummy_json.json';
import {AppService} from '../app.servie'
@Component({
  selector: 'app-dummy-json',
  templateUrl: './dummy-json.component.html',
  styleUrls: ['./dummy-json.component.scss']
})
export class DummyJsonComponent implements OnInit {
 
  constructor(service:AppService) { }

  ngOnInit(): void {
  }
  Players: any = demodata;
}
