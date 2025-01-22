import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        title: '',
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        title: 'Dashboard',
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },
    {
        title: 'Business',
        path: 'business',
        loadChildren: () => import('./components/business-main/business-main.routes').then(r => r.businessRoutes)
    },
    {
        title: 'Sandbox',
        path: 'sandbox',
        loadComponent: () => import('./components/sandbox/sandbox.component').then(c => c.SandboxComponent)
    },
];
