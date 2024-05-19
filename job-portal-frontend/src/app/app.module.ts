// Import necessary Angular modules and components
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobFormComponent } from './components/job-form/job-form.component';

@NgModule({
  declarations: [
    // Declare the components that belong to this module
    AppComponent,
    JobListComponent,
    JobDetailComponent,
    JobFormComponent
  ],
  imports: [
    // Import necessary modules
    HttpClientModule, // Module to enable HTTP communication
    BrowserModule, // Module required to run the app in a browser
    AppRoutingModule, // Module for application routing
    FormsModule // Module for Angular Forms
  ],
  providers: [],
  bootstrap: [AppComponent] // Root component to bootstrap the application
})
export class AppModule { }
