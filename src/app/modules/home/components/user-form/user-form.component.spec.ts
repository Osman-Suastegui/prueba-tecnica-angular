import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { HomeModule } from '../../home.module';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from 'src/app/config/firebase-config';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/models/user.model';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<UserFormComponent>>;

  beforeEach(() => {
    const dialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: null }, 
        { provide: MatDialogRef, useValue: dialogRefSpyObj },
        
      ],
      imports: [
        MatDialogModule,      
        HomeModule,
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),

      ]
    });

    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<UserFormComponent>>;

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on cancel', () => {
    component.closeDialog();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should display "Crear usuario" title when for adding user', () => {
    expect(component).toBeTruthy();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain('Crear usuario');
  });

  it('should display "Editar usuario" title when for editing user', () => {
    component.data = { name: 'Test', lastname: 'User' } as User 
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain('Editar usuario');
  });

});
