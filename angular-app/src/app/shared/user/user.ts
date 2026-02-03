import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { UserModel } from './user.model';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserModel;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => 'assets/users/' + this.user.avatar);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
