import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  headerOpacity = 0;
  menuVisible = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 0 && number <= 100) {
      console.log(number)
      this.headerOpacity = number / 100
    }

    if (number > 100) {
      this.headerOpacity = 1

    }

  }



}
