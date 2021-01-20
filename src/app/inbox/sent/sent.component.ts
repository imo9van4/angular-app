import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-sent',
    templateUrl: './sent.component.html',
    styleUrls: ['./sent.component.css']
  })

  export class SentComponent implements OnInit {
    register;
    useractivityTimer;

    @HostListener('window:mousemove') logoutUser() { 
      console.log('it works');
      clearTimeout(this.useractivityTimer);
      this.useractivityTimer=setTimeout(()=>this.router.navigate(['login']), 180000);
    }

    constructor(private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.register = params
        console.log(params)
      })
    }
        
        ngOnInit(): void {
         
        }
        
        }
  
  
  
        
