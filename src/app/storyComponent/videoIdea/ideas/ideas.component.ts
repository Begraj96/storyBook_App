import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AddIdeaService } from 'src/app/services/add-idea.service';
import { addidealist } from 'src/app/models/addidea.model';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideaList: addidealist[] = [];
  
  constructor(private Idea: AddIdeaService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.list() 
  }

  deletebtn(_id: number) {
    this.Idea.deleteIdea(_id).subscribe((result) => {
    //  console.log(_id)
      if (result) {
       // console.log(result)
        this.toast.success({ detail: "Success Message", summary: "Delete Successfully!!", duration: 3000 })
        this.ideaList = result.data;
        this.list();
      //  console.log(this.ideaList)
      }
    })
  }

  list() {
    this.Idea.getIdea().subscribe((result) => {
     // console.log(result)
      if (result) {
        this.ideaList = result.data;
       // console.log('idealist=>',this.ideaList)
      }
    })
  }

}
