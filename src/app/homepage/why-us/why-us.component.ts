import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent implements AfterViewInit {



  ngAfterViewInit(): void {

    gsap.from('.whyus', {

      x: -500,
      opacity: 0,
      // scrub : 1,
      ease: 'power2.out'
    });
    gsap.from('.whyPara', {

      opacity: 0,
      // scrub : 1,
      ease: 'power2.out'
    });

    const tl = gsap.timeline();

    tl.from('.whyus:nth-child(1)', {
      x: 0,
      // opacity : 0,
      ease: 'power2.out'
    }, 0);
    tl.from('.whyPara:nth-child(1)', {
      opacity: 1,
      ease: 'power4.out'
    }, 0)
    tl.to('.whyus:nth-child(2)', {
      x: 0,
      // opacity : 0,
      ease: 'power2.out'
    }, .4);
    tl.to('.whyPara:nth-child(2)', {
      opacity: 1,
      ease: 'power4.out'
    }, .4)

    ScrollTrigger.create({
      animation: tl,
      trigger: '#whyContainer',
      // markers : true,
      scrub: true,
      start: '5% 20%',
      pin: true,
      snap: 1
      // anticipatePin : 1
    })


  }
}
