import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import {
  Firestore,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { of } from 'rxjs';
import { User } from 'src/app/modules/user.model';
import { firebaseConfig } from 'src/app/config/firebase-config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('UserService', () => {
  let userService: UserService;
  // let firestoreMock: any;

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

  

  // it('should add a user and remove it', (done) => {
  //   const user: User = { name: 'Test User', lastname: 'Lastname' };

  //   userService.addUser(user).subscribe({
  //     next: (id) => {
  //       expect(id).toBeDefined();
  //       userService.removeUser(id).subscribe({
  //         next: () => {
  //           done();
  //         },
  //         error: (error) => {
  //           done.fail(`Error removing user: ${error.message}`);
  //         }
  //       });
  //     },
  //     error: (error) => {
  //       done.fail(`Error adding user: ${error.message}`);
  //     }
  //   });
  // });



  // it('should get  users', (done) => {
  //   userService.getUsers().subscribe({
  //     next: (users) => {
  //       users.forEach((user) => {
  //         expect(user).toEqual(jasmine.objectContaining({
  //           name: jasmine.any(String),
  //           lastname: jasmine.any(String),
  //         }));
  //       });
  //       done();
  //     },
  //     error: (error) => {
  //       done.fail('Error getting users');
  //     },
  //   });
      
  // })

  // it('should update a user', (done) => {
  //   const id = "M51jlOn3mLfRmXp01gFN"
  //   const user: User = { name: 'Test User osman', lastname: 'Lastname test user' };

  //   userService.updateUser(id, user).subscribe({
  //     next: () => {
  //       done();
  //     },
  //     error: (error) => {
  //       done.fail(`Error updating user: ${error.message}`);
  //     }
  //   });
  // })


  
})
