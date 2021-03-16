import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  FormsModule,
  MatTableModule,
  MatInputModule
];


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class AngularMaterialModule { }