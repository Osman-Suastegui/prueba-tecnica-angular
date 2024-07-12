import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from 'src/app/config/firebase-config';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreModule } from 'src/app/core/core.module';
import { UserFormComponent } from '../user-form/user-form.component';
import { HomeModule } from '../../home.module';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent,UserFormComponent],
      imports: [
        CommonModule,
        CoreModule,
        HomeModule,
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the user-list', () => {
    expect(component).toBeTruthy();
  });

  it('should render search input and add button', () => {
    const toolbarElement = fixture.debugElement.query(By.css('.toolbar'));
    expect(toolbarElement).toBeTruthy();

    const searchInput = toolbarElement.query(By.css('input'));
    expect(searchInput).toBeTruthy();
    expect(searchInput.nativeElement.placeholder).toContain(
      'Buscar por nombre'
    );

    const addButton = toolbarElement.query(By.css('button'));
    expect(addButton).toBeTruthy();
    expect(addButton.nativeElement.textContent).toContain('Agregar Usuario');
  });


  it('should filter users by name', () => {
    component.dataSource.data = [
      { name: 'Juan', lastname: 'Perez' },
      { name: 'Maria', lastname: 'Garcia' },
      { name: 'Pedro', lastname: 'Lopez' }
    ];
  
    fixture.detectChanges();
  
    const searchInput = fixture.debugElement.query(By.css('input')).nativeElement;
    searchInput.value = 'Maria';
    searchInput.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    const rows = fixture.debugElement.queryAll(By.css('mat-row'));
    expect(rows.length).toBe(1);
  
    const cell = rows[0].queryAll(By.css('mat-cell'))[0];
    expect(cell.nativeElement.textContent).toContain('Maria');
  });
});
