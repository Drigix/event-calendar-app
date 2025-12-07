import {PlatformEnum} from '../enums/platform.enum';

export class PlatformButtonConfig {
  constructor(
    public key?: PlatformEnum,
    public label?: string,
    public icon?: string,
    public color?: string,
    public colorAlt?: string,
    public border?: string
  ) {
  }
}
