import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[]  {
    if (!users || !searchTerm) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase().trim();

    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm)
    );
  }

}
