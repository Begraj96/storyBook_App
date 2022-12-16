import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { idea } from 'src/app/data-types';
import { AddIdeaService } from 'src/app/services/add-idea.service';

@Component({
  selector: 'app-ideas-update',
  templateUrl: './ideas-update.component.html',
  styleUrls: ['./ideas-update.component.css']
})
export class IdeasUpdateComponent implements OnInit {
  ideaData: undefined | idea;
  addIdea: any;

  constructor(private route: ActivatedRoute, private Idea: AddIdeaService, private toast:NgToastService, private router:Router) { }

  ngOnInit(): void {
    let ideaId = this.route.snapshot.paramMap.get('id')
    console.log(ideaId);
    ideaId && this.Idea.getIdea().subscribe((data) => {
      console.log(data);
      this.ideaData = data;
    });
  }

  submit(data:idea) {
   console.log(data);
   if(this.ideaData){
    data.id=this.ideaData.id;
   }
   this.Idea.updateIdea(data).subscribe((result)=>{
     if(result){
      this.toast.success({detail:"Success Message", summary:"Update Successfully!!",duration:3000})
      this.router.navigate(['/ideas'])
    }
   })
  }
}
