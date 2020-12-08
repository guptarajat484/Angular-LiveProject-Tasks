import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPip implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =  (val.name.toLocaleLowerCase().includes(args))| (val.username.toLocaleLowerCase().includes(args))|(val.email.toLocaleLowerCase().includes(args)) ;
     
      return rVal;
    })

  }

}