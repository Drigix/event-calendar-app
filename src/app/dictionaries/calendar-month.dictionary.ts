import {CalendarMonth} from '../models/calendar-month.model';
import {MonthEnum} from '../enums/month.enum';

export const CalendarMonthDictionary: CalendarMonth[] = [
  new CalendarMonth(MonthEnum.JANUARY, 'calendar.month.january', 0),
  new CalendarMonth(MonthEnum.FEBRUARY, 'calendar.month.february', 1),
  new CalendarMonth(MonthEnum.MARCH, 'calendar.month.march', 2),
  new CalendarMonth(MonthEnum.APRIL, 'calendar.month.april', 3),
  new CalendarMonth(MonthEnum.MAY, 'calendar.month.may', 4),
  new CalendarMonth(MonthEnum.JUNE, 'calendar.month.june', 5),
  new CalendarMonth(MonthEnum.JULY, 'calendar.month.july', 6),
  new CalendarMonth(MonthEnum.AUGUST, 'calendar.month.august', 7),
  new CalendarMonth(MonthEnum.SEPTEMBER, 'calendar.month.september', 8),
  new CalendarMonth(MonthEnum.OCTOBER, 'calendar.month.october', 9),
  new CalendarMonth(MonthEnum.NOVEMBER, 'calendar.month.november', 10),
  new CalendarMonth(MonthEnum.DECEMBER, 'calendar.month.december', 11)
];
