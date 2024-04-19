import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthStateService {
  
  public user:User | null;
  
  public get isUserConnected(): boolean {
    return this.user?.username ? true : false;
  }
    
  constructor() { }
}
