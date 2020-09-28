import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'colores',
    loadChildren: () => import('./pages/colores/colores.module').then( m => m.ColoresPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'animales',
    loadChildren: () => import('./pages/animales/animales.module').then( m => m.AnimalesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'numeros',
    loadChildren: () => import('./pages/numeros/numeros.module').then( m => m.NumerosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
