import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { CardataService } from '../../services/cardata.service';

import { IFavoriteCards } from 'src/app/interfaces/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';

@Component({
  selector: 'app-car-shell',
  templateUrl: './car-shell.component.html',
  styleUrls: ['./car-shell.component.scss'],
})
export class CarShellComponent implements OnInit {

  public cars: ICar[] = [];
  public favorites!: Array<IFavoriteCards>;
  public favoriteType: Favotite = Favotite.Car;

  constructor(
    public carService: CardataService,
    public favoriteService: SelectedEntitiesService
  ) {}

  ngOnInit(): void {
    (this.cars = this.carService.getCars()),
      (this.favorites = this.favoriteService.getFavoritesData());
  }
}