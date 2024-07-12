import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'lastname', 'actions'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  isDialogOpen = false;  // Variable para rastrear si el diálogo está abierto
  searchTerm:string = ""
  constructor(private userService: UserService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
    });
  }

  deleteUser(user: User ) {
    if (confirm(`¿Estás seguro de eliminar a ${user.name} ${user.lastname}?`)) {
      this.userService.removeUser(user.id as string).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  editUser(user: User) {
    this.isDialogOpen = true;  // Marcar el diálogo como abierto
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      disableClose: false,
      data: user
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;  // Marcar el diálogo como cerrado
    });
  }

  addUser() {
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
      this.loadUsers();
    });
  }

  serachByName(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}
