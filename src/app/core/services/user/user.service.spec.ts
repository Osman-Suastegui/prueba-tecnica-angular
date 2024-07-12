import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import {
  Firestore,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { of } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { firebaseConfig } from 'src/app/config/firebase-config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
      providers: [UserService],
    });
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });


  it('should add a user and remove it', async () => {
    try {
      const user: User = { name: 'Test User', lastname: 'Lastname' };
  
      const id = await new Promise<string>((resolve, reject) => {
        userService.addUser(user).subscribe({
          next: (id) => resolve(id),
          error: (error) => reject(new Error(`Error adding user: ${error.message}`)),
        });
      });
  
      expect(id).toBeDefined();
  
      await new Promise<void>((resolve, reject) => {
        userService.removeUser(id).subscribe({
          next: () => resolve(),
          error: (error) => reject(new Error(`Error removing user: ${error.message}`)),
        });
      });
  
    } catch (error) {
      fail(error); 
    }
  });
  



  it('should get users', async () => {
    try {
      const users = await new Promise<User[]>((resolve, reject) => {
        userService.getUsers().subscribe({
          next: (users) => resolve(users),
          error: (error) => reject('Error getting users: ' + error),
        });
      });
  
      users.forEach((user) => {
        expect(user.name).toEqual(jasmine.any(String));
        expect(user.lastname).toEqual(jasmine.any(String));
      });
  
    } catch (error) {
      fail('Error getting users: ' + error); 
    }
  });

  it('should update a user', async () => {
    try {
      const id = "M51jlOn3mLfRmXp01gFN";
      const user: User = { name: 'Test User osman', lastname: 'Lastname test user' };
  
      await new Promise<void>((resolve, reject) => {
        userService.updateUser(id, user).subscribe({
          next: () => resolve(),
          error: (error) => reject(new Error(`Error updating user: ${error.message}`)),
        });
      });
  
    } catch (error) {
      fail(error); 
    }
  });
  


  
})
