import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(value: string|null, ...args: unknown[]): string {
    return value ? `${environment.baseUrl}/${value}`: '/assets/images/rayn.jpg';
  }

}
