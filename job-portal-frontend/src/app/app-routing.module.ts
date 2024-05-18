// Import required modules from Angular core and router packages
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components to be routed
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobFormComponent } from './components/job-form/job-form.component';

// Define application routes
const routes: Routes = [
  { path: '', component: JobListComponent }, // Default route displaying the job list
  { path: 'job/:id', component: JobDetailComponent }, // Route for viewing details of a specific job
  { path: 'create', component: JobFormComponent }, // Route for creating a new job
  { path: 'edit/:id', component: JobFormComponent } // Route for editing an existing job
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root level
  exports: [RouterModule] // Export the RouterModule to make it available throughout the app
})
export class AppRoutingModule { }
