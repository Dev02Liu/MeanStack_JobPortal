// Import required modules from Angular core
import { Component, OnInit } from '@angular/core';
// Import the Job service and Job model
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list', // Selector for the component
  templateUrl: './job-list.component.html', // Template URL for the component's HTML
  styleUrls: ['./job-list.component.css'] // Stylesheet URL for the component's CSS
})
export class JobListComponent implements OnInit {
  jobs: Job[] = []; // Property to hold the list of jobs

  // Inject JobService to fetch job data
  constructor(private jobService: JobService) { }

  // OnInit lifecycle hook to initialize component
  ngOnInit(): void {
    // Fetch the list of jobs using the JobService
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data; // Assign the fetched data to the jobs property
    });
  }
}
