import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleChr'
})
export class TitleChrPipe implements PipeTransform {

  transform(txt:string): unknown {
    let str:any = txt.split(' ');    
    let eStr = str[0].slice(0, 1) + str[1].slice(0, 1);
    return eStr;
  }

}
