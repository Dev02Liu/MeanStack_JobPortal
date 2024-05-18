export class Job {
    _id?: string;
    title: string;
    company: string;
    description: string;
    location: string;
    salary: number;
    datePosted: Date;
  
    constructor() {
      this.title = '';
      this.company = '';
      this.description = '';
      this.location = '';
      this.salary = 0;
      this.datePosted = new Date();
    }
  }
  