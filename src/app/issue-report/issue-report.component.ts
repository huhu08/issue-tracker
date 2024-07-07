import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import{IssuesService} from '../issues.service';
import { Issue } from '../issue';

interface IssueForm{
  title:FormControl<string>;
  description:FormControl<string>;
  priority:FormControl<string>;
  type:FormControl<string>;
}
@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent {
  constructor(private issueService:IssuesService){}
  @Output() formClose = new EventEmitter();
  
  addIssue() {
    if(this.issueForm && this.issueForm.invalid ){
      this.issueForm.markAllAsTouched();
      return;
    }
   this.issueService.createIssue(this.issueForm.getRawValue() as
    Issue); 
   this.formClose.emit();
  };

  
  issueForm = new FormGroup<IssueForm>({
    title:new FormControl('',{nonNullable:true,validators:
      Validators.required}),
    description:new FormControl('',{nonNullable:true,validators:
      Validators.required}),
    priority:new FormControl('',{nonNullable:true}),
    type:new FormControl('',{nonNullable:true})
  });
}
