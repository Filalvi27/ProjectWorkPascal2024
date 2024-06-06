import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { UserDetail } from '../../models/UserDetail';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  importo : number = 12;


  user : UserDetail | undefined;

  constructor(private route : ActivatedRoute, private service:UsersService, private notify:ToastrService)
  {
    this.service.getOne(this.route.snapshot.params['id']).subscribe({
      next: r => this.user = r,
      error: e => this.notify.error("errore nel recuper dell'utente")
    })
  }
}
