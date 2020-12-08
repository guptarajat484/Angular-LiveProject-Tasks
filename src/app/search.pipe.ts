import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'Filter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =  (val.name.toLocaleLowerCase().includes(args))| (val.address.toLocaleLowerCase().includes(args));
     console.log(rVal)
      return rVal;
    })

  }

}