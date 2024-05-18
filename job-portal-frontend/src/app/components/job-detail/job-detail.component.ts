// Import required modules from Angular core and router packages
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Import the Job service and Job model
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-detail', // Selector for the component
  templateUrl: './job-detail.component.html', // Template URL for the component's HTML
  styleUrls: ['./job-detail.component.css'] // Stylesheet URL for the component's CSS
})
export class JobDetailComponent implements OnInit {
  job: Job | undefined; // Property to hold the job details

  // Inject ActivatedRoute to access route parameters and JobService to fetch job data
  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  // OnInit lifecycle hook to initialize component
  ngOnInit(): void {
    // Get the job ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id')!;
    // Fetch the job details using the JobService
    this.jobService.getJob(id).subscribe(data => {
      this.job = data; // Assign the fetched data to the job property
    });
  }
}
