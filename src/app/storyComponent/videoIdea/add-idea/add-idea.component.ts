import { Component, Input, OnInit } from '@angular/core';
import { AddIdeaService } from 'src/app/services/add-idea.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {
  

  constructor(private ideaService: AddIdeaService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    }

  addForm = new FormGroup({
    topic: new FormControl('', [Validators.required, Validators.minLength(10)]
    ),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),]),
    details: new FormControl('', [
      Validators.required,
      Validators.minLength(60)
    ])
  });

  errors : any = {topic:'', title:'', details:''}

  submit(addForm: FormGroup) {
    this.ideaService.addIdea(addForm.value).subscribe((response:any) => {
     // console.log(response)
      if (response) {
        addForm.reset();
        this.router.navigate(['/ideas'])
        this.toast.success({ detail: "Success Message", summary: "Added Successfully!!", duration: 3000 })
      }
      else {
        this.toast.error({ detail: "Error Message", summary: "Something went wrong!!", duration: 3000 })
      }
    }, ({error}) => {
      this.toast.error({ detail: "Error Message", summary: "An Error Occured!!", duration: 3000 })
      console.log(error.errors)
      this.errors = error.errors;
    }
    )
  }

  get topic(): FormControl {
    return this.addForm.get('topic') as FormControl;
  }

  get title(): FormControl {
    return this.addForm.get('title') as FormControl;
  }

  get details(): FormControl {
    return this.addForm.get('details') as FormControl
  }

}
