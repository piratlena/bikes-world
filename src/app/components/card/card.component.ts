import { Component, OnInit, Input } from '@angular/core';
import { ProductCards } from 'src/app/data/product-card';
import { Card } from 'src/app/types/ProductCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  product!: Card;

  constructor() {}
  ngOnInit(): void {}
}
