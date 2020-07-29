import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user/user-interface';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _activeUser: User | null;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loading.asObservable();

  constructor() { }

  public isUserLogged(): boolean {
    let userLogged: boolean = false;
    if (this.getActiveUser) {
      userLogged = true;
    }
    return userLogged;
  }

  get getActiveUser(): User | null{
    return this._activeUser;
  }
  
  public setActiveUser(user: User | null): void {
    this._activeUser = user;
  }

  public setLoading(status: boolean): void {
    this.loading.next(status);
  }
}
