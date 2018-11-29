import { Pipe, PipeTransform } from '@angular/core';
import { Memoize } from 'lodash-decorators';

@Pipe({
  name: 'rank2'
})
export class RankPipe2 implements PipeTransform {
  @Memoize
  transform(value: any, args?: any): any {
    console.log('called');

    if (value < 1000)
      return 'beginner';
    else
      return 'expert';
  }

}
