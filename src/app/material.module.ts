import {MatButtonModule,  MatCheckboxModule, MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatInputModule, MatCardModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatInputModule, MatCardModule, MatDialogModule]
})
export class MaterialModule{}
