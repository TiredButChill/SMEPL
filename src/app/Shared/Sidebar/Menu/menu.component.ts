import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  animations: [
    trigger('slideInOut', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0' })),
      transition('true <=> false', animate('300ms ease-in-out'))
    ])
  ]
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize component
  }

  isExpanded: { [key: string]: boolean } = {
    equipment: false,
    supplies: false,
    personnel: false,
    reports: false
  };

  toggleSection(section: string) {
    this.isExpanded[section] = !this.isExpanded[section];
  }

  navigateTo(section: string) {
    this.router.navigate(['/content', section]);
  }
}
