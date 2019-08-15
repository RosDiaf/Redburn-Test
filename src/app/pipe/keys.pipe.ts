import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  constructor() {}
  public transform(value) {
      if (!value) {
          return value;
      }

      let keys = [];
      for (let key in value) {
          if (value) {
              keys.push({
                  "key": key,
                  "value": value[key],
              })
          }
      }
      return keys;
  }

}
