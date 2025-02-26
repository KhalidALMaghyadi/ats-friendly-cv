import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCVData } from '../state/cv.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inputdata',
  standalone: false,
  templateUrl: './inputdata.component.html',
  styleUrl: './inputdata.component.css'
})
export class InputdataComponent {
  cvData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    objective: '',
    education: '',
    skills: '',
    experience: '',
    courses: ''
  };
 
  constructor(private store: Store, private router: Router) {}

  saveData() {
    localStorage.setItem('cvData', JSON.stringify(this.cvData));
    this.store.dispatch(setCVData({ cvData: this.cvData }));
    this.router.navigate(['/detail']);
  }
}
