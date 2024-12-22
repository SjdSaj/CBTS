import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    gsap.from('.navAnm',{
      duration : 1,
      delay : 0.5,
      y : -100,
      ease : 'power2.out'
    });
  }

}
