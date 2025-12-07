import {MonthEnum} from '../enums/month.enum';
import {Event} from '../models/event.model';
import {EventClip} from '../models/event-clip.model';
import {PlatformEnum} from '../enums/platform.enum';

export class MonthEventHelper {

  public static loadMonthEvents(month: MonthEnum): Event[] {
    switch (month) {
      case MonthEnum.JANUARY: {
        return MonthEventHelper.buildJanuaryEvents();
      }
      case MonthEnum.FEBRUARY: {
        return MonthEventHelper.buildFebruaryEvents();
      }
      case MonthEnum.MARCH: {
        return MonthEventHelper.buildMarchEvents();
      }
      case MonthEnum.APRIL: {
        return MonthEventHelper.buildAprilEvents();
      }
      case MonthEnum.MAY: {
        return MonthEventHelper.buildMayEvents();
      }
      case MonthEnum.JUNE: {
        return MonthEventHelper.buildJuneEvents();
      }
      case MonthEnum.JULY: {
        return MonthEventHelper.buildJulyEvents();
      }
      case MonthEnum.AUGUST: {
        return MonthEventHelper.buildAugustEvents();
      }
      case MonthEnum.SEPTEMBER: {
        return MonthEventHelper.buildSeptemberEvents();
      }
      case MonthEnum.OCTOBER: {
        return MonthEventHelper.buildOctoberEvents();
      }
      case MonthEnum.NOVEMBER: {
        return MonthEventHelper.buildNovemberEvents();
      }
      case MonthEnum.DECEMBER: {
        return MonthEventHelper.buildDecemberEvents();
      }
      default:
        return [];
    }
  }

  public static buildJanuaryEvents(): Event[] {
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

  public static buildFebruaryEvents(): Event[] {
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

  public static buildMarchEvents(): Event[] {
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

  public static buildAprilEvents(): Event[] {
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

  public static buildMayEvents(): Event[] {
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

  public static buildJuneEvents(): Event[] {
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

  public static buildJulyEvents(): Event[] {
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

  public static buildAugustEvents(): Event[] {
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

  public static buildSeptemberEvents(): Event[] {
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

  public static buildOctoberEvents(): Event[] {
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

  public static buildNovemberEvents(): Event[] {
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

  public static buildDecemberEvents(): Event[] {
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
