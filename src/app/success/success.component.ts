import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  register;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.register = params
      console.log(params)
    })
  }

  ngOnInit(): void {
  }

}
