import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { fadeInOnScroll } from '../../services/animations';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, HeroComponent, ButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [fadeInOnScroll]
})
export class AboutUsComponent implements OnInit {
  ngOnInit() {
    this.initScrollAnimation();
  }
  
  private initScrollAnimation() {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      document.querySelectorAll('.about-section, .testimonial-section').forEach(
        section => observer.observe(section)
      );
    }, 100);
  }
}