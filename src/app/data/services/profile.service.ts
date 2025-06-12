import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Profile } from '../interfaces/profile.interface';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  http:HttpClient = inject(HttpClient)
  getTestAccounts(){
    return this.http.get<Profile[]>(`${environment.baseUrl}/account/test_accounts`)
  }
}
