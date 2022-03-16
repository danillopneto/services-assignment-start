import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  usersActivated = 0;
  usersDeactivated = 0;

  constructor() {}

  userActivated(): void {
    this.usersActivated++;
    console.log(`User activated: ${this.usersActivated}`);
  }

  userDeactivated(): void {
    this.usersDeactivated++;
    console.log(`User deactivated: ${this.usersDeactivated}`);
  }
}
