import { Routes } from '@angular/router';

export const businessRoutes: Routes = [
    {
        title: '',
        path: '',
        redirectTo: 'pending',
        pathMatch: 'full'
    },
    {
        title: 'Business',
        path: '',
        loadComponent: () => import('./business-main.component').then(c => c.BusinessMainComponent),
        children: [
            {
                title: 'Pending',
                path: 'pending',
                loadComponent: () => import('../business-pending/business-pending.component').then(c => c.BusinessPendingComponent)
            },
        ]
    },
];