import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaempleadosComponent } from './components/tablaempleados/tablaempleados.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';

const appRoutes: Routes = [
  { path: 'empleados', component: TablaempleadosComponent },
  { path: 'detallesempleado/:empno', component: DetallesempleadoComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
