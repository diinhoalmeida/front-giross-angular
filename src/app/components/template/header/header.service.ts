import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderTitle } from './header-interface-title';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderTitle>({
    title: 'Início',
    icon: 'home'
  })

  constructor() { }
  
  get headerData(): HeaderTitle {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderTitle) {
    this._headerData.next(headerData)
  }
}
