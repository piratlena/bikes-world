import { Component, OnInit } from '@angular/core';
import { ProductCards } from 'src/app/data/product-card';
import { Card } from 'src/app/types/ProductCard';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  products: Card[] = ProductCards;

  ngOnInit(): void {}
}
