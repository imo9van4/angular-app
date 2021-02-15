import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  messages = [
    {id: 1, body: 'Hey, don`t forget to read our terms and conditions when you have the time. You`ll probably notice that in comparison to a lot of other companies, it`s pretty short, and you can actually read and understand it in under fifteen minutes without the help of a lawyer. The big takeaway is this: PetalMail swears to never sell your information. The only way we make money is by selling ad space. You do have the option of buying PetalMail Prime which will come without ads and with other useful apps, such as Petal Health, Petal Calendar, and Petal Friends. Thanks for joining the PetalMail Family.'},
    {id: 2, body: 'Using PetalMail is easy as pie. Speaking of which, you are the 3,141th person to join. Happy Pi Day, and reply with your mailing address for a complimentary thank-you pie.'},
    {id: 3, body: 'Hi, and welcome to your PetalMail account. People find that PetalMail is pretty simple to use, but if you have any questions, feel free to reach out to our Customer Service team any time. Simply reply to this email, or check your Contacts folder, where our email address is saved for you.'},
    {id: 4, body: 'I love you, Snookums. Always eat at least one veggie a day and wear a helmet when you ride your bike. Love, Mom.'},
    {id: 5, body: 'hey, I thought you would get a laugh out of this. heres the link, miss you!'}
  ]

  constructor() { }

  displayMessages(){
    var u = document.getElementById('1');
    var v = document.getElementById('2');
    var w = document.getElementById('3');
    var x = document.getElementById('4');
    var y = document.getElementById('5');
  }
}
