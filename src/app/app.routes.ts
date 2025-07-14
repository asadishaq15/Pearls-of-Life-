// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AutoObituaryComponent } from './pages/auto-obituary/auto-obituary.component';
import { LegacyComponent } from './pages/legacy/legacy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'AboutPage' } },
  { path: 'services', component: ServicesComponent, data: { animation: 'ServicesPage' } },
  { path: 'contact-us', component: ContactUsComponent, data: { animation: 'ContactPage' } },
  { path: 'pricing', component: PricingComponent, data: { animation: 'PricingPage' } },
  { path: 'auto-obituary', component: AutoObituaryComponent, data: { animation: 'ObituaryPage' } },
  { path: 'legacy', component: LegacyComponent, data: { animation: 'LegacyPage' } },
  { path: '**', redirectTo: 'about-us' }
];