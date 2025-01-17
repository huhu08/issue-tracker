import { Injectable } from '@angular/core';
import {Issue} from './issue';
// import {issues} from '../assets/mock-issues';
@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] =[{
    issueNo: 1,
    title:  'Add email validation in registration form',
    description: 'Validate the email entered in the user registration form',
    priority: 'high',
    type: 'Feature'
  },
  {
    issueNo: 2,
    title:  'Display the adress details of a customer',
    description: 'Add a column to display the details of the customer address in the customer list',
    priority: 'low',
    type: 'Feature'
  },
  {
    issueNo: 3,
    title:  'Export to CSV is not working',
    description: 'The export process of a report into CSV format throws an error',
    priority: 'high',
    type: 'Bug'
  },
  {
    issueNo: 4,
    title:  'Locale settings per user',
    description: 'Add settings configure the locale of the current user',
    priority: 'low',
    type: 'Feature'
  },
  {
    issueNo: 5,
    title:  'Add new customer tutorial',
    description: 'Create a tutorial on how to add a new customer into the application',
    priority: 'high',
    type: 'Documentation'
  },];

  constructor() { }
  getPendingIssues(): Issue[] {
    
    return this.issues.filter(issue => !issue.completed);
    }

  createIssue(issue:Issue){
    issue.issueNo=this.issues.length+1;
    this.issues.push(issue);
  }
  completeIssue(issue: Issue) { const selectedIssue: Issue = {
    ...issue,
    completed: new Date()
    };
    const index = this.issues.findIndex(i => i === issue); this.issues[index] = selectedIssue;
    } 

   updateIssue(issueNo: number, issue: Issue) {
    const existingIssue = this.issues.find(i => i.issueNo === issueNo);
    if(existingIssue) {
      const index = this.issues.indexOf(existingIssue);
      this.issues[index] = {
        ...existingIssue,
        ...issue
      };
    }
  }

}
