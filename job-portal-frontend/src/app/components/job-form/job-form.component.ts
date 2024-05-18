// Import required modules from Angular core and router packages
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Import the Job service and Job model
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-form', // Selector for the component
  templateUrl: './job-form.component.html', // Template URL for the component's HTML
  styleUrls: ['./job-form.component.css'] // Stylesheet URL for the component's CSS
})
export class JobFormComponent implements OnInit {
  job: Job = new Job(); // Property to hold the job data
  isEditMode = false; // Flag to determine if the form is in edit mode

  // Inject ActivatedRoute to access route parameters, Router to navigate, and JobService to fetch and update job data
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) { }

  // OnInit lifecycle hook to initialize component
  ngOnInit(): void {
    // Get the job ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // If there's an ID, set edit mode to true and fetch the job details
      this.isEditMode = true;
      this.jobService.getJob(id).subscribe(data => {
        this.job = data; // Assign the fetched data to the job property
      });
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.isEditMode) {
      // If in edit mode, update the existing job
      this.jobService.updateJob(this.job._id!, this.job).subscribe(() => {
        this.router.navigate(['/']); // Navigate back to the job list after updating
      });
    } else {
      // If not in edit mode, create a new job
      this.jobService.createJob(this.job).subscribe(() => {
        this.router.navigate(['/']); // Navigate back to the job list after creating
      });
    }
  }
}
