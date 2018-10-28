import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppComponent } from '../app.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
      if(data.user !== undefined){
        console.log("Data ", data);
        this.myForm = fb.group({
          'id': data.id,
          'name': data.name,
          'username': data.username,
          'email': data.email
        });
      } else{
        console.log('No Data');
        this.myForm = fb.group({
          'id': '',
          'name': '',
          'username': '',
          'email': ''
        });
      }
      console.log("######################", this.data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

  saveUser(){
    console.log("data", this.myForm.value);
    this.dialogRef.close();
  }

}
