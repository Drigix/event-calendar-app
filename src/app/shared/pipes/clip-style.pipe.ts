import {Pipe, PipeTransform} from '@angular/core';
import {PlatformColorEnum, PlatformEnum} from '../../enums/platform.enum';

@Pipe({
  name: 'clipStylePipe'
})
export class ClipStylePipe implements PipeTransform {

  transform(value?: PlatformEnum): any {
    if (!value) {
      return '';
    }
    if (value === PlatformEnum.TWITCH) {
      return {'color': PlatformColorEnum.TWITCH};
    } else if (value === PlatformEnum.KICK) {
      return {'color': PlatformColorEnum.KICK};
    }
  }
}
