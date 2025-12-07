import {Component, HostBinding, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CalendarOptions} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import {CalendarMonth} from '../models/calendar-month.model';
import {Event} from '../models/event.model';
import {CalendarMonthDictionary} from '../dictionaries/calendar-month.dictionary';
import {COMMON_IMPORTS, CUSTOM_COMPONENTS, PRIMENG_BUTTONS_COMPONENTS} from '../shared/primeng-module-import';
import {MonthEnum} from '../enums/month.enum';
import {EventClip} from '../models/event-clip.model';
import {PlatformColorEnum, PlatformEnum} from '../enums/platform.enum';
import {PlatformImgPipe} from '../shared/pipes/platform-img.pipe';
import {ClipStylePipe} from '../shared/pipes/clip-style.pipe';
import {AnimateOnScrollModule} from 'primeng/animateonscroll';
import {MonthEventHelper} from '../helpers/MonthEventHelper';
import {platformButtonDictionaries} from '../dictionaries/platform-button.dictionary';
import {PlatformButtonConfig} from '../models/platform-button-config.model';
import {platformStatisticDictionary} from '../dictionaries/platform-statistic.dictionary';
import {PlatformStatistic} from '../models/platform-statistic.model';

@Component({
  selector: 'event-calendar-view',
  templateUrl: 'event-calendar-view.component.html',
  styleUrls: ['event-calendar-view.component.scss'],
  standalone: true,
  imports: [...COMMON_IMPORTS, ...PRIMENG_BUTTONS_COMPONENTS, PlatformImgPipe, ClipStylePipe, AnimateOnScrollModule, ...CUSTOM_COMPONENTS]
})
export class EventCalendarViewComponent implements OnInit {
  protected readonly PlatformEnum = PlatformEnum;
  protected readonly PlatformColorEnum = PlatformColorEnum;

  private router = inject(Router);
  platformButtonsDictionaries: PlatformButtonConfig[] = platformButtonDictionaries;
  selectedPlatformStatistic?: PlatformEnum = PlatformEnum.TWITCH;
  selectedPlatformStatisticColor?: string = PlatformColorEnum.TWITCH_ALFA;
  platformStatisticDictionary: PlatformStatistic[] = platformStatisticDictionary;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, bootstrap5Plugin],
    themeSystem: 'Slate',
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  calendarMonthDictionaries: CalendarMonth[] = CalendarMonthDictionary;
  selectedCalendarMonth: CalendarMonth | null = null;

  events: Event[] = [];

  @HostBinding('style.--accent-color')
  get accent(): string {
    const p = this.platformButtonsDictionaries.find(pl => pl.key === this.selectedPlatformStatistic);
    return p ? p.colorAlt! : '#9146FF';
  }

  ngOnInit(): void {
    this.onCalendarMonthClick(CalendarMonthDictionary[0]);
  }

  onPlatformStatisticSelected(value: PlatformEnum): void {
    this.selectedPlatformStatistic = value;
    this.selectedPlatformStatisticColor = this.getStatisticColorToPlatform();
  }

  getStatisticColorToPlatform(): string {
    let color = '';
    switch (this.selectedPlatformStatistic) {
      case PlatformEnum.TWITCH:
        color = PlatformColorEnum.TWITCH_ALFA;
        break;
      case PlatformEnum.KICK:
        color = PlatformColorEnum.KICK_ALFA;
        break;
      case PlatformEnum.YOUTUBE:
        color = PlatformColorEnum.YOUTUBE_ALFA;
        break;
      case PlatformEnum.ALL:
        color = PlatformColorEnum.ALL_ALFA;
        break;
    }
    return color;
  }

  onCalendarMonthClick(value: CalendarMonth): void {
    this.selectedCalendarMonth = value;
    this.loadMonthEvents(this.selectedCalendarMonth.id);
  }

  onClickLinkClick(url: string): void {
    window.open(url);
  }

  private loadMonthEvents(month: MonthEnum): void {
    this.events = MonthEventHelper.loadMonthEvents(month);
  }
}
