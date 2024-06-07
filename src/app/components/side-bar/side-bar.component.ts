import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar') as HTMLDivElement;
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    } else {
      sidebar.classList.add('active');
    }
  }
}
