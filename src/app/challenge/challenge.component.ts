import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
username = new FormControl('');
email = new FormControl('');
password = new FormControl('');
adress = new FormControl('');
isSubmit = false;
user(){
this.isSubmit= true;
}
}