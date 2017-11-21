import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });

    this._data.goals.subscribe(res => this.goals = res);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
