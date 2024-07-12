import { FilterPipe } from './filter.pipe';
import { User } from 'src/app/modules/user.model';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter users by name', () => {
    const users: User[] = [
      { id: '1', name: 'John Doe', lastname: 'Doe' },
      { id: '2', name: 'Jane Smith', lastname: 'Smith' },
    ];
    const filteredUsers = pipe.transform(users, 'John');

    expect(filteredUsers.length).toBe(1);
    expect(filteredUsers[0].name).toBe('John Doe');
  });

  it('should return all users when searchTerm is empty', () => {
    const users: User[] = [
      { id: '1', name: 'John Doe', lastname: 'Doe' },
      { id: '2', name: 'Jane Smith', lastname: 'Smith' },
    ];
    const filteredUsers = pipe.transform(users, '');

    expect(filteredUsers.length).toBe(2);
    expect(filteredUsers[0].name).toBe('John Doe');
    expect(filteredUsers[1].name).toBe('Jane Smith');
  });

});
