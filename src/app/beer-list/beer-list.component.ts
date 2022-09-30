import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
    'name' : 'Negra Juerte',
    'type' : 'Porter',
    'price' : 123,
    'stock' : 100,
    'image' : 'assets/img/porter.jpg',
    'clearance': false,
    },
    {
      'name' : 'Imperial',
      'type' : 'IPA',
      'price' : 110,
      'stock' : 100,
      'image' : 'assets/img/imperial.jpg',
      'clearance': true,
      },
      {
        'name' : 'Stella Artois',
        'type' : 'Stella Artois',
        'price' : 200,
        'stock' : 0,
        'image' : 'assets/img/stella.png',
        'clearance': false,
        }
]
  constructor() { }

  ngOnInit(): void {
  }

}
