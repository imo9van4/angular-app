import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TestInbox } from './inbox.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {
  register;
  useractivityTimer;
  messages: TestInbox[] =[ {subject: 'I love you, Snookums',
  sender: 'Mom', more: 'I love you, Snookums. Always eat at least one veggie a day and wear a helmet when you ride your bike. Love, Mom.'},
  {subject: 'funny video', sender: 'Andrea', more: 'hey, I thought you would get a laugh out of this. heres the link, miss you!'}
  ]
 @HostListener('window:mousemove') logoutUser() { 
    console.log('it works');
    clearTimeout(this.useractivityTimer);
    setTimeout(()=>this.router.navigate(['login']), 180000);
 
  }

  
constructor(private router: Router, private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    this.register = params
    console.log(params)
  })
}

ngOnInit(): void {
}

}






