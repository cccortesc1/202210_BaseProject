import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees: Array<Coffee> = [];

  constructor(private coffeeService: CoffeeService) { }
  getAllCoffees() {
    this.coffeeService.getAllCoffees()
      .subscribe(coffees => this.coffees = coffees);
  }

  ngOnInit() {
    this.getAllCoffees();
  }
}
