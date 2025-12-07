import {MonthEnum} from '../enums/month.enum';

export class CalendarMonth {
  constructor(
    public id: MonthEnum,
    public labelName: string,
    public order?: number
  ) {
  }
}
