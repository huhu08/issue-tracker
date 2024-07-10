import { Component ,EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssueForm } from '../issue-form';
import { IssuesService } from '../issues.service';


@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent {
  @Input() issue: Issue | undefined;
  @Output() formClose = new EventEmitter();
  issueForm: FormGroup<IssueForm> | undefined;

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

ngOnInit(): void {
    if (this.issue) {
      this.issueForm = this.builder.group<IssueForm>({
        title: new FormControl(this.issue.title, { nonNullable: true, validators: Validators.required }),
        description: new FormControl(this.issue.description, { nonNullable: true }),
        priority: new FormControl(this.issue.priority, { nonNullable: true, validators: Validators.required }),
      });
    }
  }

  save() {
    if (this.issue) {
      this.issueService.updateIssue(this.issue.issueNo, this.issueForm?.getRawValue() as Issue);
      this.formClose.emit();
    }
  }


}
