import { Injectable } from '@angular/core';
import { BehaviorSubject, map, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  user = new BehaviorSubject<UserModel>(null)

  constructor() { }
}
