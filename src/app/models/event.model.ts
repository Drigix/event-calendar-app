import {EventClip} from './event-clip.model';
import {PlatformEnum} from '../enums/platform.enum';

export class Event {
  constructor(
    public id: number,
    public labelName: string,
    public img?: string,
    public ytUrl?: string,
    public date?: Date,
    public platform?: PlatformEnum,
    public clips?: EventClip[]
  ) {
  }
}
