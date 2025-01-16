import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        title: 'Sandbox',
        path: 'sandbox',
        loadComponent: () => import('./components/sandbox/sandbox.component').then(c => c.SandboxComponent)
    }
];
