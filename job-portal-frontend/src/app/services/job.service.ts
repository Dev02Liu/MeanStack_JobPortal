// Import required modules from Angular core and HTTP client packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job'; // Import the Job model

@Injectable({
  providedIn: 'root' // This service is provided at the root level, making it a singleton
})
export class JobService {
  private apiUrl = 'http://localhost:3000/api/jobs'; // Base URL for the job API

  constructor(private http: HttpClient) { } // Inject the HttpClient for making HTTP requests

  // Fetch all jobs from the API
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  // Fetch a specific job by its ID
  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  // Create a new job and post it to the API
  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  // Update an existing job by its ID
  updateJob(id: string, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/${id}`, job);
  }

  // Delete a job by its ID
  deleteJob(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
