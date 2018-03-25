import {MenuItem} from './menuItem';

export class RoutItem implements MenuItem{
  constructor(public name: string,
              public translate: string,
              public url: string,
              public subMenu:[MenuItem]
              ) {

  }
}
