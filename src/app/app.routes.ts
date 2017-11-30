import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent,
  children: [
    { path: '', component: MapComponent },
    { path: 'map', component: MapComponent },
    { path: 'restaurant', component: RestaurantComponent }
  ]},
];
