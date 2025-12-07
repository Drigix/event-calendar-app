import {Pipe, PipeTransform} from '@angular/core';
import {PlatformEnum} from '../../enums/platform.enum';
import {ASSET_PATHS} from '../assets-path.const';

@Pipe({
  name: 'platformImgPipe'
})
export class PlatformImgPipe implements PipeTransform {

 private PLATFORM_IMAGES: { [key: string]: string } = {
    [PlatformEnum.INSTAGRAM]: ASSET_PATHS.logos.instagram,
    [PlatformEnum.TWITCH]: ASSET_PATHS.logos.twitch,
    [PlatformEnum.KICK]: ASSET_PATHS.logos.kick,
    [PlatformEnum.YOUTUBE]: ASSET_PATHS.logos.youtube
  };

  transform(value?: PlatformEnum): any {
    if (!value) {
      return '';
    }
    return this.PLATFORM_IMAGES[value] as string;
  }
}
