import {MonthEnum} from '../enums/month.enum';
import {Event} from '../models/event.model';
import {EventClip} from '../models/event-clip.model';
import {PlatformEnum} from '../enums/platform.enum';

export class MonthEventHelper {

  public static loadMonthEvents(month: MonthEnum): Event[] {
    switch (month) {
      case MonthEnum.JANUARY: {
        return MonthEventHelper.loadJanuaryEvents();
      }
      case MonthEnum.FEBRUARY: {
        return MonthEventHelper.loadFebruaryEvents();
      }
      default:
        return [];
    }
  }

  public static loadJanuaryEvents(): Event[] {
    return [
      new Event(
        1,
        'events.subscriptionRecord',
        'https://i.ytimg.com/vi/LJM0Vfc3ufk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLByLfkVy5vOVlvdasuW8QAa9f1lzQ',
        'https://www.youtube.com/watch?v=LJM0Vfc3ufk',
        new Date(),
        PlatformEnum.TWITCH,
        [
          new EventClip(
            'sub-record-clip-1',
            'https://www.twitch.tv/neexcsgo/clip/BovineHeadstrongNoodleWutFace-4euwEv-KHgKoFMO1?filter=clips&range=all&sort=time'
          ),
          new EventClip(
            'sub-record-clip-2',
            'https://www.twitch.tv/neexcsgo/clip/SmokyPoliteDunlinTebowing-QKBBQkVKlGgjrB9n?filter=clips&range=all&sort=time'
          )
        ]
      ),
      new Event(
        1,
        'events.subscriptionRecord',
        'https://i.ytimg.com/vi/LJM0Vfc3ufk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLByLfkVy5vOVlvdasuW8QAa9f1lzQ',
        'https://www.youtube.com/watch?v=LJM0Vfc3ufk',
        new Date(),
        PlatformEnum.KICK,
        [
          new EventClip(
            'sub-record-clip-1',
            'https://www.twitch.tv/neexcsgo/clip/BovineHeadstrongNoodleWutFace-4euwEv-KHgKoFMO1?filter=clips&range=all&sort=time'
          ),
          new EventClip(
            'sub-record-clip-2',
            'https://www.twitch.tv/neexcsgo/clip/SmokyPoliteDunlinTebowing-QKBBQkVKlGgjrB9n?filter=clips&range=all&sort=time'
          )
        ]
      ),
      new Event(
        1,
        'events.subscriptionRecord',
        'https://i.ytimg.com/vi/LJM0Vfc3ufk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLByLfkVy5vOVlvdasuW8QAa9f1lzQ',
        'https://www.youtube.com/watch?v=LJM0Vfc3ufk',
        new Date(),
        PlatformEnum.TWITCH,
        [
          new EventClip(
            'sub-record-clip-1',
            'https://www.twitch.tv/neexcsgo/clip/BovineHeadstrongNoodleWutFace-4euwEv-KHgKoFMO1?filter=clips&range=all&sort=time'
          ),
          new EventClip(
            'sub-record-clip-2',
            'https://www.twitch.tv/neexcsgo/clip/SmokyPoliteDunlinTebowing-QKBBQkVKlGgjrB9n?filter=clips&range=all&sort=time'
          )
        ]
      )
    ];
  }

  public static loadFebruaryEvents(): Event[] {
    return  [
      new Event(
      1,
      'events.subscriptionRecord',
      'https://i.ytimg.com/vi/LJM0Vfc3ufk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLByLfkVy5vOVlvdasuW8QAa9f1lzQ',
      'https://www.youtube.com/watch?v=LJM0Vfc3ufk',
      new Date(),
      PlatformEnum.TWITCH,
      [
        new EventClip(
          'sub-record-clip-1',
          'https://www.twitch.tv/neexcsgo/clip/BovineHeadstrongNoodleWutFace-4euwEv-KHgKoFMO1?filter=clips&range=all&sort=time'
        ),
        new EventClip(
          'sub-record-clip-2',
          'https://www.twitch.tv/neexcsgo/clip/SmokyPoliteDunlinTebowing-QKBBQkVKlGgjrB9n?filter=clips&range=all&sort=time'
        )
      ]
    ),
      new Event(
        1,
        'events.subscriptionRecord',
        'https://i.ytimg.com/vi/LJM0Vfc3ufk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLByLfkVy5vOVlvdasuW8QAa9f1lzQ',
        'https://www.youtube.com/watch?v=LJM0Vfc3ufk',
        new Date(),
        PlatformEnum.KICK,
        [
          new EventClip(
            'sub-record-clip-1',
            'https://www.twitch.tv/neexcsgo/clip/BovineHeadstrongNoodleWutFace-4euwEv-KHgKoFMO1?filter=clips&range=all&sort=time'
          ),
          new EventClip(
            'sub-record-clip-2',
            'https://www.twitch.tv/neexcsgo/clip/SmokyPoliteDunlinTebowing-QKBBQkVKlGgjrB9n?filter=clips&range=all&sort=time'
          )
        ]
      )
      ];
  }
}
