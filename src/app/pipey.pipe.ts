import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipey',
  standalone: true
})
export class PipeyPipe implements PipeTransform {
  transform(value: string): any {
    return value.split('').reverse().join('');
  }
}
