import {PlatformEnum} from '../enums/platform.enum';

export class PlatformStatistic {
  constructor(
    public id?: string,
    public labelField?: string,
    public value?: number,
    public icon?: string
  ) {
  }
}
