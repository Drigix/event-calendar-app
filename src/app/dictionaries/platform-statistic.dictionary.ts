import {PlatformStatistic} from '../models/platform-statistic.model';

export const platformStatisticDictionary: PlatformStatistic[] = [
  new PlatformStatistic(
    'FOLLOW',
    'statistic.follow',
    0,
    'pi pi-eye'
  ),
  new PlatformStatistic(
    'AVG_NUMBER_OF_VIEWERS',
    'statistic.avgNumberOfViewers',
    0,
    'pi pi-users'
  ),
  new PlatformStatistic(
    'SUBSCRIPTION',
    'statistic.subs',
    0,
    'pi pi-star'
  ),
  new PlatformStatistic(
    'MAX_SUBSCRIPTION',
    'statistic.maxSubs',
    0,
    'pi pi-star-fill'
  ),
  new PlatformStatistic(
    'STREAM_HOURS',
    'statistic.streamHours',
    0,
    'pi pi-clock'
  ),
  new PlatformStatistic(
    'WATCHED_OURS',
    'statistic.watchedOurs',
    0,
    'pi pi-clock'
  )
];
