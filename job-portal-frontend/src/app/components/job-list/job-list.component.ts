import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }

  navigateToJobDetail(id: string): void {
    this.router.navigate(['/job', id]);
  }

  navigateToEditJob(event: Event, id: string): void {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent element
    this.router.navigate(['/edit', id]);
  }

  deleteJob(event: Event, id: string): void {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent element
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(id).subscribe(() => {
        this.jobs = this.jobs.filter(job => job._id !== id);
      });
    }
  }
}
