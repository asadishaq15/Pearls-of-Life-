// src/app/pages/pricing/pricing.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { fadeInOnScroll } from '../../services/animations';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, HeroComponent, ButtonComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [fadeInOnScroll]
})
export class PricingComponent implements OnInit {
  
  ngOnInit() {
    this.initScrollAnimation();
  }
  
  private initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      document.querySelectorAll('.pricing-section, .additional-fees').forEach(
        section => observer.observe(section)
      );
    }, 100);
  }
}