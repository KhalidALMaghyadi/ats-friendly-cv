import { Component , Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable , of } from 'rxjs';
@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  cvData$: Observable<any>;

  constructor(private store: Store<{ cv: any }>) {
    const storedData = localStorage.getItem('cvData');
    if (storedData) {
      this.cvData$ = of(JSON.parse(storedData)); 
    } 
    else {
      this.cvData$ = store.select(state => state.cv.cvData);
    }
  }
}    


