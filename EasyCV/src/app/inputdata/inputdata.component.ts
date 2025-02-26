import { Component } from '@angular/core';

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
 
  saveData() {
    console.log('CV Data Saved:', this.cvData);
   
  }
}
