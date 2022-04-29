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
  coffeesBlended: Array<Coffee> = [];
  coffeesOrigin: Array<Coffee> = [];
  blendedCoffeeCounter: number = 0;
  originCoffeeCounter: number = 0;

  constructor(private coffeeService: CoffeeService) {

  }
  getAllCoffees() {
    this.coffeeService.getAllCoffees()
      .subscribe(coffees => this.coffees = coffees);
  }

  getOriginCoffeeCounter(): number
  {
    var originCoffeeCounter = 0;

    this.coffees.forEach(coff => {
      if(coff.tipo != 'Blend'){
        originCoffeeCounter++;
      }
    })

    return originCoffeeCounter;
  }

  getBlendedCoffeeCounter(): number
  {
    var blendedCoffeeCounter = 0;

    this.coffees.forEach(coff => {
      if(coff.tipo == 'Blend'){
        blendedCoffeeCounter+= 1;
      }
    })

    return blendedCoffeeCounter;
  }

  ngOnInit() {
    this.getAllCoffees();
  }
}
