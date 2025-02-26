import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { cvReducer } from './reducers/cv.reducer';
@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreModule.forRoot({ cv: cvReducer })    
    

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
