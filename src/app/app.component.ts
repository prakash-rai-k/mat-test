import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewUserComponent } from './new-user/new-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'mat-challenge';
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'address', 'phone', 'company', 'actions'];
  users = ELEMENT_DATA;


  openDialog(user): void {
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '410px',
      data: {user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

const ELEMENT_DATA = [
  {id: 1, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 2, name: 'yoyo', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 3, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 4, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 5, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 6, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 7, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 8, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 9, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
  {id: 10, name: 'Hydrogen', username: "test", email: "rbist@gmail.com", address: "178 paramount dr, Wood Dale, IA , 60191", phone : "9878786696898", website: "www.abc.com", company: "Hubgroup"},
];

