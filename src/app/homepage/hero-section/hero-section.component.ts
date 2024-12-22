import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    gsap.to('.heroTextLeft', {
      duration: 2, 
      delay : 0.5,
      opacity: 1, 
      ease: 'power2.out'

    });

    gsap.to('#heroImg', {
      duration: 2, 
      delay : 0.5,
      opacity: 1, 
      ease: 'power2.out'

    });
    gsap.to('#heroImg', {
      duration: 2,
      delay : 0.5,
      y:-30,
      repeat: -1,
      yoyo : true, 
      ease: 'power2.out'

    });

  }
}
