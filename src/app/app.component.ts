import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateUrl } from './validators/url.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  websiteUrl = new FormControl('', [Validators.required, ValidateUrl]);
  websiteUrl1 = new FormControl('https://www.google.com', [Validators.required, ValidateUrl]);
  websiteUrl2 = new FormControl('https://youtube.com', [Validators.required, ValidateUrl]);
  websiteUrl3 = new FormControl('http://www.abcde.com', [Validators.required, ValidateUrl]);
  websiteUrl4 = new FormControl('http://www.qwerty.lk', [Validators.required, ValidateUrl]);
  constructor() {}

  ngOnInit() {
  }
}
