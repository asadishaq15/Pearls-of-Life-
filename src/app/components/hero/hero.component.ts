// src/app/components/hero/hero.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { titleAnimation } from '../../services/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [titleAnimation]
})
export class HeroComponent implements OnInit {
  @Input() title: string = '';
  @Input() bgImage: string = 'assets/hero_bg_pol.jpg';

  
  ngOnInit() {
    // Default background if none provided
    if (!this.bgImage) {
      this.bgImage = 'assets/hero_bg_pol.jpg';
    }
  }
}