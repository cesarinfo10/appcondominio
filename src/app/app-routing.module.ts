import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sesion',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'sesion', loadChildren: './sesion/sesion.module#SesionPageModule' },
  { path: 'detalle-reporte', loadChildren: './detalle-reporte/detalle-reporte.module#DetalleReportePageModule' },
  { path: 'detalle-solucion', loadChildren: './detalle-solucion/detalle-solucion.module#DetalleSolucionPageModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  { path: 'ronda-list', loadChildren: './ronda-list/ronda-list.module#RondaListPageModule' },
  { path: 'iniciarronda', loadChildren: './iniciarronda/iniciarronda.module#IniciarrondaPageModule' },
  { path: 'detenerronda', loadChildren: './detenerronda/detenerronda.module#DetenerrondaPageModule' },
  { path: 'scanpunto', loadChildren: './scanpunto/scanpunto.module#ScanpuntoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
