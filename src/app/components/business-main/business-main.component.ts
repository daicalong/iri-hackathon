import { ChangeDetectionStrategy, Component, OnInit, Signal, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { businessRoutes } from './business-main.routes';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-business-main',
  imports: [
    DrawerModule,
    RouterModule
  ],
  templateUrl: './business-main.component.html',
  styleUrl: './business-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessMainComponent implements OnInit {
  constructor(
    private router: Router,
    private drawerService: DrawerService
  ) {

  }
  routes = businessRoutes.find(x => x.title === 'Business')?.children;
  showDrawer: Signal<boolean> = signal(false);


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        // Set page title
        let route: ActivatedRoute = this.router.routerState.root;
        while (route?.firstChild) {
          route = route.firstChild;
        }
        route.title.subscribe({
          next: title => {
            if (title === 'Business') {
              this.drawerService.toggleDrawer(true);
              this.showDrawer = this.drawerService.getDrawerStatusSignal();
            }
          }
        })
      }
    });
  }
}
