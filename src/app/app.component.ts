import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { appRoutes } from './app.routes';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { businessRoutes } from './components/business-main/business-main.routes';
import { DrawerService } from './services/drawer.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { fadeIn, slideInOutFromLeft } from './services/animations';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  animations: [
    slideInOutFromLeft,
    fadeIn,
    trigger('stagger',[
      transition(':enter', [
        style({ width: 0 }),
        animate('200ms ease-in-out', style({ width: '200px' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ width: 0 }))
      ])
    ])
  ],
  imports: [
    RouterModule,
    DrawerModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private router: Router,
    private drawerService: DrawerService
  ) {

  }
  title = 'iri-hackathon-app';
  nav = appRoutes;
  routes = businessRoutes.find(x => x.title === 'Business')?.children;
  showDrawer: Signal<boolean> = signal(false);


  toggleDrawer(): void {
    this.drawerService.toggleDrawer();
  }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {

    //     // Set page title
    //     let route: ActivatedRoute = this.router.routerState.root;
    //     while (route?.firstChild) {
    //       route = route.firstChild;
    //     }
    //     route.title.subscribe({
    //       next: title => {
    //         if (title === 'Business') {
    //           this.drawerService.toggleDrawer(true);
    //           this.showDrawer = this.drawerService.getDrawerStatusSignal();
    //         }
    //       }
    //     })
    //   }
    // });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPath: string | undefined = this.router.getCurrentNavigation()?.finalUrl?.toString();
        if (currentPath?.includes('business')) {
          this.drawerService.toggleDrawer(true);
        } else {
          this.drawerService.toggleDrawer(false);
        }

        this.showDrawer = this.drawerService.getDrawerStatusSignal();
      }
    });
  }
}
