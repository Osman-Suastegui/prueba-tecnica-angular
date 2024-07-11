import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/modules/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User,  public dialogRef: MatDialogRef<UserFormComponent>,private userService:UserService) {
  }

 dataUser: User  = {} as User;
  ngOnInit(): void {
   
    this.dataUser = { ...this.data };


  }
  
  addUser() {

    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  saveUser() {
    if (this.dataUser.id) {
      this.userService.updateUser(this.dataUser.id,this.dataUser).subscribe(() => {
        this.dialogRef.close();
        alert('Usuario actualizado');
      })
    } else {
      this.userService.addUser(this.dataUser).subscribe(() => {
        this.dialogRef.close();
        alert('Usuario creado');
      });
    }
  }

}

