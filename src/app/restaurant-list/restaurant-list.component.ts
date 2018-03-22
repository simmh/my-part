import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  cardList = [
    {
      name: '카페 무라노',
      category: ['카페', '파스타', '피자'],
      minimum: 15000,
      flyTip: 3000,
      distance: 0.8,
      img1: 'https://kcf1.foodfly.co.kr/restaurants/13656/174045292353aa5117bd3c4.jpg',
      img2: 'https://kcf1.foodfly.co.kr/restaurants/13656/153449878453aa5117bdf78.jpg'
    }];

  cardRepeat() {
    const card = this.cardList[0];
    for (let i = 1; i < 12; i++) {
      this.cardList = [...this.cardList, card];
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.cardRepeat();
  }
}
