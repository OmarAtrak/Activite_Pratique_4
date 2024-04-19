import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../../../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endPoint = `${config.endPoint}users`;

  constructor(private http: HttpClient) { }

  get(username: string) {
    return this.http.get(`${this.endPoint}/${username}`);
  }
}
