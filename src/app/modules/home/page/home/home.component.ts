import { Component } from '@angular/core';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) { }

  abrirModal() {
    this.dialog.open(UserFormComponent, {
      width: '450px',
      // disableClose: false, // asegúrate de que no esté establecido en true
      hasBackdrop: true,
    })
  }
}
