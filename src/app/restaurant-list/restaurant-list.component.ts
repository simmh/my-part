import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {'
  cardRepeat = 10;

  cardHTML = `
  <div class="card" style="width: 14.5rem;">
      <div class="img card-img-top"></div>
      <div class="card-body">
        <h5 class="card-title">카페 무라노</h5>
        <p class="category">카페, 파스타, 피자</p>
        <p class="limit-order">최소 주문: 16000 원</p>
        <p class="fly-tip">배달팁:
          <span>무료</span>
        </p>
        <p class="distnce"> 0.9km</p>
      </div>
      <div class="card-badge">asd</div>
    </div>
    `

  constructor() { }

  ngOnInit() {
  }

}
