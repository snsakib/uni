import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  navLinks;
  navItems;

  // Adds 'active' class to the clicked link
  addActiveClass(event: Event) {
    (<HTMLAnchorElement>event.target).parentElement.classList.add('active');
  }

  // Removes 'active' class from the current active link
  removeActiveClass() {
    for (const navItem of this.navItems) {
      if (navItem.classList.contains('active')) {
        navItem.classList.remove('active');
      }
    }
  }

  // Adds click events to all of the links
  addClickEvents() {
    for (const navLink of this.navLinks) {
      navLink.addEventListener('click', event => {
        this.removeActiveClass();
        this.addActiveClass(event);
      });
    }
  }

  ngAfterViewInit() {
    this.navLinks = Array.from(document.getElementsByClassName('nav-link'));
    this.navItems = Array.from(document.getElementsByClassName('nav-item'));
    this.addClickEvents();
  }
}
