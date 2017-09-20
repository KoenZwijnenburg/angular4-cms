import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserFormService } from '../user-form.service';

@Component({
  selector: 'cms-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit, OnDestroy {

  getFormSubscription: Subscription;
  form;

  constructor(private route: ActivatedRoute, private router: Router, public userFormService: UserFormService) { }



  ngOnInit() {

    this.getFormSubscription = this.route.params.subscribe(res => {

      this.userFormService.getSingleForm(res.id).subscribe(form => {
        this.form = form;
      })
    });
  }


  ngOnDestroy() {
    this.getFormSubscription.unsubscribe();
  }

}
