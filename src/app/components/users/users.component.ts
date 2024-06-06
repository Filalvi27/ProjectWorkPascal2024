import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users : User[] = [];

  constructor(private service:UsersService, private notify:ToastrService){
    this.service.getAll().subscribe( {
      next: r => this.users = r,
      error: e => this.notify.error('Errore di comunicazione')
    })
  }
}
