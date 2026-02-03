import { Component, signal } from '@angular/core';
import { User } from '../../shared/user/user';
import { DUMMY_USERS } from '../../dummy-users';
import { Tasks } from '../../shared/tasks/tasks';

interface UserElement {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  imports: [User, Tasks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = DUMMY_USERS;

  selectedUser = signal<UserElement | undefined>(undefined);

  onSelectUser(id: string) {
    const dummyUser = DUMMY_USERS.find((user) => user.id === id);

    if (!dummyUser) return;

    this.selectedUser.set(dummyUser);
  }
}
