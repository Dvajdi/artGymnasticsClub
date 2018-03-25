import {Injectable} from '@angular/core';
import {RoutItem} from '../../shared/models/routItem';

@Injectable()
export class HeaderService {

  constructor() {
  }

  headerNames: [RoutItem] = [
    {
      name: 'forParent', translate: 'Для Родителей', url: 'forParent', subMenu: [
        {name: 'cost', translate: 'Стоимость', url: 'cost'},
        {name: 'schedule', translate: 'Расписание', url: 'schedule'},
        {name: 'info', translate: 'Информация', url: 'info'}
      ]
    },
    {name: 'gallery', translate: 'Галлерея', url: '/gallery', subMenu: null},
    {name: 'contact', translate: 'Контакты', url: '/contact', subMenu: null}
  ];

  getHeaderNames() {
    return this.headerNames.slice();
  }
}
