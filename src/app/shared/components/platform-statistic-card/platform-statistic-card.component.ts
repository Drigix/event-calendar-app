import {Component, Input} from '@angular/core';
import {PlatformStatistic} from '../../../models/platform-statistic.model';
import {COMMON_IMPORTS} from '../../primeng-module-import';
import {PlatformColorEnum, PlatformEnum} from '../../../enums/platform.enum';

@Component({
  selector: 'platform-statistic-card-component',
  templateUrl: './platform-statistic-card.component.html',
  styleUrls: ['./platform-statistic-card.component.scss'],
  standalone: true,
  imports: [COMMON_IMPORTS]
})
export class PlatformStatisticCardComponent {

  @Input()
  set platformStatistic(platformStatistic: PlatformStatistic) {
    this._platformStatistic = platformStatistic;
  }

  get platformStatistic(): PlatformStatistic {
    return this._platformStatistic;
  }

  @Input()
  set selectedPlatformStatisticColor(selectedPlatformStatisticColor: string) {
    this._selectedPlatformStatisticColor = selectedPlatformStatisticColor;
  }

  get selectedPlatformStatisticColor(): string | undefined {
    return this._selectedPlatformStatisticColor;
  }

  @Input()
  set selectedPlatformStatistic(selectedPlatformStatistic: PlatformEnum) {
    this._selectedPlatformStatistic = selectedPlatformStatistic;
    switch (this.selectedPlatformStatistic) {
      case PlatformEnum.TWITCH: {
        this.backgroundColor = PlatformColorEnum.TWITCH;
        break;
      }
      case PlatformEnum.KICK: {
        this.backgroundColor = PlatformColorEnum.KICK;
        break;
      }
      case PlatformEnum.YOUTUBE: {
        this.backgroundColor = PlatformColorEnum.YOUTUBE;
        break;
      }
    }
  }

  get selectedPlatformStatistic(): PlatformEnum | undefined {
    return this._selectedPlatformStatistic;
  }

  set backgroundColor(backgroundColor: string) {
    this._backgroundColor = backgroundColor;
  }

  get backgroundColor(): string | undefined {
    return this._backgroundColor;
  }

  private _platformStatistic: PlatformStatistic = new PlatformStatistic();
  private _selectedPlatformStatisticColor?: string;
  private _selectedPlatformStatistic?: PlatformEnum;
  private _backgroundColor: string | undefined;

}
