import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {
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






