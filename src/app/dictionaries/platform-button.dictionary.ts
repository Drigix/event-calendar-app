import {PlatformButtonConfig} from '../models/platform-button-config.model';
import {PlatformColorEnum, PlatformEnum} from '../enums/platform.enum';

export const platformButtonDictionaries: PlatformButtonConfig[] = [
  {
    key: PlatformEnum.TWITCH,
    label: 'platforms.twitch',
    icon: 'assets/icons/twitch.svg',
    color: PlatformColorEnum.TWITCH,
    colorAlt: PlatformColorEnum.TWITCH_ALFA,
    border: PlatformColorEnum.TWITCH
  },
  {
    key: PlatformEnum.KICK,
    label: 'platforms.kick',
    icon: 'assets/icons/kick.svg',
    color: PlatformColorEnum.KICK,
    colorAlt: PlatformColorEnum.KICK_ALFA,
    border: PlatformColorEnum.KICK
  },
  {
    key: PlatformEnum.YOUTUBE,
    label: 'platforms.youtube',
    icon: 'assets/icons/youtube.svg',
    color: PlatformColorEnum.YOUTUBE,
    colorAlt: PlatformColorEnum.YOUTUBE_ALFA,
    border: PlatformColorEnum.YOUTUBE
  }
];
